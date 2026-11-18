import type { IconType } from "react-icons";
import {
  AiFillHome,
  AiFillMessage,
  AiFillShopping,
  AiFillSwitcher,
} from "react-icons/ai";
import { FaBell, FaUser } from "react-icons/fa6";

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
    icon: AiFillHome,
    href: "/",
  },
  {
    label: "Products",
    icon: AiFillShopping,
    href: "/products",
  },
  {
    label: "Publications",
    icon: AiFillSwitcher,
    href: "/publications",
  },
  {
    label: "Messages",
    icon: AiFillMessage,
    href: "/messages",
  },
  {
    label: "Notifications",
    icon: FaBell,
    href: "/notifications",
    badge: 3,
    className: "mt-4",
  },
  {
    label: "Profile",
    icon: FaUser,
    href: username ? `/@${username}` : "/login",
  },
];
