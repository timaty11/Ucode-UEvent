import $api from '../utils/api.js';
import clientRoutes from '../src/routes/api/apiClientRoutes.js';

const CitiesService = {
  getCities() {
    return $api.get(clientRoutes.getCities());
  },
};

export { CitiesService };
