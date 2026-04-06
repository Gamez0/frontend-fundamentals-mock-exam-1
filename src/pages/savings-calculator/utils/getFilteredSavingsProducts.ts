import { isInRange } from '@/shared/utils/isInRange';
import type { SavingsProduct, SavingsProductFilterOption } from '../savings-calculator.types';

type ProductFilter = (product: SavingsProduct) => boolean;

interface GetFilteredSavingsProductsParams {
  savingsProducts: SavingsProduct[];
  filterOption: SavingsProductFilterOption;
}

export const getFilteredSavingsProducts = ({ savingsProducts, filterOption }: GetFilteredSavingsProductsParams) => {
  const filters = createFilters(filterOption);
  return savingsProducts.filter(product => filters.every(f => f(product)));
};

const createFilters = (filterOption: SavingsProductFilterOption): ProductFilter[] => {
  const { monthlyAmount, savingsPeriod } = filterOption;

  return [
    monthlyAmount === 0
      ? null
      : (p: SavingsProduct) => isInRange(monthlyAmount, p.minMonthlyAmount, p.maxMonthlyAmount),
    savingsPeriod === 0 ? null : (p: SavingsProduct) => p.availableTerms === savingsPeriod,
  ].filter(Boolean) as ProductFilter[];
};
