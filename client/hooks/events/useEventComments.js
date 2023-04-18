import { useQuery } from 'react-query';
import { EventService } from '../../services/events.service.js';

const useEventComments = (id) => {
  const { isLoading, data: comments } = useQuery(
    ['events', id],
    () => EventService.getAllCommentsByEventId(id || ''),
    {
      onError: (error) => {
        console.log(error);
      },
      select: ({ data }) => data.values.reverse(),
      enabled: !!id,
    }
  );
  return { isLoading, comments };
};

export { useEventComments };
