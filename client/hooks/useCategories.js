import { useQuery } from 'react-query';
import { CategoriesService } from '../services/categories.service';

const useCategories = () => {
  const { isLoading, data: categories } = useQuery('categories', () => CategoriesService.getAll(), {
    onError: (error) => {
      console.log(error);
    },
  });
  return { isLoading, categories };
};

export { useCategories };
