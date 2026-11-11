import { menuItems } from "@/config/Menu";
import Image from "next/image";
import { FiPlus, FiMoreHorizontal } from "react-icons/fi";
import Navlink from "../ui/Navlink";

const Sidebar = () => {
  return (
    <aside className="fixed left-0 top-0 z-50 hidden h-screen w-64 flex-col border-r border-zinc-900/50 px-4 py-5 lg:flex">
      <div className="mb-8 flex items-center gap-2 px-3">
        <div className="w-6 h-6">
          <Image
            src="/icons/logo-socia.png"
            width={500}
            height={500}
            alt="socia-logo"
          />
        </div>
        <h1 className="text-xl font-bold tracking-tight">Socia</h1>
      </div>

      <nav className="flex-1">
        {menuItems.map((item) => (
          <Navlink key={item.label} item={item} />
        ))}

        <button className="mt-4 flex w-full items-center justify-center gap-2 cursor-pointer rounded-full bg-white py-3 text-sm font-semibold text-zinc-950 transition hover:bg-zinc-200">
          <FiPlus size={18} />
          Post
        </button>
      </nav>

      <div className="mt-auto border-t border-zinc-800 pt-4">
        <div className="flex items-center justify-between rounded-xl p-2 transition hover:bg-zinc-900">
          <a href="/profile" className="flex min-w-0 items-center gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-zinc-800 text-sm font-semibold">
              U
            </div>
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-white">
                Your Name
              </p>
              <p className="truncate text-xs text-zinc-500">@username</p>
            </div>
          </a>
          <button
            aria-label="More options"
            className="rounded-lg p-2 text-zinc-400 transition hover:bg-zinc-800 hover:text-white"
          >
            <FiMoreHorizontal size={19} />
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
