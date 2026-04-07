import { Spacing } from 'tosslib';
import TotalAmountField from './TotalAmountField/TotalAmountField';
import SavingsPeriodField from './SavingsPeriodField/SavingsPeriodField';
import MonthlyAmountField from './MonthlyAmountField/MonthlyAmountField';

export default function SavingsForm() {
  return (
    <form onSubmit={e => e.preventDefault()}>
      <TotalAmountField />
      <Spacing size={16} />
      <MonthlyAmountField />
      <Spacing size={16} />
      <SavingsPeriodField />
    </form>
  );
}
