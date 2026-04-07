import { Spacing } from 'tosslib';
import GoalAmountField from './GoalAmountField/GoalAmountField';
import SavingsPeriodField from './SavingsPeriodField/SavingsPeriodField';
import MonthlyAmountField from './MonthlyAmountField/MonthlyAmountField';

export default function SavingsForm() {
  return (
    <form onSubmit={e => e.preventDefault()}>
      <GoalAmountField />
      <Spacing size={16} />
      <MonthlyAmountField />
      <Spacing size={16} />
      <SavingsPeriodField />
    </form>
  );
}
