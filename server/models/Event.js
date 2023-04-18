import client from '../client.js';
import Ticket from './Ticket.js';
import Category from './Category.js';
import ApiError from '../exceptions/api-error.js';
import _ from 'lodash';
import Comment from './Comment.js';
import User from './User.js';
import Organization from './Organization.js';
import City from './City.js';
class Event {
  async getAll(filter) {
    const data = await this.filterEvents(filter);
    const events = data.map(async (event) => {
      const tickets = await this.getAllTickets(event.id);
      const eventCategories = await this.getAllCategories(event.id);
      const priceTicket = tickets[0]?.price;
      const cityEvent = await City.findCityName(event?.city);
      return {
        ...event,
        priceTicket: priceTicket,
        categories: eventCategories,
        city: cityEvent,
      };
    });
    return Promise.all(events);
  }

  async filterEvents(params) {
    if (_.isEmpty(params)) {
      return await client('events').select('*');
    }
    const names = _.uniq(
      Object.keys(params)?.map((item) => item.split(/\d/)[0])
    );
    const filterValue = Object.keys(params).reduce(
      (acc, key) => {
        if (key.split(/\d/)[0] === 'category') {
          return {
            category: [...acc.category, params[key]],
            city: acc?.city ? acc.city : [],
          };
        } else {
          return {
            category: acc?.category ? acc.category : [],
            city: [...acc.city, params[key]],
          };
        }
      },
      { category: [], city: [] }
    );
    if (names.length === 1) {
      const promise = filterValue[names[0]].map(async (search) => {
        if (names[0] === 'category') {
          const { id } = await Category.findCategoryTitle(search);
          return await Category.getAllEventByCategoryId(id);
        }
        return await this.getEventsByCityName(search);
      });
      const filterEvent = await Promise.all(promise);
      // const flatFilterEvent = filterEvent;

      return filterEvent.flat();
    }
    const promiseCategoriesEvent = filterValue['category'].map(
      async (search) => {
        const { id } = await Category.findCategoryTitle(search);
        return await Category.getAllEventByCategoryId(id);
      }
    );
    const categoriesEvent = await Promise.all(promiseCategoriesEvent);
    const filterCityAndCategoryEvent = categoriesEvent
      .flat()
      .filter(({ city }) => filterValue['city'].includes(city));
    return filterCityAndCategoryEvent;
  }

  async getEventsByCityName(name) {
    return await client('events').select('*').where('city', '=', name);
  }

  async search(str) {
    const events = await this.getAll();
    const promises = events.map(async (event) => {
      const { name_organization } = await Organization.findOrganizationByUserId(
        event.user_id
      );
      return {
        ...event,
        name_organization,
      };
    });
    const eventAndOrganizationName = await Promise.all(promises);
    const filterEventsTitle = eventAndOrganizationName.filter((event) =>
      _.includes(event.title.toLowerCase(), str)
    );
    const filterEventsCity = eventAndOrganizationName.filter((event) =>
      _.includes(event.city['en'].toLowerCase(), str)
    );
    const filterEventsAddress = eventAndOrganizationName.filter((event) =>
      _.includes(event.address.toLowerCase(), str)
    );
    const filterEventsOrganization = eventAndOrganizationName.filter((event) =>
      _.includes(event.name_organization.toLowerCase(), str)
    );
    return _.unionBy(
      [
        ...filterEventsTitle,
        ...filterEventsCity,
        ...filterEventsAddress,
        ...filterEventsOrganization,
      ],
      'id'
    );
  }

  async findOne(id) {
    const data = await client('events').select('*').where('id', '=', id);
    if (data.length === 0) {
      throw ApiError.NotFound('event not found');
    }
    const tickets = await this.getAllTickets(data[0].id);
    const eventCategories = await this.getAllCategories(data[0].id);
    const city = await City.findCityName(data[0].city);
    return {
      ...data[0],
      priceTicket: tickets[0]?.price,
      categories: eventCategories || [],
    };
  }

