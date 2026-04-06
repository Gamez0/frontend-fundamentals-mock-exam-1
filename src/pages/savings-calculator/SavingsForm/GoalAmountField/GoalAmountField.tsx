import TextFieldController from '@/shared/components/TextFieldController';

export default function GoalAmountField() {
  return <TextFieldController name="goalAmount" label="목표 금액" placeholder="적금 종류를 입력하세요" suffix="원" />;
}
