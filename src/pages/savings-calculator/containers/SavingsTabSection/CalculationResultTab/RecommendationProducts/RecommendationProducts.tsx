import { useTopAnnualRateProducts } from '@/pages/savings-calculator/quries/savings-products-queries';
import { Suspense } from 'react';
import { ListHeader, Spacing } from 'tosslib';
import RecommendationProductItem from './RecommendationProductItem/RecommendationProductItem';

export default function RecommendationProducts() {
  return (
    <Suspense fallback={<div>추천 상품을 불러오는 중이에요.</div>}>
      <RecommendationProductsList />
    </Suspense>
  );
}

function RecommendationProductsList() {
  const { data: recommendationProducts } = useTopAnnualRateProducts();
  return (
    <>
      <ListHeader title={<ListHeader.TitleParagraph fontWeight="bold">추천 상품 목록</ListHeader.TitleParagraph>} />
      <Spacing size={12} />
      {recommendationProducts.map(product => (
        <RecommendationProductItem key={product.id} product={product} />
      ))}
    </>
  );
}
