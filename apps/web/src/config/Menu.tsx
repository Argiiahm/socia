import { FiHome, FiBell, FiUser } from "react-icons/fi";
import type { IconType } from "react-icons";
import { TbMessages } from "react-icons/tb";
import { PiBookmarksLight } from "react-icons/pi";
import { HiOutlineShoppingBag } from "react-icons/hi2";

export type MenuItemType = {
  label: string;
  href: string;
  icon: IconType;
  badge?: number;
  className?: string;
};

export const menuItems: MenuItemType[] = [
  {
    label: "Home",
    icon: FiHome,
    href: "/",
  },
  {
    label: "Products",
    icon: HiOutlineShoppingBag,
    href: "/products",
  },
  {
    label: "Publications",
    icon: PiBookmarksLight,
    href: "/publications",
  },
  {
    label: "Messages",
    icon: TbMessages,
    href: "/messages",
  },
  {
    label: "Notifications",
    icon: FiBell,
    href: "/notifications",
    badge: 3,
    className: "mt-4",
  },
  {
    label: "Profile",
    icon: FiUser,
    href: "/@argiiahm",
  },
];
