type InputProps = {
  name: string;
  type: string;
  placeholder: string;
};

const Input = ({ name, type, placeholder, ...props }: InputProps) => {
  return (
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      {...props}
      className="w-full rounded-lg border border-zinc-200 py-3 pl-10 pr-4 text-sm outline-none transition placeholder:text-zinc-400"
    />
  );
};

export default Input;
