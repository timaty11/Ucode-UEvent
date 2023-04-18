import $api from '../utils/api.js';
import clientRoutes from '../src/routes/api/apiClientRoutes.js';

const CommentsService = {
  getReactionComment(id) {
    return $api.get(clientRoutes.getReactionComment(id));
  },
};

export { CommentsService };
