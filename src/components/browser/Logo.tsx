
import React from "react";

export function Logo() {
  return (
    <div className="flex items-center">
      <div className="h-8 w-8 relative">
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-chiffzz-purple to-chiffzz-teal opacity-80"></div>
        <div className="absolute inset-1.5 rounded-full bg-white"></div>
        <div className="absolute inset-2.5 rounded-full bg-gradient-to-br from-chiffzz-purple to-chiffzz-teal"></div>
      </div>
      <span className="ml-2 text-xl font-bold bg-gradient-to-r from-chiffzz-purple to-chiffzz-teal bg-clip-text text-transparent">
        Chiffzz
      </span>
    </div>
  );
}
