import TextFieldController from '@/shared/components/TextFieldController';

export default function MonthlyDepositAmountField() {
  return (
    <TextFieldController
      name="monthlyDepositAmount"
      label="월 납입액"
      placeholder="희망 월 납입액을 입력하세요"
      suffix="원"
    />
  );
}
