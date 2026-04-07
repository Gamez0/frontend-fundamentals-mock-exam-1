import { useFilteredSavingsProducts } from '@/pages/savings-calculator/quries/savings-products-queries';
import { Suspense } from 'react';
import { ListRow } from 'tosslib';
import SavingsProductItem from '@/pages/savings-calculator/components/SavingsProductItem/SavingsProductItem';
import { useSavingsFormValuesContext } from '@/pages/savings-calculator/provider/SavingsFormProvider';

export default function SavingsProductsTab() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SavingsProductsList />
    </Suspense>
  );
}

function SavingsProductsList() {
  const { monthlyAmount, savingsPeriod } = useSavingsFormValuesContext();

  const filterOption = {
    monthlyAmount,
    savingsPeriod,
  };

  const { data: products } = useFilteredSavingsProducts(filterOption);

  if (products.length === 0) {
    // 입력도 하기 전에 이렇게 보여주는건 좀 아님
    return <ListRow contents={<ListRow.Texts type="1RowTypeA" top="조건에 맞는 추천 상품이 없어요." />} />;
  }

  return (
    <>
      {products.map(product => (
        <SavingsProductItem key={product.id} product={product} />
      ))}
    </>
  );
}
