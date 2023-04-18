import Express from 'express';
import Comments from '../controller/comments-controller.js';
import tryCatch from '../utils/try-catch.event.js';
import adminRoutes from '../routes/admin-routes.js';
import accessDenied from '../middlewares/comment.access-enied.js'

const router = Express.Router();

router.get(adminRoutes.commentsGetPath(), tryCatch(Comments.getAllComments));
router.get(adminRoutes.commentsIdGetPath(), tryCatch(Comments.getCommentById));

router.get(adminRoutes.commentIdReactionGetPath(), tryCatch(Comments.getCommentIdReaction));

router.post(adminRoutes.commentIdReactionPath(), tryCatch(Comments.createReactionComment));
router.delete(adminRoutes.commentIdDeleteReactionPath(), tryCatch(Comments.deleteReactionComment));

router.patch(adminRoutes.commentsIdUpdatePath(), accessDenied, tryCatch(Comments.updateCommentData));
router.delete(adminRoutes.commentsIdDeletePath(), accessDenied, tryCatch(Comments.deleteComment));

export default router;
