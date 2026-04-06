import { useSuspenseQuery } from '@tanstack/react-query';
import { getSavingsProducts } from '../apis/getSavingsProducts';
import type { SavingsProduct, SavingsProductFilterOption } from '../savings-calculator.types';
import { getTopAnnualRateSavingsProducts } from '../utils/getTopAnnualRateSavingsProducts';
import { savingsProductsQueryKey } from './queries-key';
import { getFilteredSavingsProducts } from '../utils/getFilteredSavingsProducts';

function useSavingsProductsQuery<T = SavingsProduct[]>(select?: (data: SavingsProduct[]) => T) {
  return useSuspenseQuery({
    queryKey: savingsProductsQueryKey,
    queryFn: getSavingsProducts,
    select,
  });
}

export function useDetailSavingsProduct(id: string) {
  return useSavingsProductsQuery(products => {
    const product = products.find(p => p.id === id);

    if (!product) {
      throw new Error('상품을 찾을 수 없습니다.');
    }

    return product;
  });
}

export function useTopAnnualRateProducts() {
  return useSavingsProductsQuery(products => getTopAnnualRateSavingsProducts(products, 2));
}

export function useFilteredSavingsProducts(filterOption: SavingsProductFilterOption) {
  return useSavingsProductsQuery(products => getFilteredSavingsProducts({ savingsProducts: products, filterOption }));
}
