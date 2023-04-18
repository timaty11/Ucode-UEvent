import categoryService from '../services/category.service.js';

class Categories {
  async getAllCategory(_req, _res) {
    return await categoryService.getAllCategory();
  }

  async getCategoryById(req, _res) {
    return await categoryService.getCategoryById(req.params);
  }

  async getAllEventByCategoryId(req, _res) {
    return await categoryService.getAllEventByCategoryId(req.params);
  }

  async createCategory(req, _res) {
    return await categoryService.createCategory(req.body);
  }

  async updateCategoryData(req, _res) {
    return await categoryService.updateCategoryData(req);
  }

  async deleteCategory(req, _res) {
    return await categoryService.deleteCategory(req.params);
  }
}

export default new Categories();
