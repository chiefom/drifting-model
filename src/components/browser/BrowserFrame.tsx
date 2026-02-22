
import { useState } from "react";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { HomePage } from "./HomePage";

export function BrowserFrame() {
  const [sidebarExpanded, setSidebarExpanded] = useState(false);
  
  return (
    <div className="flex flex-col h-screen overflow-hidden bg-white border border-gray-200 shadow-lg rounded-lg">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar expanded={sidebarExpanded} onToggle={() => setSidebarExpanded(!sidebarExpanded)} />
        <main className="flex-1 overflow-auto">
          <HomePage />
          {/* This would be where web content would render in a real browser */}
        </main>
      </div>
      <div className="border-t p-1.5 flex justify-between bg-chiffzz-light text-xs text-gray-500">
        <span>Chiffzz Browser</span>
        <span>Version 1.0</span>
      </div>
    </div>
  );
}
