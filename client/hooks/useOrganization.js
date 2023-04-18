import { useQuery } from 'react-query';
import { OrganizationService } from '../services/organization.service';

const useOrganization = () => {
  const { isLoading, data: organizations } = useQuery('organizations', () => OrganizationService.getAll(), {
    onError: (error) => {
      console.log(error);
    },
  });
  return { isLoading, organizations };
};

export { useOrganization };
