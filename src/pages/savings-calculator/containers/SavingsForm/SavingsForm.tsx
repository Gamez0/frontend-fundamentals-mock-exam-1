import { Spacing } from 'tosslib';
import TargetAmountField from './TargetAmountField/TargetAmountField';
import SavingsPeriodField from './SavingsPeriodField/SavingsPeriodField';
import MonthlyAmountField from './MonthlyAmountField/MonthlyAmountField';

export default function SavingsForm() {
  return (
    <form onSubmit={e => e.preventDefault()}>
      <TargetAmountField />
      <Spacing size={16} />
      <MonthlyAmountField />
      <Spacing size={16} />
      <SavingsPeriodField />
    </form>
  );
}
