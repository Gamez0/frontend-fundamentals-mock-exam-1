import TextFieldController from '@/shared/components/TextFieldController';
import { formatLocalePrice } from '@/shared/utils/formatLocalePrice';
import { parseNumberFromString } from '@/shared/utils/parseNumberFromString';

export default function TargetAmountField() {
  return (
    <TextFieldController
      name="targetAmount"
      label="목표 금액"
      placeholder="적금 종류를 입력하세요"
      suffix="원"
      transform={parseNumberFromString}
      formatDisplayValue={value => formatLocalePrice(value, 'ko-KR')}
    />
  );
}
