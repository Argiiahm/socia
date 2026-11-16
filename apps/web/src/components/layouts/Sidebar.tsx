import { getMenuItems } from "@/config/Menu";
import Image from "next/image";
import { FiPlus } from "react-icons/fi";
import Navlink from "../ui/Navlink";
import Link from "next/link";
import { useAuthStore } from "@/stores/auth.store";

const Sidebar = () => {
  const { isAuthenticated, user } = useAuthStore();
  const menuItems = getMenuItems(user?.username);

  return (
    <aside className="fixed left-0 top-0 z-50 hidden h-screen w-64 flex-col border-r border-zinc-200/50 px-4 py-5 lg:flex">
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

        {isAuthenticated ? (
          <button className="mt-4 flex w-full items-center justify-center gap-2 cursor-pointer rounded-full bg-zinc-900 py-3 text-sm font-medium text-white">
            <FiPlus size={18} />
            Post
          </button>
        ) : (
          <Link
            href="/login"
            className="mt-4 flex w-full items-center justify-center gap-2 cursor-pointer rounded-full border bg-zinc-900 py-3 text-sm font-medium text-white"
          >
            Join Socia
          </Link>
        )}
      </nav>
    </aside>
  );
};

export default Sidebar;
