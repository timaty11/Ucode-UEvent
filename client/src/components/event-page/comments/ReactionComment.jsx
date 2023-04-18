import React, { useEffect } from 'react';
import ReactionElement from './ReactionElement.jsx';
import $api from '../../../../utils/api.js';
import apiClientRoutes from '../../../routes/api/apiClientRoutes.js';
import _ from 'lodash';

const ReactionComment = ({ commentId, data, currentUser }) => {

  const [activeReactions, setActiveReaction] = React.useState({
    like: false,
    dislike: false,
  });

  const [reaction, setReaction] = React.useState(data.reduce(
        (acc, item) => {
          return {
            like: !!item.is_like ? acc.like + 1 : acc.like,
            dislike: !item.is_like ? acc.dislike + 1 : acc.dislike,
          };
        },
        { like: 0, dislike: 0 }
      ));

  useEffect(() => {
    const userReaction = data.find((item) => item.user_id === currentUser.id);
    setActiveReaction({
      like: !!userReaction?.is_like,
      dislike: _.isUndefined(userReaction?.is_like) ? false : !userReaction?.is_like, 
    });
  }, [])

  const likeButtonClickHandle = async () => {
    try {
      if (activeReactions.like) {
        await $api.delete(apiClientRoutes.deleteCommentReaction(commentId));
        setActiveReaction((prev) => ({ ...prev, like: false }));
        setReaction((prev) => ({...prev, like: reaction.like - 1}))
        return;
      }
      await $api.post(apiClientRoutes.createCommentReaction(commentId, 'like'));
      setActiveReaction({ dislike: false, like: true });
      if (activeReactions.dislike) {
        setReaction((prev) => ({...prev, dislike: reaction.dislike - 1}));
      }
      setReaction((prev) => ({...prev, like: reaction.like + 1}));
    } catch (err) {
      console.log(err);
    }
  };

  const dislikeButtonClickHandle = async () => {
    try {
      if (activeReactions.dislike) {
        await $api.delete(apiClientRoutes.deleteCommentReaction(commentId));
        setActiveReaction((prev) => ({ ...prev, dislike: false }));
        setReaction((prev) => ({...prev, dislike: reaction.dislike - 1}))
        return;
      }
      await $api.post(apiClientRoutes.createCommentReaction(commentId, 'dislike'));
      setActiveReaction({ like: false, dislike: true });
      if (activeReactions.like) {
        setReaction((prev) => ({...prev, like: reaction.like - 1}));
      }
      setReaction((prev) => ({...prev, dislike: reaction.dislike + 1}));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex">
      <ReactionElement reactionClickHandle={likeButtonClickHandle} isActive={activeReactions.like} reactionAmount={reaction.like}>
        <path d="M2 42h8V18H2v24zm44-22c0-2.21-1.79-4-4-4H29.37l1.91-9.14c.04-.2.07-.41.07-.63 0-.83-.34-1.58-.88-2.12L28.34 2 15.17 15.17C14.45 15.9 14 16.9 14 18v20c0 2.21 1.79 4 4 4h18c1.66 0 3.08-1.01 3.68-2.44l6.03-14.1A4 4 0 0 0 46 24v-3.83l-.02-.02L46 20z" />
      </ReactionElement>

      <ReactionElement reactionClickHandle={dislikeButtonClickHandle} isActive={activeReactions.dislike} reactionAmount={reaction.dislike}>
        <path d="M30 6H12c-1.66 0-3.08 1.01-3.68 2.44l-6.03 14.1A4 4 0 0 0 2 24v3.83l.02.02L2 28c0 2.21 1.79 4 4 4h12.63l-1.91 9.14c-.04.2-.07.41-.07.63 0 .83.34 1.58.88 2.12L19.66 46l13.17-13.17C33.55 32.1 34 31.1 34 30V10c0-2.21-1.79-4-4-4zm8 0v24h8V6h-8z" />
      </ReactionElement>
    </div>
  );
};

export default ReactionComment;
