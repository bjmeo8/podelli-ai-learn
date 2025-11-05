import { Sparkles } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-background border-b border-border sticky top-0 z-40 shadow-soft">
      <div className="max-w-lg mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <Sparkles className="h-5 w-5 text-primary-foreground" />
            </div>
            <h1 className="text-2xl font-bold">Podelli</h1>
          </div>
          <span className="text-xs font-bold px-3 py-1.5 bg-primary text-primary-foreground rounded-full">
            AI POWERED
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
