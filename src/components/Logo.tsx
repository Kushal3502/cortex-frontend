import { BrainCircuit } from "lucide-react";
import Link from "next/link";
import React from "react";

function Logo() {
  return (
    <Link href={"/"} className="flex items-center space-x-2">
      <BrainCircuit className="w-8 h-8 text-[#78350f]" />
      <span className="text-2xl font-bold text-[#78350f]">Cortex</span>
    </Link>
  );
}

export default Logo;
