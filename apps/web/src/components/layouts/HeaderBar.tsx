import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";

const HeaderBar = ({
  title,
  backHref,
  description,
}: {
  title: string;
  backHref?: string;
  description?: string;
}) => {
  return (
    <header className="sticky top-0 z-20 border-b border-zinc-200/50 bg-white/95 backdrop-blur">
      <div className="flex items-center gap-5 px-4 py-3">
        {backHref && (
          <Link
            href={backHref}
            aria-label="Back"
            className="rounded-full p-2 transition hover:bg-zinc-100"
          >
            <FiArrowLeft size={19} />
          </Link>
        )}
        <div>
          <h1 className="text-lg font-semibold">{title}</h1>
          {description && (
            <p className="text-xs text-zinc-400">{description}</p>
          )}
        </div>
      </div>
    </header>
  );
};

export default HeaderBar;
