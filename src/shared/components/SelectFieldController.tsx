import { ComponentProps } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { SelectBottomSheet } from 'tosslib';

type SelectBottomSheetProps = Omit<ComponentProps<typeof SelectBottomSheet>, 'value ' | 'onChange' | 'children'>;

interface SelectOption {
  label: string;
  value: number;
}

interface SelectFieldControllerProps extends SelectBottomSheetProps {
  name: string;
  options: SelectOption[];
}

export default function SelectFieldController({ name, options, ...props }: SelectFieldControllerProps) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <SelectBottomSheet {...props} value={field.value} onChange={value => field.onChange(value)}>
          {options.map(option => (
            <SelectBottomSheet.Option key={option.value} value={option.value}>
              {option.label}
            </SelectBottomSheet.Option>
          ))}
        </SelectBottomSheet>
      )}
    />
  );
}
