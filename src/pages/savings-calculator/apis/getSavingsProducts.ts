import { http, isHttpError } from 'tosslib';

interface SavingsProduct {
  id: string;
  name: string;
  annualRate: number;
  minMonthlyAmount: number;
  maxMonthlyAmount: number;
  availableTerms: number;
}

export const getSavingsProducts = async (): Promise<SavingsProduct[]> => {
  try {
    const response = await http.get<SavingsProduct[]>('/api/savings-products');
    return response;
  } catch (error) {
    if (isHttpError(error)) {
      throw new Error('적금 상품을 불러오는 데 실패했어요.');
    }
    throw error;
  }
};
