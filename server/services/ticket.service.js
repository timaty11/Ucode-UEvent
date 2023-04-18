import { v4 as uuidv4 } from 'uuid';
import Ticket from '../models/Ticket.js';
import Event from '../models/Event.js';
import ApiError from '../exceptions/api-error.js';
import axios from 'axios';

class TicketService {
  async getAllTickets() {
    return await Ticket.getAll();
  }

  // async getAllEventTickets(eventId) {
  //   return await Event.getAllTickets(eventId);
  // }

  // async sellTicket(userId, eventId) {
  //   return await Event.sellTicket(userId, eventId);
  // }
  async createTicket({ eventId, count, price }) {
    try {
      const isEmpty = await Event.findId(eventId);
      if (isEmpty.length === 0) {
        throw ApiError.NotFound();
      }
      for (let i = 0; i < count; i += 1) {
        const ticket_id = uuidv4();
        await Ticket.saveTickets({ id: ticket_id, eventId, price });
      }
    } catch (err) {
      throw err;
    }
  }

  // async createEvent(body) {
  //   const id = uuidv4();
  //   await Event.save({ id, ...body });
  //   return `create event ${body.title}`;
  // }
}

export default new TicketService();
