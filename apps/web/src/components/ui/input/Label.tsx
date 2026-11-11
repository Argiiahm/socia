const Label = ({ label }: { label: string }) => {
  return (
    <label className="mb-1 block text-sm font-medium text-zinc-300">
      {label}
    </label>
  );
};

export default Label;
