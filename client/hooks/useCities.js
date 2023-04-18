import { useQuery } from 'react-query';
import { CitiesService } from '../services/cities.service.js';

const useCities = () => {
  const { isLoading, data: cities } = useQuery('cities', () => CitiesService.getCities(), {
    onError: (error) => {
      console.log(error);
    },
  });
  return { isLoading, cities };
};

export { useCities };
