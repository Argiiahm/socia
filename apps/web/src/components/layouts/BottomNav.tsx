"use client";

import { menuItems } from "@/config/Menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiPlus } from "react-icons/fi";

const BottomNav = () => {
  const pathname = usePathname();

  const renderMenu = (item: (typeof menuItems)[number]) => {
    const Icon = item.icon;

    const isActive =
      pathname === item.href ||
      (item.href !== "/" && pathname.startsWith(item.href));

    return (
      <Link
        key={item.label}
        href={item.href}
        aria-label={item.label}
        aria-current={isActive ? "page" : undefined}
        className={`relative flex h-12 w-full items-center justify-center transition-colors ${
          isActive ? "text-zinc-950" : "text-zinc-400 hover:text-zinc-700"
        }`}
      >
        <div className="relative">
          <Icon size={21} strokeWidth={1.8} />

          {item.badge && (
            <span className="absolute -right-2 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-red-500 px-1 text-[9px] font-semibold text-white">
              {item.badge}
            </span>
          )}
        </div>
      </Link>
    );
  };

  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-zinc-200 bg-white/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-md lg:hidden">
      <div className="mx-auto grid w-full max-w-lg grid-cols-7 items-center px-2">
        {/* Left Menu */}
        {menuItems.slice(0, 3).map(renderMenu)}

        <button
          type="button"
          className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-zinc-900 text-white shadow-sm transition-all hover:bg-zinc-800 active:scale-95"
        >
          <FiPlus size={24} strokeWidth={2} />
        </button>

        {/* Right Menu */}
        {menuItems.slice(3, 6).map(renderMenu)}
      </div>
    </nav>
  );
};

export default BottomNav;
