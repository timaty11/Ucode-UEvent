import { useQuery } from 'react-query';
import { CommentsService } from '../services/comments.service.js';

const useCommentsReaction = (id) => {
  const { isLoading, data: reaction } = useQuery(['user', id], () => CommentsService.getReactionComment(id || ''), {
    onError: (error) => {
      console.log(error);
    },
    select: ({ data }) => data.values,
    enabled: !!id,
  });
  return { isLoading, reaction };
};

export { useCommentsReaction };
