import { Border, NavigationBar, Spacing } from 'tosslib';
import SavingsForm from './containers/SavingsForm/SavingsForm';
import SavingsFormProvider from './provider/SavingsFormProvider';
import SavingsTabSection from './containers/SavingsTabSection/SavingsTabSection';

export function SavingsCalculatorPage() {
  return (
    <>
      <NavigationBar title="적금 계산기" />

      <Spacing size={16} />
      <SavingsFormProvider>
        <SavingsForm />

        <Spacing size={24} />
        <Border height={16} />
        <Spacing size={8} />
        <SavingsTabSection />
      </SavingsFormProvider>
    </>
  );
}
