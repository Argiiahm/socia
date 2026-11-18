"use client";

import { getMenuItems } from "@/config/Menu";
import Image from "next/image";
import Navlink from "../ui/Navlink";
import Link from "next/link";
import { useAuthStore } from "@/stores/auth.store";
import { AiOutlineSwap } from "react-icons/ai";
import { FiLogOut, FiMoreHorizontal } from "react-icons/fi";
import { useState } from "react";
import { Logout } from "@/services/auth.service";
import { setAccessToken } from "@/lib/axios";
import { useRouter } from "next/navigation";

const Sidebar = () => {
  const router = useRouter();
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const { isAuthenticated, user, clearAuth } = useAuthStore();
  const menuItems = getMenuItems(user?.username);

  const handleLogout = async () => {
    try {
      await Logout();
      setAccessToken(null);
      clearAuth();
      router.push("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <aside className="fixed inset-y-0 left-0 z-30 hidden w-64 flex-col border-r border-zinc-200/50 px-4 py-5 lg:flex xl:left-[calc(50%_-_40rem)]">
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
      </nav>

      <footer className="relative px-3">
        {isAuthenticated ? (
          <>
            {isMoreOpen && (
              <div className="absolute right-3 bottom-full mb-2 w-40 overflow-hidden rounded-lg border border-zinc-200 bg-white p-1 shadow-lg">
                <button
                  onClick={handleLogout}
                  className="flex w-full cursor-pointer items-center gap-2 rounded-md px-3 py-2 text-left text-sm text-zinc-600"
                >
                  <FiLogOut size={15} />
                  Logout
                </button>
              </div>
            )}

            <div className="flex gap-2">
              <button
                onClick={() => setIsMoreOpen((value) => !value)}
                aria-label="More actions"
                aria-expanded={isMoreOpen}
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-zinc-200 text-zinc-500 transition hover:bg-zinc-100 hover:text-zinc-900"
              >
                <FiMoreHorizontal size={18} />
              </button>
              <button className="flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-lg bg-zinc-900 py-2 text-sm font-medium text-white">
                Socia Studio
                <AiOutlineSwap size={18} />
              </button>
            </div>
          </>
        ) : (
          <Link
            href="/login"
            className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg border bg-zinc-900 py-2 text-sm font-medium text-white"
          >
            Join Socia
          </Link>
        )}
      </footer>
    </aside>
  );
};

export default Sidebar;
