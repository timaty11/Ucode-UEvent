import { useQuery } from 'react-query';
import { EventService } from '../../services/events.service.js';

const useEventRecommend = (id) => {
  const { isLoading, data: recommend } = useQuery(
    ['event recomend', id],
    () => EventService.getEventRecommend(id || ''),
    {
      onError: (error) => {
        console.log(error);
      },
      select: ({ data }) => data.values,
      enabled: !!id,
    }
  );
  return { isLoading, recommend };
};

export { useEventRecommend };
