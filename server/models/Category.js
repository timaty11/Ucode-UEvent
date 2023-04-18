import client from '../client.js';
import Event from './Event.js';
import ApiError from '../exceptions/api-error.js';

class Category {
  async getAllCategory() {
    const categories = await client('categories').select('*');
    const numberEventInCategories = categories.map(async (category) => {
      const eventsWithCategory = await this.getAllEventByCategoryId(category.id);
      return {
        ...category,
        countEvent: eventsWithCategory.length,
      }
    });
    return await Promise.all(numberEventInCategories);
  }
  async findCategoryId(id) {
    const category = await client('categories').select('*').where('id', '=', id);
    if (category.length === 0) {
      return [];
      // throw ApiError.NotFound('Category not found');
    }
    return category[0];
  }

  async findCategoryTitle(title) {
    const category = await client('categories').select('*').where('title', '=', title);
    return category[0];
  }

  async isEqualCategory(title) {
    const category = await client('categories')
      .select('*')
      .where('title', '=', title);
    return category.length !== 0;
  }
  async createCategory(data) {
    try {
      if (await this.isEqualCategory(data.title)) {
        throw ApiError.BadRequest('category exist');
      }
      await client('categories').insert(data);
      return;
    } catch (err) {
      throw err;
    }
  }

  async updateCategory(id, { title, description }) {
    try {
      if (await this.isEqualCategory(title)) {
        throw ApiError.BadRequest('category is exist');
      }
      await client('categories')
        .update({
          title,
          description,
        })
        .where('id', '=', id);
    } catch (err) {
      throw err;
    }
  }
  async deleteCategory(id) {
    try {
      await client('categories').where('id', '=', id).del();
    } catch (err) {
      throw err;
    }
  }
  async getAllEventByCategoryId(categoryId) {
    const category = await client('events')
      .join('event_categories', 'events.id', 'event_categories.event_id')
      .where('event_categories.category_id', '=', categoryId);
    const postsPromises = category.map((item) => Event.findOne(item.id));
    return await Promise.all(postsPromises);
  }
}

export default new Category();
