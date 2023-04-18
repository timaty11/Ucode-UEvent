import { useQuery } from 'react-query';
import { UsersService } from '../../services/users.service.js';

const useUserFavoriteEvent = () => {
  const { isLoading, data: favorite } = useQuery(
    'user favorite',
    () => UsersService.getFavoriteEvent(),
    {
      onError: (error) => {
        console.log(error);
      },
      select: ({ data }) => data.values,
    }
  );
  return { isLoading, favorite };
};

export { useUserFavoriteEvent };
