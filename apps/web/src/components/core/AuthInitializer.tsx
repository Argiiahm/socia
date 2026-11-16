"use client";

import { useAuthStore } from "@/stores/auth.store";
import { useEffect } from "react";

const AuthInitializer = ({ children }: { children: React.ReactNode }) => {
  const checkAuth = useAuthStore((state) => state.checkAuth);

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  return <>{children}</>;
};

export default AuthInitializer;
