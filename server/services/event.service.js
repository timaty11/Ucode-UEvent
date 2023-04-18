import { v4 as uuidv4 } from 'uuid';
import Comment from '../models/Comment.js';
import Event from '../models/Event.js';
import axios from 'axios';
import Organization from '../models/Organization.js';
import ApiError from '../exceptions/api-error.js';

class EventService {
  async getAllEvents(quary) {
    return await Event.getAll(quary);
  }

  async searchEvent(searchElement) {
    return await Event.search(searchElement.toLowerCase());
  }

  async getEventsById({ id }) {
    return await Event.findOne(id);
  }

  async recommendEvent(id) {
    return await Event.recommend(id);
  }

  async createComment({ params: { id: eventId }, body: { content } }, userId) {
    const commentId = uuidv4();
    return await Comment.createComment(commentId, eventId, userId, content);
  }

  async getAllEventTickets(eventId) {
    return await Event.getAllTickets(eventId);
  }

  async getAllCategoriesByEventId({ id }) {
    return await Event.getAllCategories(id);
  }


  async getAllUsersSellTicketByEventId({ eventId, id }) {
    return await Event.getAllUsersSellTicketByEventId(eventId, id);
  }

  async createFavoriteEvent({ eventId, userId }) {
    return await Event.createFavorite(eventId, userId);
  }

  async ticketReturn(ticketId) {
    return await Event.ticketReturn(ticketId);
  }

  async getAllCommentsEvent({ id }) {
    return await Event.getAllCommentsEvent(id);
  }

  async createEvent(body) {
    const id = uuidv4();
    await Event.save({ id, ...body });
    return `create event ${body.title}`;
  }

  async updateEvent({ body, params: { id } }) {
    await Event.updateEvent({ id, ...body });
    return `create event ${body.title}`;
  }

  async deleteEvent(id) {
    await Event.deleteEvent(id);
  }
}

export default new EventService();
