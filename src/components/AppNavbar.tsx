"use client";

import Link from "next/link";
import Logo from "./Logo";
import LogoutButton from "./LogoutButton";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

function AppNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full h-16 z-50 flex items-center justify-between md:px-12 px-6 bg-yellow/10 backdrop-blur-3xl shadow-sm">
      <Logo />

      {/* Desktop links */}
      <div className="hidden md:flex justify-center items-center gap-10">
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/projects">Projects</Link>
        <LogoutButton />
      </div>

      {/* Mobile hamburger icon */}
      <div className="md:hidden">
        <Button variant={"custom"} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </Button>
      </div>

      {/* Mobile dropdown menu */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-1/2 transform -translate-x-1/2 w-[90%] bg-white/40 backdrop-blur-lg rounded-xl shadow-md flex flex-col items-center gap-4 py-4 z-50">
          <Link href="/dashboard" onClick={() => setIsOpen(false)}>
            Dashboard
          </Link>
          <Link href="/projects" onClick={() => setIsOpen(false)}>
            Projects
          </Link>
          <LogoutButton />
        </div>
      )}
    </nav>
  );
}

export default AppNavbar;
