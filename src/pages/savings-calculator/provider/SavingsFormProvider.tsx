import { useForm } from 'react-hook-form';

export default function SavingsFormProvider() {
  const methods = useForm();
  const onSubmit = (data: any) => console.log(data);

  return <div>적금 계산기 폼</div>;
}
