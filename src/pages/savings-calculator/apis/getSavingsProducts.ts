import { http, isHttpError } from 'tosslib';
import { SavingsProduct } from '../savings-calculator.types';

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
