"use client";

import BottomNav from "@/components/layouts/BottomNav";
import Sidebar from "@/components/layouts/Sidebar";
import { usePathname } from "next/navigation";
import { Suspense } from "react";

const UserLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Suspense
      fallback={<main className="min-h-screen w-full">Loading...</main>}
    >
      <UserLayoutContent>{children}</UserLayoutContent>
    </Suspense>
  );
};

const UserLayoutContent = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  return (
    <main className="min-h-screen w-full">
      <Sidebar />
      <section
        className={`mx-auto min-h-screen min-w-0 w-full ${pathname === "/products" ? "lg:pl-64 xl:pl-[280px]" : "lg:pl-0 xl:pl-0"} pl-0  ${
          pathname === "/products" ? "max-w-[1560px]" : "max-w-2xl"
        }`}
      >
        {children}
      </section>
      <BottomNav />
    </main>
  );
};

export default UserLayout;
