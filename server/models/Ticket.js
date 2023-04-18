import client from '../client.js';
import ApiError from '../exceptions/api-error.js';

class Ticket {
  async getAll() {
    const data = await client('tickets').select('*');
    return data;
  }

  async findOne(id) {
    const data = await client('tickets')
      .where('id', '=', id)
      .select('*');
    return data[0];
  }

  async isEqualTicket(payment_intent) {
    const data = await client('tickets')
      .where('payment_intent', '=', payment_intent)
      .select('*');
    return data.length === 0;
  }

  async saveTickets({ id, eventId, price }) {
    try {
      await client('ticket').insert({
        id,
        event_id: eventId,
        price,
      });
    } catch (err) {
      if (!err.toString().match(/ignore/)) {
        console.log(err);
        throw err;
      }
    }
  }

  // async dropUser(id) {
  //   try {
  //     await client('users').where('id', '=', id).del();
  //   } catch (err) {
  //     throw err;
  //   }
  // }

  async soldTicket(id, payment_intent) {
    try {
      await client('tickets')
        .where('id', '=', id)
        .update({ is_sold: true, payment_intent });
    } catch (err) {
      throw err;
    }
  }
  async inactiveTicket(id) {
    try {
      await client('tickets').where('id', '=', id).update('is_sold', false);
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  async ticketReturn(ticketId, userId) {
    try {
      const data = await client('user_tickets')
        .select('*')
        .where('ticket_id', '=', ticketId)
        .andWhere('user_id', '=', userId);
      if (data.length === 0) {
        return ApiError.AccessDenied();
      }
      await this.inactiveTicket(ticketId);
      await client('user_tickets')
        .select('*')
        .where('ticket_id', '=', ticketId)
        .del();
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
  async daleteTickets(id) {
    try {
      await client('tickets').where('event_id', '=', id).del();
    } catch (err) {
      throw err;
    }
  }
}

export default new Ticket();
