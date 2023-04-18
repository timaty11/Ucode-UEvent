import { useQuery } from 'react-query';
import { EventService } from '../../services/events.service.js';

const useEvents = () => {
  const { isLoading, data: events } = useQuery('events', () => EventService.getAll(), {
    onError: (error) => {
      console.log(error);
    },
  });
  return { isLoading, events };
};

export { useEvents };
