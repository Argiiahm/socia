"use client";

import { menuItems } from "@/config/Menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiPlus } from "react-icons/fi";

const BottomNav = () => {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 z-40 w-full border-t border-zinc-200 bg-white/95 px-2 pb-safe backdrop-blur-md dark:border-zinc-900 dark:bg-zinc-950/95 lg:hidden">
      <div className="mx-auto flex max-w-lg items-center justify-around py-2">
        {menuItems.map((item, index) => {
          const Icon = item.icon;
          const isActive =
            pathname === item.href ||
            (item.href !== "/" && pathname.startsWith(item.href));

          return (
            <div key={item.label} className="contents">
              <Link
                href={item.href}
                className={`relative flex flex-col items-center justify-center gap-2 px-2 py-1 transition ${
                  isActive
                    ? "text-zinc-950 dark:text-white"
                    : "text-zinc-700 hover:text-zinc-700 dark:hover:text-zinc-200"
                }`}
              >
                <div className="relative">
                  <Icon size={21} />

                  {item.badge && (
                    <span className="absolute -right-2 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-red-500 px-1 text-[9px] font-semibold text-white">
                      {item.badge}
                    </span>
                  )}
                </div>
              </Link>

              {index === 2 && (
                <button
                  type="button"
                  className="flex h-10 w-18 items-center justify-center rounded-lg bg-zinc-900 text-zinc-600 mx-1"
                >
                  <FiPlus size={24} />
                </button>
              )}
            </div>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
