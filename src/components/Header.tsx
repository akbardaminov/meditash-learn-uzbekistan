import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ModeToggle } from "@/components/mode-toggle";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="bg-card/80 backdrop-blur-md border-b border-border/30 sticky top-0 z-50 shadow-soft">
      <div className="container mx-auto px-4 lg:px-8 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 text-xl md:text-2xl font-bold text-primary hover:opacity-80 transition-opacity">
          <img 
            src="/lovable-uploads/96bc904b-55e4-46da-a477-00dce56f87c2.png" 
            alt="MediTash Logo" 
            className="w-7 h-7 md:w-8 md:h-8"
            style={{
              filter: 'drop-shadow(0 0 0 white)',
              background: 'transparent'
            }}
          />
          <span className="hidden sm:block">MediTash</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link to="/" className="text-foreground hover:text-primary transition-colors font-medium">
            {t('nav.home')}
          </Link>
          <Link to="/common-diseases" className="text-foreground hover:text-primary transition-colors font-medium">
            {t('nav.commonDiseases')}
          </Link>
          <Link to="/rare-illnesses" className="text-foreground hover:text-primary transition-colors font-medium">
            {t('nav.rareIllnesses')}
          </Link>
          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            <ModeToggle />
            <Button variant="hero" size="sm" className="ml-2">
              {t('hero.getStarted')}
            </Button>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2">
            <LanguageSwitcher />
            <ModeToggle />
          </div>
          <button
            onClick={toggleMenu}
            className="p-2 hover:bg-accent rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <div className="relative w-6 h-6">
              <Menu 
                size={24} 
                className={`absolute inset-0 transition-all duration-300 ${
                  isMenuOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'
                }`}
              />
              <X 
                size={24} 
                className={`absolute inset-0 transition-all duration-300 ${
                  isMenuOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
        isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="bg-card/95 backdrop-blur-md border-t border-border/30 shadow-lg">
          <nav className="flex flex-col p-6 gap-6">
            {/* Mobile Language and Theme Controls for small screens */}
            <div className="sm:hidden flex items-center justify-between pb-4 border-b border-border/30">
              <span className="text-sm font-medium text-muted-foreground">Settings</span>
              <div className="flex items-center gap-3">
                <LanguageSwitcher />
                <ModeToggle />
              </div>
            </div>
            
            <Link 
              to="/" 
              className="text-foreground hover:text-primary transition-colors text-lg font-medium py-2 hover:bg-accent/50 rounded-md px-3 -mx-3"
              onClick={closeMenu}
            >
              {t('nav.home')}
            </Link>
            <Link 
              to="/common-diseases" 
              className="text-foreground hover:text-primary transition-colors text-lg font-medium py-2 hover:bg-accent/50 rounded-md px-3 -mx-3"
              onClick={closeMenu}
            >
              {t('nav.commonDiseases')}
            </Link>
            <Link 
              to="/rare-illnesses" 
              className="text-foreground hover:text-primary transition-colors text-lg font-medium py-2 hover:bg-accent/50 rounded-md px-3 -mx-3"
              onClick={closeMenu}
            >
              {t('nav.rareIllnesses')}
            </Link>
            <div className="pt-4 border-t border-border/30">
              <Button 
                variant="hero" 
                size="sm" 
                className="w-full"
                onClick={closeMenu}
              >
                {t('hero.getStarted')}
              </Button>
            </div>
          </nav>
        </div>
      </div>
      
      {/* Mobile Backdrop */}
      {isMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-40" 
          onClick={closeMenu}
        />
      )}
    </header>
  );
};

export default Header;