import {
  FiHome,
  FiCompass,
  FiBell,
  FiMail,
  FiBook,
  FiUser,
} from "react-icons/fi";
import type { IconType } from "react-icons";

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
    icon: FiCompass,
    href: "/products",
  },
  {
    label: "Notifications",
    icon: FiBell,
    href: "/notifications",
    badge: 3,
    className: "mt-4",
  },
  {
    label: "Messages",
    icon: FiMail,
    href: "/messages",
  },
  {
    label: "Publications",
    icon: FiBook,
    href: "/publications",
  },
  {
    label: "Profile",
    icon: FiUser,
    href: "/profile",
  },
];
