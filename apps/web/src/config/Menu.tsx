import type { IconType } from "react-icons";
import {
  AiOutlineHome,
  AiOutlineMessage,
  AiOutlineShopping,
  AiOutlineSwitcher,
} from "react-icons/ai";
import { FaRegBell, FaRegUser } from "react-icons/fa6";

export type MenuItemType = {
  label: string;
  href: string;
  icon: IconType;
  badge?: number;
  className?: string;
};

export const getMenuItems = (username?: string): MenuItemType[] => [
  {
    label: "Home",
    icon: AiOutlineHome,
    href: "/",
  },
  {
    label: "Products",
    icon: AiOutlineShopping,
    href: "/products",
  },
  {
    label: "Publications",
    icon: AiOutlineSwitcher,
    href: "/publications",
  },
  {
    label: "Messages",
    icon: AiOutlineMessage,
    href: "/messages",
  },
  {
    label: "Notifications",
    icon: FaRegBell,
    href: "/notifications",
    badge: 3,
    className: "mt-4",
  },
  {
    label: "Profile",
    icon: FaRegUser,
    href: username ? `/@${username}` : "/login",
  },
];

export const studioMenus: MenuItemType[] = [
  {
    label: "Dashboard",
    icon: AiOutlineHome,
    href: "/studio/dashboard",
  },
  {
    label: "Products",
    icon: AiOutlineShopping,
    href: "/studio/products",
  },
  {
    label: "Publications",
    icon: AiOutlineSwitcher,
    href: "/studio/publications",
  },
];
