import { useQuery } from 'react-query';
import { EventService } from '../../services/events.service.js';

const useEventTickets = (id) => {
  const { isLoading, data: tickets } = useQuery(
    ['event tickets', id],
    () => EventService.getTicketsByEventId(id || ''),
    {
      onError: (error) => {
        console.log(error);
      },
      select: ({ data }) => data.values,
      enabled: !!id,
    }
  );
  return { isLoading, tickets };
};

export { useEventTickets };
