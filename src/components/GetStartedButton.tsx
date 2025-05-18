"use client";

import { supabase } from "@/config/supabaseClient";
import { User } from "@supabase/supabase-js";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

function GetStartedButton() {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  const handleClick = () => {
    if (user) {
      router.push("/dashboard");
    } else {
      handleGoogleLogin();
    }
  };

  const handleGoogleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });

    if (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    const fetchUser = async () => {
      const { data, error } = await supabase.auth.getUser();
      if (!error) {
        setUser(data.user);
      } else {
        console.error("Error fetching user:", error.message);
      }
    };

    fetchUser();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_, session) => {
      setUser(session?.user ?? null);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return (
    <Button variant="custom" className="group " onClick={handleClick}>
      Get Started{" "}
      <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
        ➜
      </span>
    </Button>
  );
}

export default GetStartedButton;
