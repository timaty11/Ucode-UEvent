import $api from '../utils/api.js';
import clientRoutes from '../src/routes/api/apiClientRoutes.js';
import adminRoutes from '../src/routes/api/apiAdminRoutes.js'

const OrganizationService = {
  getAll() {
    return $api.get(adminRoutes.orgaGetPath());
  },
};

export { OrganizationService };
