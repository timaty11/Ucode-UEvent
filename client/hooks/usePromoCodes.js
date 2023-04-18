import { useQuery } from 'react-query';
import { PayService } from '../services/pay.service';

const usePromoCodes = () => {
  const { isLoading, data: promoCodes } = useQuery(['get promo codes', id], () => PayService.getPromoCodes(id), {
    onError: (error) => {
      console.log(error);
    },
  });
  return { isLoading, promoCodes };
};

export { usePromoCodes };
