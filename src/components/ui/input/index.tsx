import { IconType } from "react-icons";
import Input from "./Input";
import Label from "./Label";

type InputFormProps = {
  icon?: IconType;
  label: string;
  name: string;
  type: string;
  placeholder: string;
};

const InputForm = ({
  icon,
  label,
  name,
  type,
  placeholder,
}: InputFormProps) => {
  const Icon = icon ?? (() => null);
  return (
    <div>
      <Label label={label} />
      <div className="relative">
        <Icon className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500" />
        <Input name={name} type={type} placeholder={placeholder} />
      </div>
    </div>
  );
};

export default InputForm;
