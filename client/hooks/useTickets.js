import { useQuery } from 'react-query';
import { TicketsService } from '../services/tickets.service';

const useTickets = () => {
  const { isLoading, data: tickets } = useQuery('tickets', () => TicketsService.getAll(), {
    onError: (error) => {
      console.log(error);
    },
  });
  return { isLoading, tickets };
};

export { useTickets };
