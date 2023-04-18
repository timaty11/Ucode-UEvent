import client from '../client.js';
import ApiError from '../exceptions/api-error.js';
import _ from 'lodash';

class Comment {
  async getAll() {
    return await client('comments').select('*');
  }

  async findId(id) {
    const comment = await client('comments').select('*').where('id', '=', id);
    if (comment.length === 0) {
      throw ApiError.NotFound('Comment not found');
    }
    return comment[0];
  }

  async getReactins(id) {
    const reaction = await client('like_comments')
      .select('*')
      .where('comment_id', '=', id);
    return reaction;
  }

  async createReaction(comment_id, user_id, type) {
    const userReaction = await client('like_comments')
      .where('comment_id', '=', comment_id)
      .andWhere('user_id', '=', user_id);

    if (
      userReaction &&
      !_.isUndefined(userReaction[0]?.is_like) &&
      !!userReaction[0]?.is_like === (type === 'like')
    ) {
      throw ApiError.BadRequest('You have already reacted to this comment');
    } else {
      await this.deleteReaction(comment_id, user_id);
    }

    await client('like_comments').insert({
      user_id,
      comment_id,
      is_like: type === 'like',
    });

    return 'create ' + type;
  }

  async deleteReaction(commentId, userId) {
    await client('like_comments')
      .where('comment_id', '=', commentId)
      .andWhere('user_id', '=', userId)
      .del();

    return 'delete';
  }

  async deleteComment(id) {
    try {
      await client('comments').where('id', '=', id).del();
      await client('event_comments').where('comment_id', '=', id).del();
      await client('like_comments').where('comment_id', '=', id).del();
      return 'delete comment :)';
    } catch (err) {
      throw err;
    }
  }

  async deleteAllCommentEvent(comments) {
    const promises = comments.map(({ id }) => this.deleteComment(id));
    return await Promise.all(promises);
  }

  async updateComment(id, content) {
    try {
      await client('comments').where('id', '=', id).update({ content, is_change: true });
      return 'update comment :)';
    } catch (err) {
      throw err;
    }
  }

  async createComment(id, event_id, user_id, content) {
    const created_at = new Date(Date.now());
    try {
      await client('comments').insert({
        id,
        user_id,
        content,
        created_at,
      });
      const comment = await client('comments').select('*').where('id', '=', id);
      await client('event_comments').insert({
        comment_id: comment[0].id,
        event_id,
      });
      return { massage: 'create comments', commentInfo: comment[0] };
    } catch (err) {
      throw err;
    }
  }
}

export default new Comment();
