import { useQuery } from 'react-query';
import { EventService } from '../../services/events.service.js';

const useSearch = (searchElement) => {
  const { isLoading, data: searchEvent } = useQuery(
    ['search event', searchElement],
    () => EventService.getSearchEvent(searchElement),
    {
      onError: (error) => {
        console.log(error);
      },
      select: ({ data }) => data.values,
      enabled: !!searchElement,
    }
  );
  return { isLoading, searchEvent };
};

export { useSearch };
