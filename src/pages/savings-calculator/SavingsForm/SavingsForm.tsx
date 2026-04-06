import SelectFieldController from '@/shared/components/SelectFieldController';
import TextFieldController from '@/shared/components/TextFieldController';
import { Spacing } from 'tosslib';

export default function SavingsForm() {
  return (
    <form onSubmit={e => e.preventDefault()}>
      <TextFieldController name="savingsType" label="목표 금액" placeholder="적금 종류를 입력하세요" suffix="원" />
      <Spacing size={16} />
      <TextFieldController
        name="interestRate"
        label="월 납입액"
        placeholder="희망 월 납입액을 입력하세요"
        suffix="원"
      />
      <Spacing size={16} />
      <SelectFieldController
        name="savingsPeriod"
        label="저축 기간"
        title="저축 기간을 선택하세요"
        options={[
          { label: '6개월', value: 6 },
          { label: '12개월', value: 12 },
          { label: '24개월', value: 24 },
        ]}
      />
    </form>
  );
}
