import { isInRange } from '@/shared/utils/isInRange';
import type { SavingsProduct, SavingsProductFilterOption } from '../savings-calculator.types';

interface GetFilteredSavingsProductsParams {
  savingsProducts: SavingsProduct[];
  filterOption: SavingsProductFilterOption;
}

export const getFilteredSavingsProducts = ({ savingsProducts, filterOption }: GetFilteredSavingsProductsParams) => {
  const { monthlyAmount, savingsPeriod } = filterOption;

  const monthlyFilteredSavings = filterProductsByMonthlyAmount({
    savingsProducts,
    monthlyAmount,
  });

  const periodFilteredSavings = filterProductsBySavingsPeriod({
    savingsProducts: monthlyFilteredSavings,
    savingsPeriod,
  });

  return periodFilteredSavings;
};

interface FilterProductsByMonthlyAmountParams {
  savingsProducts: SavingsProduct[];
  monthlyAmount: number;
}

function filterProductsByMonthlyAmount({ savingsProducts, monthlyAmount }: FilterProductsByMonthlyAmountParams) {
  if (monthlyAmount === 0) {
    return savingsProducts;
  }

  return savingsProducts.filter(product =>
    isInRange(monthlyAmount, product.minMonthlyAmount, product.maxMonthlyAmount)
  );
}

interface FilterProductsBySavingsPeriodParams {
  savingsProducts: SavingsProduct[];
  savingsPeriod: number;
}

function filterProductsBySavingsPeriod({ savingsProducts, savingsPeriod }: FilterProductsBySavingsPeriodParams) {
  if (savingsPeriod === 0) {
    return savingsProducts;
  }

  return savingsProducts.filter(product => product.availableTerms === savingsPeriod);
}
