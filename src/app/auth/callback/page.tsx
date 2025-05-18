"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/config/supabaseClient";

export default function AuthCallback() {
  const router = useRouter();

  useEffect(() => {
    const handleAuth = async () => {
      const { error } = await supabase.auth.getSession();

      if (error) {
        console.error("Auth error", error.message);

        router.replace("/");
        return
      }

      router.replace("/dashboard");
    };

    handleAuth();
  }, [router]);

  return (
    <div className="flex items-center justify-center h-screen">
      <p>Signing you in...</p>
    </div>
  );
}
