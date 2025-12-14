import { Leaf } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full gradient-olive flex items-center justify-center">
              <Leaf className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-serif text-xl font-semibold text-foreground">
              Olive<span className="text-primary">News</span>
            </span>
          </div>

          <nav className="flex items-center gap-6">
            <a href="#prix" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Prix
            </a>
            <a href="#historique" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Historique
            </a>
            <a href="#actualites" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Actualités
            </a>
          </nav>

          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} OliveNews. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
