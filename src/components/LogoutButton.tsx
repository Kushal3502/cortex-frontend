"use client";

import React from "react";
import { Button } from "./ui/button";
import { LogOut } from "lucide-react";
import { supabase } from "@/config/supabaseClient";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

function LogoutButton() {
  const router = useRouter();

  const handleLogOut = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.log("Signout error :: ", error);
      toast.error(error.message);
    } else {
      router.push("/");
    }
  };

  return (
    <Button variant="destructive" onClick={handleLogOut}>
      <LogOut /> Logout
    </Button>
  );
}

export default LogoutButton;
