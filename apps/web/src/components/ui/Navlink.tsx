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
      className={`group ${item.className} flex items-center justify-between text-lg rounded-xl px-3 py-2 ${
        isActive
          ? "bg-zinc-100/50 font-medium text-zinc-900"
          : "text-zinc-400 hover:bg-zinc-100/50"
      }`}
    >
      <div className="flex items-center gap-3">
        <Icon size={17} strokeWidth={1.7} />
        <span>{item.label}</span>
      </div>

      {item.badge && (
        <span className="flex h-4 min-w-4 items-center justify-center rounded-full bg-orange-500 p-1 text-[10px] font-bold text-white">
          {item.badge}
        </span>
      )}
    </Link>
  );
};

export default Navlink;
