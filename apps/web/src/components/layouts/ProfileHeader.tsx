"use client";

import { useAuthStore } from "@/stores/auth.store";
import { getUser } from "@/services/user.service";
import Image from "next/image";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";

type ProfileUser = {
  id: string;
  fullname: string;
  username: string;
  role: string;
};

const ProfileHeader = () => {
  const pathname = usePathname();
  const { username: routeUsername } = useParams<{ username: string }>();
  const { user } = useAuthStore();
  const [profileUser, setProfileUser] = useState<ProfileUser | null>(null);
  const username = decodeURIComponent(routeUsername).replace(/^@+/, "");

  const profilePath = `/@${encodeURIComponent(username)}`;
  const isOwner = user?.id === profileUser?.id;

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await getUser(username);
        setProfileUser(response.data);
      } catch (error) {
        setProfileUser(null);
        console.error(error);
      }
    };

    fetchUser();
  }, [username]);

  return (
    <header className="sticky top-0 z-20 border-b border-zinc-200/50 bg-white">
      <div className="p-6">
        {/* Back */}
        {!isOwner && (
          <Link href="/">
            <FaArrowLeft className="my-2" />
          </Link>
        )}
        <div className="flex items-center justify-between">
          {/* ProfileName */}
          <div>
            <h1 className="text-lg font-semibold">{profileUser?.fullname}</h1>
            <p className="text-zinc-400 text-[12px]">
              {profileUser ? `@${profileUser.username}` : `@${username}`}
            </p>
          </div>

          {/* Profle Picture */}
          <div className="flex items-center gap-3">
            <Image
              className="w-18 h-18 object-cover rounded-full"
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
              width={500}
              height={500}
              alt="Profile Picture"
            />
          </div>
        </div>

        {/* Bio */}
        <div className="my-2 text-[14px]">
          <p>Just Building</p>
        </div>

        {/* Followers */}
        <div className="flex items-center gap-2 text-[12px] text-zinc-600">
          <p>100 Followers</p>
          <p>10 Following</p>
        </div>
      </div>

      {/* Action */}
      <div className="px-6 pb-4 grid grid-cols-2 gap-2">
        <button className="border border-zinc-200/50 text-zinc-600 text-[13px] rounded-lg p-1 cursor-pointer">
          {isOwner ? "Edit Profile" : "Follow"}
        </button>
        <button className="border border-zinc-200/50 text-zinc-600 text-[13px] rounded-lg p-1 cursor-pointer">
          {isOwner ? "Analytics" : "Message"}
        </button>
      </div>

      {/* Tab */}
      <div className="flex items-center px-2">
        {["Threads", "Products", "Publications"].map((tab) => {
          const isPostTab = tab === "Threads";
          const isActive = isPostTab
            ? pathname === profilePath
            : pathname === `${profilePath}/${tab.toLowerCase()}`;
          return (
            <Link
              href={
                isPostTab ? profilePath : `${profilePath}/${tab.toLowerCase()}`
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
