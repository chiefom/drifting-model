
import { useState } from "react";
import { Bookmark, Star, Search, Home, Settings, ChevronRight, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Logo } from "./Logo";

interface SidebarProps {
  expanded: boolean;
  onToggle: () => void;
}

export function Sidebar({ expanded, onToggle }: SidebarProps) {
  const [activeTab, setActiveTab] = useState<string>("bookmarks");
  
  const sidebarItems = [
    { id: "bookmarks", label: "Bookmarks", icon: Star },
    { id: "history", label: "History", icon: Search },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  const bookmarks = [
    { title: "Chiffzz Home", url: "#", favicon: "" },
    { title: "Gmail", url: "#", favicon: "" },
    { title: "YouTube", url: "#", favicon: "" },
    { title: "GitHub", url: "#", favicon: "" },
    { title: "Stack Overflow", url: "#", favicon: "" },
  ];
  
  return (
    <div 
      className={`h-full bg-white border-r flex flex-col transition-all duration-300 ${
        expanded ? "w-64" : "w-16"
      }`}
    >
      <div className="flex items-center justify-between p-3">
        {expanded && <Logo />}
        <Button 
          variant="ghost" 
          size="icon"
          onClick={onToggle}
          className="ml-auto"
        >
          {expanded ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
        </Button>
      </div>
      
      <Separator />
      
      <div className="flex flex-col items-center py-4 gap-2">
        {sidebarItems.map((item) => (
          <Button
            key={item.id}
            variant={activeTab === item.id ? "secondary" : "ghost"}
            onClick={() => setActiveTab(item.id)}
            className={expanded ? "w-full justify-start px-4" : "w-12 h-12"}
          >
            <item.icon size={20} />
            {expanded && <span className="ml-2">{item.label}</span>}
          </Button>
        ))}
      </div>
      
      <Separator />
      
      {expanded && activeTab === "bookmarks" && (
        <div className="flex-1 overflow-auto p-3">
          <h3 className="mb-2 text-sm font-medium text-gray-500">Bookmarks</h3>
          <div className="space-y-1">
            {bookmarks.map((bookmark, index) => (
              <Button
                key={index}
                variant="ghost"
                className="w-full justify-start px-2 py-1 h-auto text-sm"
              >
                <Bookmark size={14} className="mr-2 text-chiffzz-teal" />
                {bookmark.title}
              </Button>
            ))}
          </div>
        </div>
      )}
      
      {expanded && activeTab === "history" && (
        <div className="flex-1 overflow-auto p-3">
          <h3 className="mb-2 text-sm font-medium text-gray-500">History</h3>
          <p className="text-sm text-gray-400">Your browsing history will appear here.</p>
        </div>
      )}
      
      {expanded && activeTab === "settings" && (
        <div className="flex-1 overflow-auto p-3">
          <h3 className="mb-2 text-sm font-medium text-gray-500">Settings</h3>
          <p className="text-sm text-gray-400">Browser settings and customization options.</p>
        </div>
      )}
    </div>
  );
}
