// 적금 예상 수익 금액
type InterestType = 'Simple' | 'Compound';

export const getExpectedSavingsEarnings = (
  monthlyAmount: number,
  savingsPeriod: number,
  annualRate: number,
  interestType: InterestType
) => {
  // 단리 이자 계산 공식: 원금 * (1 + (연이율 * 기간(년)))
  const principal = monthlyAmount * savingsPeriod; // 총 납입 금액
  let interest;
  if (interestType === 'Simple') {
    interest = principal * (annualRate / 100) * (savingsPeriod / 12);
  } else {
    interest = principal * Math.pow(1 + annualRate / 100, savingsPeriod / 12) - principal;
  }
  return Math.round(principal + interest); // 원금 + 이자
};
