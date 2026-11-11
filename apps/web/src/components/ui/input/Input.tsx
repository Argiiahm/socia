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
      className="w-full rounded-lg border border-zinc-800 bg-zinc-900/60 py-3 pl-10 pr-4 text-sm outline-none transition placeholder:text-zinc-600 focus:border-zinc-600"
    />
  );
};

export default Input;
