import { IconType } from "react-icons";

type StudioEmptyStateProps = {
  icon: IconType;
  title: string;
  description: string;
  action?: React.ReactNode;
};

const StudioEmptyState = ({ icon: Icon, title, description, action }: StudioEmptyStateProps) => {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-6 text-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-zinc-100 text-zinc-400">
        <Icon size={26} />
      </div>
      <h3 className="mt-4 text-sm font-semibold text-zinc-700">{title}</h3>
      <p className="mt-1 text-xs text-zinc-400 max-w-xs">{description}</p>
      {action && <div className="mt-5">{action}</div>}
    </div>
  );
};

export default StudioEmptyState;
