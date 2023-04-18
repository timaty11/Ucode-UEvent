import { useQuery } from 'react-query';
import { PayService } from '../services/pay.service';

const useCoupons = () => {
  const { isLoading, data: coupons } = useQuery('get coupons', () => PayService.getCoupons(), {
    onError: (error) => {
      console.log(error);
    },
  });
  return { isLoading, coupons };
};

export { useCoupons };
