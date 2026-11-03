"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa6";

const ProfileHeader = () => {
  const pathname = usePathname();
  const name = "John Doe";
  const username = "johndoe";
  return (
    <header className="sticky top-0 z-20 border-b border-zinc-900/50 bg-zinc-950/90 backdrop-blur-xl">
      <div className="p-6">
        <Link href="/">
          <FaArrowLeft className="my-2" />
        </Link>
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-lg font-semibold">{name}</h1>
            <p className="text-zinc-400 text-[12px]">{username}</p>
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
        {["Posts", "Products", "Publications"].map((tab) => {
          const isPostTab = tab === "Posts";
          const isActive = isPostTab
            ? pathname === `/@${username}`
            : pathname === `/@${username}/${tab.toLowerCase()}`;
          return (
            <Link
              href={
                isPostTab
                  ? `/@${username}`
                  : `/@${username}/${tab.toLowerCase()}`
              }
              key={tab}
              className={`border-b-2 px-3 py-2.5 transition cursor-pointer ${
                isActive
                  ? "border-white font-semibold text-white"
                  : "border-transparent text-zinc-500 hover:text-white"
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
