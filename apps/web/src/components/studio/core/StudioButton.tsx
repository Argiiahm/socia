import { IconType } from "react-icons";

type Variant = "primary" | "secondary" | "ghost" | "danger";

type StudioButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: Variant;
  size?: "sm" | "md";
  icon?: IconType;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  className?: string;
};

const variantClass: Record<Variant, string> = {
  primary: "bg-zinc-900 text-white hover:bg-zinc-700",
  secondary: "border border-zinc-200 bg-white text-zinc-700 hover:bg-zinc-50",
  ghost: "text-zinc-500 hover:bg-zinc-100 hover:text-zinc-800",
  danger: "bg-red-50 text-red-600 hover:bg-red-100 border border-red-200",
};

const sizeClass = {
  sm: "px-3 py-1.5 text-[11px]",
  md: "px-4 py-2 text-xs",
};

const StudioButton = ({
  children,
  onClick,
  variant = "primary",
  size = "md",
  icon: Icon,
  disabled,
  type = "button",
  className = "",
}: StudioButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`inline-flex cursor-pointer items-center gap-1.5 rounded-lg font-semibold transition disabled:opacity-50 disabled:cursor-not-allowed ${variantClass[variant]} ${sizeClass[size]} ${className}`}
    >
      {Icon && <Icon size={13} />}
      {children}
    </button>
  );
};

export default StudioButton;
