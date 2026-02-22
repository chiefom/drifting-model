
import { BrowserFrame } from "@/components/browser/BrowserFrame";
import { FeatureHighlight } from "@/components/browser/FeatureHighlight";

const Index = () => {
  return (
    <div className="min-h-screen p-4 md:p-8 bg-gradient-to-br from-chiffzz-purple/10 to-chiffzz-teal/10">
      <BrowserFrame />
      <FeatureHighlight />
    </div>
  );
};

export default Index;
