import { Spacing } from 'tosslib';
import GoalAmountField from './GoalAmountField/GoalAmountField';
import SavingsPeriodField from './SavingsPeriodField/SavingsPeriodField';
import MonthlyDepositAmountField from './MonthlyDepositAmountField/MonthlyDepositAmountField';

export default function SavingsForm() {
  return (
    <form onSubmit={e => e.preventDefault()}>
      <GoalAmountField />
      <Spacing size={16} />
      <MonthlyDepositAmountField />
      <Spacing size={16} />
      <SavingsPeriodField />
    </form>
  );
}
