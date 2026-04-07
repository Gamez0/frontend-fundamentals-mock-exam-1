import { useTopAnnualRateProducts } from '@/pages/savings-calculator/quries/savings-products-queries';
import { ListHeader, Spacing } from 'tosslib';
import RecommendationProductItem from './RecommendationProductItem/RecommendationProductItem';
import AsyncBoundary from '@/shared/components/AsyncBoundary';

export default function RecommendationProducts() {
  return (
    <AsyncBoundary
      loadingFallback={<div>추천 상품을 불러오는 중이에요.</div>}
      errorFallback={<div>추천 상품을 불러오는 중 오류가 발생했어요.</div>}
    >
      <RecommendationProductsList />
    </AsyncBoundary>
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
