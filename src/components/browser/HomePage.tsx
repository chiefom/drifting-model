
import { useState } from "react";
import { Search, Plus, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface QuickAccessTile {
  id: string;
  title: string;
  url: string;
  favicon?: string;
}

export function HomePage() {
  const [searchInput, setSearchInput] = useState("");
  const [quickAccessTiles, setQuickAccessTiles] = useState<QuickAccessTile[]>([
    { id: "1", title: "Gmail", url: "https://gmail.com", favicon: "" },
    { id: "2", title: "YouTube", url: "https://youtube.com", favicon: "" },
    { id: "3", title: "Maps", url: "https://maps.google.com", favicon: "" },
    { id: "4", title: "Drive", url: "https://drive.google.com", favicon: "" },
    { id: "5", title: "Calendar", url: "https://calendar.google.com", favicon: "" },
    { id: "6", title: "Photos", url: "https://photos.google.com", favicon: "" },
    { id: "7", title: "Translate", url: "https://translate.google.com", favicon: "" },
    { id: "8", title: "News", url: "https://news.google.com", favicon: "" },
  ]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`Searching for: ${searchInput}`);
  };

  const handleRemoveTile = (id: string) => {
    setQuickAccessTiles(quickAccessTiles.filter(tile => tile.id !== id));
  };

  return (
    <div className="flex flex-col items-center min-h-full bg-chiffzz-light px-6 py-10">
      <div className="w-full max-w-5xl flex flex-col items-center">
        {/* Logo & Search */}
        <div className="mb-10 flex flex-col items-center">
          <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-chiffzz-purple to-chiffzz-teal bg-clip-text text-transparent">
            Chiffzz
          </h1>
          
          <form className="w-full max-w-2xl" onSubmit={handleSearch}>
            <div className="relative">
              <Input
                type="text"
                className="w-full pl-12 h-12 rounded-full border border-gray-300 bg-white shadow-md focus:ring-2 focus:ring-chiffzz-purple focus:border-transparent"
                placeholder="Search the web or enter URL"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-4">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
            </div>
          </form>
        </div>
        
        {/* Quick Access */}
        <div className="w-full">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-medium text-chiffzz-slate">Quick Access</h2>
            <Button variant="ghost" size="sm" className="text-chiffzz-purple">
              <Plus size={16} className="mr-1" />
              Add
            </Button>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {quickAccessTiles.map((tile) => (
              <div 
                key={tile.id} 
                className="relative group bg-white rounded-lg shadow hover:shadow-md p-4 flex flex-col items-center cursor-pointer"
              >
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button 
                    variant="ghost" 
                    size="icon"
                    className="h-6 w-6"
                    onClick={() => handleRemoveTile(tile.id)}
                  >
                    <X size={14} />
                  </Button>
                </div>
                
                <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center mb-3">
                  {tile.favicon ? (
                    <img src={tile.favicon} alt="" className="h-6 w-6" />
                  ) : (
                    <div className="h-6 w-6 flex items-center justify-center bg-chiffzz-teal text-white rounded-full font-medium">
                      {tile.title.charAt(0)}
                    </div>
                  )}
                </div>
                <span className="text-sm">{tile.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
