"use client";

import { supabase } from "@/config/supabaseClient";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import toast from "react-hot-toast";

function Dashboard() {
  const router = useRouter();

  useEffect(() => {
    const session = supabase.auth.getSession();

    if (!session) {
      router.push("/login");
    } else {
      toast.success("Welcome back");
    }
  }, [router]);

  return <div>Dashboard</div>;
}

export default Dashboard;
