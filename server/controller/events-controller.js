import eventService from '../services/event.service.js';
import TokenService from '../services/token-service.js';
import { validationResult } from 'express-validator';
import ApiError from '../exceptions/api-error.js';

class Events {
  async getAllEvents(req, _res) {
    const result = await eventService.getAllEvents(req.query);
    return result;
  }

  async searchEvent(req, _res) {
    const { query } = req.query;
    return await eventService.searchEvent(query);
  }

  async getEventsById(req, _res) {
    return await eventService.getEventsById(req.params);
  }

  async getAllEventTickets(req, _res) {
    const { id: eventId } = req.params;
    const result = await eventService.getAllEventTickets(eventId);
    return {
      tickets: result,
      count: result.length,
      ticketsLeft: result.filter((i) => !i.is_sold).length,
    };
  }

  async recommendEvent(req, _res) {
    const { id } = req.params;
    return await eventService.recommendEvent(id);
  }

  async getAllCategoriesByEventId(req, _res) {
    return await eventService.getAllCategoriesByEventId(req.params);
  }

  async returnTicketEvent(req, _res) {
    const { id: ticketId } = req.params;
    const token = req.headers.authorization?.split(' ')[1];
    TokenService.validateAccessToken(token);
    const result = await eventService.ticketReturn(ticketId);
    return result;
  }

  async getAllUsersSellTicketByEventId(req, _res) {
    const token = req.headers.authorization?.split(' ')[1];
    const { id } = TokenService.validateAccessToken(token);
    return await eventService.getAllUsersSellTicketByEventId({
      eventId: req.params.id,
      id,
    });
  }

  async createEvent(req, _res) {
    const token = req.headers.authorization?.split(' ')[1];
    const { id } = TokenService.validateAccessToken(token);
    const result = await eventService.createEvent({ ...req.body, userId: id });
    return result;
  }

  async getAllComments(req, _res) {
    return eventService.getAllCommentsEvent(req.params);
  }

  async createComment(req, _res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      throw ApiError.BadRequest('Invalid ti', errors.array());
    }
    const token = req.headers.authorization?.split(' ')[1];
    const { id } = TokenService.validateAccessToken(token);
    return await eventService.createComment(req, id);
  }

  async createFavoriteEvent(req, _res) {
    const { id: eventId } = req.params;
    const token = req.headers.authorization?.split(' ')[1];
    const { id } = TokenService.validateAccessToken(token);
    return await eventService.createFavoriteEvent({ eventId, userId: id });
  }

  async eventEploadFile(req, _res) {
    return { filename: req.file['filename'] };
  }

  async updateEvent(req, _res) {
    return await eventService.updateEvent(req);
  }
  async deleteEvent(req, _res) {
    return await eventService.deleteEvent(req.params.id);
  }
}

export default new Events();
