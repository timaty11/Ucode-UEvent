import { useQuery } from 'react-query';
import { RolesService } from '../services/roles.service';

const useRoles = () => {
  const { isLoading, data: roles } = useQuery('roles', () => RolesService.getAll(), {
    onError: (error) => {
      console.log(error);
    },
  });
  return { isLoading, roles };
};

export { useRoles };
