import { FormProvider, useForm, useFormContext } from 'react-hook-form';

interface SavingsFormValues {
  targetAmount?: number;
  monthlyDeposit?: number;
  savingPeriod?: number;
}

interface SavingsFormProviderProps {
  children: React.ReactNode;
}

export default function SavingsFormProvider({ children }: SavingsFormProviderProps) {
  const methods = useForm<SavingsFormValues>();

  return <FormProvider {...methods}>{children}</FormProvider>;
}

export const useSavingsFormValuesContext = (): Required<SavingsFormValues> => {
  const { watch } = useFormContext<SavingsFormValues>();
  const targetAmount = watch('targetAmount') ?? 0;
  const monthlyDeposit = watch('monthlyDeposit') ?? 0;
  const savingPeriod = watch('savingPeriod') ?? 0;

  return { targetAmount, monthlyDeposit, savingPeriod };
};
