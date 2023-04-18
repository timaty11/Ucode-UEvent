import { v4 as uuidv4 } from 'uuid';
import Comment from '../models/Comment.js';
import ApiError from '../exceptions/api-error.js';

class CommentService {
  async getAll() {
    return await Comment.getAll();
  }

  async getCommentById({ id }) {
    return await Comment.findId(id);
  }

  async getCommentIdReaction({ id }) {
    return await Comment.getReactins(id);
  }

  async createReactionComment({ id, type }, userId) {
    return await Comment.createReaction(id, userId, type);
  }

  async deleteReactionComment({ id }, userId) {
    return await Comment.deleteReaction(id, userId);
  }

  async updateCommentData({ params: { id }, body: { content } }, userId) {
    const { user_id } = await Comment.findId(id);
    if (user_id !== userId) {
      throw ApiError.AccessDenied('Access denied, your ne tot User');
    }
    return await Comment.updateComment(id, content);
  }

  async deleteComment({ id }, userId) {
    const { user_id } = await Comment.findId(id);
    if (user_id !== userId) {
      throw ApiError.AccessDenied('Access denied, your ne tot User');
    }
    return await Comment.deleteComment(id);
  }
}

export default new CommentService();
