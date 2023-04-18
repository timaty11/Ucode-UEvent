import { useQuery } from 'react-query';
import { UsersService } from '../../services/users.service.js';

const useUserTickets = (id) => {
    const { isLoading, data: user_tickets } = useQuery(['user', id], () => UsersService.getUserTickets(id || ''), {
    onError: (error) => {
      console.log(error);
    },
    select: ({ data }) => data.values,
    enabled: !!id
  });
  return { isLoading, user_tickets };
};

export { useUserTickets };
