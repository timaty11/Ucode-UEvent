import organizationService from '../services/organization.service.js';
import encrypt from '../encrypt.js';
// import SendMail from '../services/send-mail.js';
// import ApiError from '../exceptions/api-error.js';
import TokenService from '../services/token-service.js';

class Organization {
  async getAllOrganization(req, _res) {
    return await organizationService.getAllOrganization();
  }

  async getOrganizationByUserId(req, _res) {
    const token = req.headers.authorization?.split(' ')[1];
    const { id } = TokenService.validateAccessToken(token);
    return await organizationService.getOrganizationByUserId(id);
  }

  async getSteps(req, _res) {
    const token = req.headers.authorization?.split(' ')[1];
    const { id } = TokenService.validateAccessToken(token);
    return await organizationService.getStep(id);
  }

  async authRegisterOrganization(req, _res) {
    return await organizationService.createOrganization(req);
  }

  async saveNewOrganization(req, _res) {
    const { step } = req.params;
    const token = req.headers.authorization?.split(' ')[1];
    const { id } = TokenService.validateAccessToken(token);
    return await organizationService.saveNewOrganization({
      user_id: id,
      step,
      orgData: req.body,
    });
  }

  async createPromoCodes(req, _res) {
    const token = req.headers.authorization?.split(' ')[1];
    const { id } = TokenService.validateAccessToken(token);
    return await organizationService.createPromoCodes(id, req.body);
  }

  async subscriptionOrganization(req, _res) {
    const token = req.headers.authorization?.split(' ')[1];
    const { id } = TokenService.validateAccessToken(token);
    return await organizationService.subscriptionOrganization(
      req.params.id,
      id
    );
  }
}

export default new Organization();
