"use client";

import { useAuthStore } from "@/stores/auth.store";
import Loading from "@/app/loading";
import { useEffect, useRef } from "react";

const AuthInitializer = ({ children }: { children: React.ReactNode }) => {
  const checkAuth = useAuthStore((state) => state.checkAuth);
  const authReady = useAuthStore((state) => state.authReady);
  const hasInitialized = useRef(false);

  useEffect(() => {
    if (hasInitialized.current) return;

    hasInitialized.current = true;
    checkAuth();
  }, [checkAuth]);

  if (!authReady) return <Loading />;

  return <>{children}</>;
};

export default AuthInitializer;
