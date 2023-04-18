import commentService from '../services/comment.service.js';
import TokenService from '../services/token-service.js';

class Comments {
  async getAllComments() {
    return await commentService.getAll();
  }

  async getCommentById(req, _res) {
    return await commentService.getCommentById(req.params);
  }

  async getCommentIdReaction(req, _res) {
    return await commentService.getCommentIdReaction(req.params);
  }

  async createReactionComment(req, _res) {
    const token = req.headers.authorization.split(' ')[1];
    const { id } = TokenService.validateAccessToken(token);
    return await commentService.createReactionComment(req.params, id);
  }
  async deleteReactionComment(req, _res) {
    const token = req.headers.authorization.split(' ')[1];
    const { id } = TokenService.validateAccessToken(token);
    return await commentService.deleteReactionComment(req.params, id);
  }

  async updateCommentData(req, _res) {
    const token = req.headers.authorization.split(' ')[1];
    const { id } = TokenService.validateAccessToken(token);
    return await commentService.updateCommentData(req, id);
  }

  async deleteComment(req, _res) {
    const token = req.headers.authorization.split(' ')[1];
    const { id } = TokenService.validateAccessToken(token);
    return await commentService.deleteComment(req.params, id);
  }
}

export default new Comments();