  async getAllTickets(id) {
    try {
      const data = await client('tickets')
        .select('*')
        .where('event_id', '=', id);
      return data;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  async recommend(id) {
    const event = await this.findOne(id); //
    const allEvent = await this.getAll(); // вытаскиваем все ивенты для фільтрации городов

    const eventCategories = await this.getAllCategories(id);

    const promises = eventCategories.flatMap((item) =>
      Category.getAllEventByCategoryId(item.id)
    );

    const eventsSameCategories = await Promise.all(promises);
    const filterEvent = _.uniqBy(eventsSameCategories.flat(), 'id').filter(
      (item) => item.id !== id
    );
    const filterSameCity = allEvent.filter(
      (item) => item.city === event.city && item.id !== id
    );

    const filterSameCityAndSameCategories = filterSameCity.filter(
      async (item) => {
        const itemCategories = await this.getAllCategories(item.id);
        const isEqualCategory = eventCategories.map((i) => {
          for (const category of itemCategories) {
            if (category.id === i.id) {
              return i;
            }
            return '';
          }
        });
        return item.city === event.city && isEqualCategory.filter((i) => i);
      }
    );

    return _.uniqBy(
      [...filterSameCityAndSameCategories, ...filterSameCity, ...filterEvent],
      'id'
    );
  }

  async getAllCategories(id) {
    try {
      const data = await client('event_categories')
        .select('category_id')
        .where('event_id', '=', id);
      const promisesCategoriesEvent = data.map(({ category_id }) =>
        Category.findCategoryId(category_id)
      );
      return await Promise.all(promisesCategoriesEvent);
    } catch (err) {
      throw err;
    }
  }

  async getAllUsersSellTicketByEventId(event_id, userId) {
    try {
      const ticketsEvent = await this.getAllTickets(event_id);
      const soldTicket = ticketsEvent.filter(({ is_sold }) => is_sold);
      const promises = soldTicket.map(async ({ id }) => {
        const data = await client('user_tickets')
          .select('user_id')
          .where('ticket_id', '=', id);
        return data[0];
      });
      const [{ role }] = await User.getRole(userId);
      const userIds = await Promise.all(promises);
      const users = userIds.map(async ({ user_id }) => {
        const userData = await User.findUserId(user_id);
        if (userData.hidden && role !== 'organization' && userId !== user_id) {
          return [];
        }
        return userData;
      });
      const allUsers = await Promise.all(users);
      return allUsers.filter((item) => item.length !== 0);
    } catch (err) {
      throw err;
    }
  }

  async sellTicket(userId, ticket, payment_intent) {
    try {
      const isEqual = await Ticket.isEqualTicket(payment_intent);
      if (!isEqual) {
        return;
      }
      await Ticket.soldTicket(ticket.id, payment_intent);
      await client('user_tickets').insert({
        ticket_id: ticket.id,
        user_id: userId,
      });
      return 'Success';
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  async save({
    id,
    userId,
    title,
    description,
    city,
    address,
    poster,
    event_start,
    event_end,
    ...category
  }) {
    try {
      await client('events').insert({
        id,
        user_id: userId,
        title,
        description,
        city,
        address,
        poster,
        event_start,
        event_end,
      });
      const promises = Object.values(category).map((categoryId) =>
        client('event_categories').insert({
          event_id: id,
          category_id: categoryId,
        })
      );
      await Promise.all(promises);
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  async getAllCommentsEvent(eventId) {
    const commentsId = await client('event_comments')
      .select('comment_id')
      .where('event_id', '=', eventId);
    const commentsEvent = commentsId.map(async ({ comment_id }) => {
      const data = await client('comments')
        .select('*')
        .where('id', '=', comment_id);
      return data[0];
    });
    return Promise.all(commentsEvent);
  }

  async updateEvent({
    id,
    title,
    description,
    city,
    address,
    poster,
    eventStart,
    eventEnd,
    ...categories
  }) {
    try {
      await client('events')
        .update({
          title,
          description,
          city,
          address,
          poster,
          event_start: eventStart,
          event_end: eventEnd,
        })
        .where('id', '=', id);
      await updateCategories(id, categories);
    } catch (err) {
      throw err;
    }
  }

  async createFavorite(event_id, user_id) {
    const isActive = await client('user_favorite_events')
      .where('event_id', '=', event_id)
      .andWhere('user_id', '=', user_id);
    if (isActive.length === 0) {
      await client('user_favorite_events').insert({
        event_id,
        user_id,
      });
      return 'create';
    }

    await client('user_favorite_events')
      .where('event_id', '=', event_id)
      .andWhere('user_id', '=', user_id)
      .del();
    return 'delete';
  }

  async updateCategories(id, categories = []) {
    try {
      const eventCategories = await this.getAllCategories(id);
      const idOldCategory = eventCategories.map(({ id }) => id);
      const idNewCategories = Object.values(categories);

      if (_.isEqual(idOldCategory, idNewCategories)) {
        return;
      }
      await client('event_categories').where('event_id', '=', id).del();
      const promises = idNewCategories.map(
        async (category_id) =>
          await client('event_categories').insert({
            event_id: id,
            category_id: category_id,
          })
      );
      await Promise.all(promises);
    } catch (err) {
      throw err;
    }
  }

  async isEqualTitle(title, { id = '' }) {
    try {
      const data = await client('events')
        .select('*')
        .where('title', '=', title);
      console.log(data);
      if (data[0]?.id === id && data) {
        return false;
      }
      return data.length !== 0;
    } catch (err) {
      throw err;
    }
  }

  async deleteEvent(id) {
    try {
      await client('events').where('id', '=', id).del();
      await this.updateCategories(id);
      await Ticket.daleteTickets(id);
      const allCommentsEvent = await this.getAllCommentsEvent(id);
      await Comment.deleteAllCommentEvent(allCommentsEvent);
      return 'delete event';
    } catch (err) {
      throw err;
    }
  }
}

export default new Event();
