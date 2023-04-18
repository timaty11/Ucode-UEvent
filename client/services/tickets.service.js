import $api from '../utils/api.js';
// import clientRoutes from '../src/routes/api/apiClientRoutes.js';
import adminRoutes from '../src/routes/api/apiAdminRoutes.js'

const TicketsService = {
  getAll() {
    return $api.get(adminRoutes.ticketsGetPath());
  },
};

export { TicketsService };
