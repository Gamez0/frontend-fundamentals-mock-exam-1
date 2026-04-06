import type { SavingsProduct } from '../savings-calculator.types';

export const getTopAnnualRateSavingsProducts = (products: SavingsProduct[], count: number) => {
  const sortedProducts = [...products].sort((a, b) => b.annualRate - a.annualRate);
  return sortedProducts.slice(0, count);
};
