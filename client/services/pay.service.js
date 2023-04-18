import $api from '../utils/api.js';
import clientRoutes from '../src/routes/api/apiClientRoutes.js';
import adminRoutes from '../src/routes/api/apiAdminRoutes.js'

const PayService = {
  getCoupons() {
    return $api.get(adminRoutes.getCoupons());
  },
  getPromoCodes(id) {
    return $api.get(adminRoutes.getPromocodes(id));
  }
};

export { PayService };
