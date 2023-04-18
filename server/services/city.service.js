
import City from '../models/City.js';

class CityService {
  async getAll() {
    return await City.getAll();
  } 
}

export default new CityService();
