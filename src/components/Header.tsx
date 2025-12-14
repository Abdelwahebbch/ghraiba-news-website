import { Leaf, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full gradient-olive flex items-center justify-center">
              <Leaf className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-serif text-xl font-semibold text-foreground">
              Olive<span className="text-primary">News</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#prix" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              Prix du Jour
            </a>
            <a href="#historique" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              Historique
            </a>
            <a href="#actualites" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              Actualités
            </a>
          </nav>

          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <a href="#prix" className="text-muted-foreground hover:text-primary transition-colors font-medium">
                Prix du Jour
              </a>
              <a href="#historique" className="text-muted-foreground hover:text-primary transition-colors font-medium">
                Historique
              </a>
              <a href="#actualites" className="text-muted-foreground hover:text-primary transition-colors font-medium">
                Actualités
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
