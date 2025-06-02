"use client";

import { supabase } from "@/config/supabaseClient";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

function Dashboard() {
  const router = useRouter();

  useEffect(() => {
    const session = supabase.auth.getSession();

    if (!session) {
      router.push("/login");
    }
  }, [router]);

  return <div>Dashboard</div>;
}

export default Dashboard;
