import { Sparkles } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/80">
      <div className="max-w-lg mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <h1 className="text-2xl font-bold tracking-tight">Podelli</h1>
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-foreground text-background">
            <Sparkles className="h-3.5 w-3.5" />
            <span className="text-xs font-semibold uppercase tracking-wide">AI Powered</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
