import $api from '../utils/api.js';
import clientRoutes from '../src/routes/api/apiClientRoutes.js';
import adminRoutes from '../src/routes/api/apiAdminRoutes.js'

const CategoriesService = {
  getAll() {
    return $api.get(adminRoutes.categoriesGetPath());
  },
};

export { CategoriesService };
