import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { ModeToggle } from "@/components/mode-toggle";
// Using uploaded logo with transparent background

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-card/80 backdrop-blur-md border-b border-border/30 sticky top-0 z-50 shadow-soft">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 text-2xl font-bold text-primary hover:opacity-80 transition-opacity">
          <img 
            src="/lovable-uploads/96bc904b-55e4-46da-a477-00dce56f87c2.png" 
            alt="MediTash Logo" 
            className="w-8 h-8"
            style={{
              filter: 'drop-shadow(0 0 0 white)',
              background: 'transparent'
            }}
          />
          MediTash
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-foreground hover:text-primary transition-colors">
            Home
          </Link>
          <Link to="/common-diseases" className="text-foreground hover:text-primary transition-colors">
            Common Diseases
          </Link>
          <Link to="/rare-illnesses" className="text-foreground hover:text-primary transition-colors">
            Rare Illnesses
          </Link>
          <ModeToggle />
          <Button variant="hero" size="sm">
            Get Started
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <ModeToggle />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-card/90 backdrop-blur-md border-t border-border/30 shadow-soft">
          <nav className="flex flex-col p-4 gap-4">
            <Link 
              to="/" 
              className="text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/common-diseases" 
              className="text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Common Diseases
            </Link>
            <Link 
              to="/rare-illnesses" 
              className="text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Rare Illnesses
            </Link>
            <Button variant="hero" size="sm" className="w-fit">
              Get Started
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;