import { useQuery } from 'react-query';
import { EventService } from '../../services/events.service.js';

const useEvent = (id) => {
  const { isLoading, data: event } = useQuery(['event', id], () => EventService.getEventId(id || ''), {
    onError: (error) => {
      console.log(error);
    },
    select: ({ data }) => data.values,
    enabled: !!id,
  });
  return { isLoading, event };
};

export { useEvent };
