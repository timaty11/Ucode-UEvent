import ticketService from '../services/ticket.service.js';
import tokenService from '../services/token-service.js';
import { v4 as uuidv4 } from 'uuid';

class Tickets {
  async getAllTikets(_req, _res) {
    return await ticketService.getAllTickets();
  }
  async createTickets(req, _res, _next) {
    return ticketService.createTicket(req.body);
  }
};

export default new Tickets();
