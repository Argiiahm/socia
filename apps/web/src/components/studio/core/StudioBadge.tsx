type BadgeVariant = "default" | "success" | "warning" | "danger" | "info";

type StudioBadgeProps = {
  children: React.ReactNode;
  variant?: BadgeVariant;
};

const variantClass: Record<BadgeVariant, string> = {
  default: "bg-zinc-100 text-zinc-600",
  success: "bg-emerald-50 text-emerald-600",
  warning: "bg-amber-50 text-amber-600",
  danger: "bg-red-50 text-red-500",
  info: "bg-blue-50 text-blue-600",
};

const StudioBadge = ({ children, variant = "default" }: StudioBadgeProps) => {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-semibold ${variantClass[variant]}`}
    >
      {children}
    </span>
  );
};

export default StudioBadge;
