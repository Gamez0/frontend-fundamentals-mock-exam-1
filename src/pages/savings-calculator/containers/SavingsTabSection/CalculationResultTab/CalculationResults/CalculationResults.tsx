import { useSavingsFormValuesContext } from '@/pages/savings-calculator/provider/SavingsFormProvider';
import { useDetailSavingsProduct } from '@/pages/savings-calculator/quries/savings-products-queries';
import { useSelectedProductId } from '@/pages/savings-calculator/stores/useSelectedProduct';
import { getExpectedSavingsEarnings } from '@/shared/utils/getExpectedSavingsEarnings';
import { parseNumberFromString } from '@/shared/utils/parseNumberFromString';
import { Suspense } from 'react';
import { colors, ListRow } from 'tosslib';

export default function CalculationResults() {
  const selectedProductId = useSelectedProductId();
  if (!selectedProductId) {
    return <ListRow contents={<ListRow.Texts type="1RowTypeA" top="상품을 선택해주세요." />} />;
  }
  return (
    <Suspense fallback={<div>계산 결과를 불러오는 중이에요.</div>}>
      <CalculationResultsContent selectedProductId={selectedProductId} />
    </Suspense>
  );
}

interface CalculationResultsContentProps {
  selectedProductId: string;
}

function CalculationResultsContent({ selectedProductId }: CalculationResultsContentProps) {
  const { monthlyAmount, savingsPeriod, targetAmount } = useSavingsFormValuesContext();
  const { data: productData } = useDetailSavingsProduct(selectedProductId);

  const expectedEarnings = getExpectedSavingsEarnings(monthlyAmount, savingsPeriod, productData.annualRate, 'Simple');

  // 목표 금액과의 차이
  const differenceFromTarget = expectedEarnings - targetAmount;

  // 추천 월 납입 금액 (소수점 올림)
  const recommendedMonthlyAmount = Math.ceil(parseNumberFromString((targetAmount / savingsPeriod).toString()));
  return (
    <>
      <ListRow
        contents={
          <ListRow.Texts
            type="2RowTypeA"
            top="예상 수익 금액"
            topProps={{ color: colors.grey600 }}
            bottom={`${expectedEarnings.toLocaleString()}원`}
            bottomProps={{ fontWeight: 'bold', color: colors.blue600 }}
          />
        }
      />
      <ListRow
        contents={
          <ListRow.Texts
            type="2RowTypeA"
            top="목표 금액과의 차이"
            topProps={{ color: colors.grey600 }}
            bottom={`${differenceFromTarget.toLocaleString()}원`}
            bottomProps={{ fontWeight: 'bold', color: colors.blue600 }}
          />
        }
      />
      <ListRow
        contents={
          <ListRow.Texts
            type="2RowTypeA"
            top="추천 월 납입 금액"
            topProps={{ color: colors.grey600 }}
            bottom={`${recommendedMonthlyAmount.toLocaleString()}원`}
            bottomProps={{ fontWeight: 'bold', color: colors.blue600 }}
          />
        }
      />
    </>
  );
}
