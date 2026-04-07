import { FormProvider, useForm, useFormContext } from 'react-hook-form';

interface SavingsFormValues {
  goalAmount?: number;
  monthlyAmount?: number;
  savingsPeriod?: number;
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
  const goalAmount = watch('goalAmount') ?? 0;
  const monthlyAmount = watch('monthlyAmount') ?? 0;
  const savingsPeriod = watch('savingsPeriod') ?? 0;

  return { goalAmount, monthlyAmount, savingsPeriod };
};
