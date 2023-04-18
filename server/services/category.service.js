import { v4 as uuidv4 } from 'uuid';
import Category from '../models/Category.js';

class CategoryService {
  async getAllCategory() {
    return await Category.getAllCategory();
  }

  async getCategoryById({ id }) {
    return await Category.findCategoryId(id);
  }

  async getAllEventByCategoryId({ id }) {
    return await Category.getAllEventByCategoryId(id);
  }

  async updateCategoryData({ params: { id }, body: data }) {
    await Category.updateCategory(id, data);
  }

  async createCategory(body) {
    const id = uuidv4();
    await Category.createCategory({ id, ...body });
    return `create category ${body.title}`;
  }

  async deleteCategory({ id }) {
    await Category.deleteCategory(id);
    return `delete category ${id}`;
  }
}

export default new CategoryService();
