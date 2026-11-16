"use client";

import { useAuthStore } from "@/stores/auth.store";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa6";

const ProfileHeader = () => {
  const pathname = usePathname();
  const { user } = useAuthStore();

  return (
    <header className="sticky top-0 z-20 border-b border-zinc-200/50 bg-white">
      <div className="p-6">
        <Link href="/">
          <FaArrowLeft className="my-2" />
        </Link>
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-lg font-semibold">{user?.fullname}</h1>
            <p className="text-zinc-400 text-[12px]">{user?.username}</p>
          </div>
          <Image
            className="w-18 h-18 object-cover rounded-full"
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
            width={500}
            height={500}
            alt="Profile Picture"
          />
        </div>
        <div className="my-2 text-[14px]">
          <p>Just Building.</p>
        </div>
        <div className="flex items-center gap-2 text-[12px] text-zinc-600">
          <p>100 Followers</p>
          <p>10 Following</p>
        </div>
      </div>
      <div className="flex items-center px-2">
        {["Threads", "Products", "Publications"].map((tab) => {
          const isPostTab = tab === "Threads";
          const isActive = isPostTab
            ? pathname === `/@${user?.username}`
            : pathname === `/@${user?.username}/${tab.toLowerCase()}`;
          return (
            <Link
              href={
                isPostTab
                  ? `/@${user?.username}`
                  : `/@${user?.username}/${tab.toLowerCase()}`
              }
              key={tab}
              className={`border-b-2 px-3 py-2.5 transition cursor-pointer ${
                isActive
                  ? "border-zinc-200  font-semibold text-zinc-500"
                  : "border-transparent text-zinc-500"
              }`}
            >
              {tab}
            </Link>
          );
        })}
      </div>
    </header>
  );
};

export default ProfileHeader;
