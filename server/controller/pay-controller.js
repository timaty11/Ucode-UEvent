import PayService from '../services/pay.service.js';
import TokenService from '../services/token-service.js';

class Pay {
  async getCoupons(req, _res) {
    const token = req.headers.authorization?.split(' ')[1];
    const { id } = TokenService.validateAccessToken(token);
    return await PayService.getCoupons(id);
  }

  async getPromoCodes(req, _res) {
    const token = req.headers.authorization?.split(' ')[1];
    const { id } = TokenService.validateAccessToken(token);
    return await PayService.getPromoCodes(id, req.params.id);
  }

  async createCoupon(req, _res) {
    const token = req.headers.authorization?.split(' ')[1];
    const { id } = TokenService.validateAccessToken(token);
    return await PayService.createCoupon(id, req.body);
  }

  async createPromoCode(req, _res) {
    const token = req.headers.authorization?.split(' ')[1];
    const { id } = TokenService.validateAccessToken(token);
    return await PayService.createPromoCode(id, req.params.id, req.body.count);
  }

  async createSessionIntent(req, _res) {
    const { item } = req.body;
    console.log(item)
    const token = req.headers.authorization?.split(' ')[1];
    TokenService.validateAccessToken(token);
    const data = await PayService.createSessionIntent(item);
    return data;
  }

  async createSessionRetrive(req, _res) {
    const { sessionId, eventId } = req.body;
    const token = req.headers.authorization?.split(' ')[1];
    const { id: userId } = TokenService.validateAccessToken(token);
    const result = await PayService.createSessionRetrive(
      userId,
      eventId,
      sessionId
    );
    return result;
  }

  async createRefundsPayment(req, _res) {
    const { id } = req.body;
    const token = req.headers.authorization?.split(' ')[1];
    const { id: userId } = TokenService.validateAccessToken(token);
    const data = await PayService.createRefaundPayment(id, userId);
    return data;
  }

  async deleteCoupon(req, _res) {
    const token = req.headers.authorization?.split(' ')[1];
    const { id } = TokenService.validateAccessToken(token);
    return await PayService.deleteCoupon(id, req.params.id);
  }
}

export default new Pay();
