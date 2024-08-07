import Input from '../atoms/Input';
import Label from '../atoms/Label';

function FormInput(props) {
  const { name = 'username', label, type } = props;
  return (
    <div className="flex flex-col w-full h-fit">
      <Label htmlFor={name} label={label} />
      <Input name={name} id={name} type={type} />
    </div>
  );
}

export default FormInput;
