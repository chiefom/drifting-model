
import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export function FeatureHighlight() {
  const [visible, setVisible] = useState(true);
  const [currentFeature, setCurrentFeature] = useState(0);
  
  const features: Feature[] = [
    {
      id: "speed",
      title: "Lightning Fast",
      description: "Experience browsing speeds up to 30% faster than other browsers.",
      icon: "⚡"
    },
    {
      id: "privacy",
      title: "Enhanced Privacy",
      description: "Advanced tracking protection keeps your browsing secure and private.",
      icon: "🔒"
    },
    {
      id: "customization",
      title: "Fully Customizable",
      description: "Personalize your browsing experience with themes and layouts.",
      icon: "✨"
    }
  ];
  
  if (!visible) return null;
  
  const feature = features[currentFeature];
  
  return (
    <div className="fixed bottom-6 right-6 w-80 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
      <div className="relative p-4">
        <Button 
          variant="ghost" 
          size="icon"
          className="absolute top-2 right-2 h-6 w-6"
          onClick={() => setVisible(false)}
        >
          <X size={14} />
        </Button>
        
        <div className="flex items-center mb-3">
          <div className="flex items-center justify-center h-10 w-10 rounded-full bg-chiffzz-purple/10 text-chiffzz-purple text-xl mr-3">
            {feature.icon}
          </div>
          <h3 className="font-medium text-lg">{feature.title}</h3>
        </div>
        
        <p className="text-sm text-gray-600 mb-4">{feature.description}</p>
        
        <div className="flex justify-between items-center">
          <div className="flex space-x-1">
            {features.map((_, index) => (
              <div 
                key={index}
                className={`h-1.5 w-6 rounded-full ${
                  index === currentFeature ? "bg-chiffzz-purple" : "bg-gray-200"
                }`}
              />
            ))}
          </div>
          
          <Button 
            variant="outline"
            size="sm"
            onClick={() => {
              if (currentFeature < features.length - 1) {
                setCurrentFeature(currentFeature + 1);
              } else {
                setVisible(false);
              }
            }}
          >
            {currentFeature < features.length - 1 ? "Next" : "Got it"}
          </Button>
        </div>
      </div>
    </div>
  );
}
