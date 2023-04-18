import cityService from '../services/city.service.js';

class Comments {
  async getAll() {
    return await cityService.getAll();
  }

}

export default new Comments();
