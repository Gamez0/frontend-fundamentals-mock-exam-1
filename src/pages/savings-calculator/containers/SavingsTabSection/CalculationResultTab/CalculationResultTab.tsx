import { Border, Spacing } from 'tosslib';
import RecommendationProducts from './RecommendationProducts/RecommendationProducts';
import CalculationResults from './CalculationResults/CalculationResults';

export default function CalculationResultTab() {
  return (
    <>
      <Spacing size={8} />
      <CalculationResults />
      <Spacing size={8} />
      <Border height={16} />
      <Spacing size={8} />
      <RecommendationProducts />
      <Spacing size={40} />
    </>
  );
}
