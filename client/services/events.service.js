import $api from '../utils/api.js';
import routes from '../src/routes/api/apiClientRoutes.js';

const EventService = {
  getAll() {
    return $api.get(routes.getAllEvent());
  },
  getEventId(id) {
    return $api.get(routes.getEventById(id));
  },
  getSearchEvent(searchElement) {
    return $api.get(routes.getSearchEvent(searchElement));
  },
  getAllCommentsByEventId(id) {
    return $api.get(routes.getAllCommentsByEventId(id));
  },
  getEventRecommend(id) {
    return $api.get(routes.getEventRecommend(id));
  },
  createComment({ eventId, content }) {
    return $api.post(routes.createComment(eventId), { content });
  },
  getTicketsByEventId(id) {
    return $api.get(routes.getTicketsEvent(id))
  }
};

export { EventService };
