import { useSuspenseQuery } from '@tanstack/react-query';
import { getSavingsProducts } from '../apis/getSavingsProducts';
import { SavingsProduct } from '../types';

export default function useSavingsProductsQuery<T = SavingsProduct[]>(select?: (data: SavingsProduct[]) => T) {
  return useSuspenseQuery({
    queryKey: ['savingsProducts'],
    queryFn: getSavingsProducts,
    select,
  });
}
