import { Spacing } from 'tosslib';
import GoalAmountField from './GoalAmountField/GoalAmountField';
import SavingsPeriodField from './SavingsPeriodField/SavingsPeriodField';
import monthlyAmountField from './monthlyAmountField/monthlyAmountField';

export default function SavingsForm() {
  return (
    <form onSubmit={e => e.preventDefault()}>
      <GoalAmountField />
      <Spacing size={16} />
      <monthlyAmountField />
      <Spacing size={16} />
      <SavingsPeriodField />
    </form>
  );
}
