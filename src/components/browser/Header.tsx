
import { useState } from "react";
import { Search, Home, ChevronLeft, ChevronRight, X, Plus, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Tab {
  id: string;
  title: string;
  url: string;
  favicon?: string;
}

export function Header() {
  const [tabs, setTabs] = useState<Tab[]>([
    { id: "1", title: "New Tab", url: "", favicon: "" }
  ]);
  const [activeTabId, setActiveTabId] = useState("1");
  const [searchInput, setSearchInput] = useState("");

  const handleNewTab = () => {
    const newTab = {
      id: `tab-${Date.now()}`,
      title: "New Tab",
      url: ""
    };
    setTabs([...tabs, newTab]);
    setActiveTabId(newTab.id);
  };

  const handleCloseTab = (e: React.MouseEvent, tabId: string) => {
    e.stopPropagation();
    if (tabs.length === 1) {
      setTabs([{ id: "new-home", title: "New Tab", url: "" }]);
      setActiveTabId("new-home");
      return;
    }
    
    const newTabs = tabs.filter(tab => tab.id !== tabId);
    setTabs(newTabs);
    
    if (activeTabId === tabId) {
      setActiveTabId(newTabs[0].id);
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // This would actually navigate in a real browser
    console.log(`Searching for: ${searchInput}`);
  };

  return (
    <div className="flex flex-col w-full bg-white border-b">
      {/* Tab bar */}
      <div className="flex items-center px-2 h-10 bg-chiffzz-light">
        <div className="flex overflow-x-auto flex-grow space-x-1 mr-2">
          {tabs.map(tab => (
            <div
              key={tab.id}
              className={`flex items-center min-w-[180px] max-w-[200px] h-8 px-3 rounded-t-lg cursor-pointer group ${
                activeTabId === tab.id ? "bg-white" : "bg-chiffzz-light hover:bg-gray-200"
              }`}
              onClick={() => setActiveTabId(tab.id)}
            >
              <div className="flex items-center flex-grow overflow-hidden">
                {tab.favicon && (
                  <img src={tab.favicon} alt="" className="w-4 h-4 mr-2" />
                )}
                <span className="truncate text-sm">{tab.title}</span>
              </div>
              <button
                onClick={(e) => handleCloseTab(e, tab.id)}
                className="ml-2 opacity-0 group-hover:opacity-100 hover:bg-gray-200 rounded-full p-0.5"
              >
                <X size={14} />
              </button>
            </div>
          ))}
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 flex-shrink-0"
          onClick={handleNewTab}
        >
          <Plus size={18} />
        </Button>
      </div>

      {/* Address bar */}
      <div className="flex items-center h-12 px-4 py-1.5 bg-white gap-2">
        <div className="flex space-x-1">
          <Button variant="ghost" size="icon" className="h-9 w-9">
            <ChevronLeft size={20} />
          </Button>
          <Button variant="ghost" size="icon" className="h-9 w-9">
            <ChevronRight size={20} />
          </Button>
          <Button variant="ghost" size="icon" className="h-9 w-9">
            <Home size={20} />
          </Button>
        </div>
        
        <form className="flex-grow" onSubmit={handleSearch}>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search size={16} className="text-gray-400" />
            </div>
            <Input
              type="text"
              className="w-full pl-10 h-9 rounded-full border border-gray-300 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-chiffzz-purple focus:border-transparent"
              placeholder="Search or enter web address"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
          </div>
        </form>
        
        <Button variant="ghost" size="icon" className="h-9 w-9">
          <Settings size={20} />
        </Button>
      </div>
    </div>
  );
}
