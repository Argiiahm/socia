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
  const isProductsPage = pathname === "/products";

  return (
    <main className="min-h-screen w-full">
      <div className="mx-auto min-h-screen w-full max-w-7xl">
        <Sidebar />
        <section
          className={`mx-auto min-h-screen min-w-0 pb-16 lg:pb-0 ${
            isProductsPage
              ? "w-full max-w-none lg:pl-64"
              : "w-full max-w-2xl"
          }`}
        >
          {children}
        </section>
      </div>
      <BottomNav />
    </main>
  );
};

export default UserLayout;
