"use client";

import { MenuItemType } from "@/config/Menu";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navlink = ({ item }: { item: MenuItemType }) => {
  const pathname = usePathname();
  const isActive =
    item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
  const Icon = item.icon;

  return (
    <Link
      key={item.label}
      href={item.href}
      className={`group ${item.className} flex items-center justify-between text-lg rounded-xl px-3 py-2 transition-colors ${
        isActive
          ? "bg-zinc-900/80 font-semibold text-white"
          : "text-zinc-400 hover:bg-zinc-950 hover:text-white"
      }`}
    >
      <div className="flex items-center gap-3">
        <Icon size={17} strokeWidth={1.7} />
        <span>{item.label}</span>
      </div>

      {item.badge && (
        <span className="flex h-4 min-w-4 items-center justify-center rounded-full bg-white px-1 text-[10px] font-bold text-zinc-950">
          {item.badge}
        </span>
      )}
    </Link>
  );
};

export default Navlink;
