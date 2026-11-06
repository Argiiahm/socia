"use client";

import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const AuthCallbackPage = () => {
  const router = useRouter();

  useEffect(() => {
    const finishAuth = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session) {
        router.replace("/login?error=verification_failed");
        return;
      }

      window.history.replaceState(null, "", "/callback");
      router.replace("/");
    };

    finishAuth();
  }, [router]);

  return <p>Verifying your account...</p>;
};

export default AuthCallbackPage;
