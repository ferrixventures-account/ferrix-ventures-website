import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sun, Moon, Monitor, Menu, X } from 'lucide-react';
import { useTheme } from 'next-themes';

interface HeaderProps {
  language: string;
  toggleLanguage: () => void;
  navContent: {
    opportunity: string;
    methodology: string;
    about: string;
    contact: string;
  };
  isLangChanging: boolean;
}

const Header: React.FC<HeaderProps> = ({ language, toggleLanguage, navContent, isLangChanging }) => {
  const { theme, setTheme } = useTheme();
  const [scrollY, setScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isThemeChanging, setIsThemeChanging] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsThemeChanging(true);
    setTimeout(() => {
      const themes = ['system', 'light', 'dark'];
      const currentThemeIndex = themes.indexOf(theme || 'system');
      const nextTheme = themes[(currentThemeIndex + 1) % themes.length];
      setTheme(nextTheme);
      setTimeout(() => setIsThemeChanging(false), 75);
    }, 150);
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 bg-background/80 backdrop-blur border-b border-border ${
      scrollY > 50 ? 'bg-background/90 backdrop-blur-md border-b border-border/50' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#home" className="flex items-center group">
            <img 
              src="/Logos - 281x132 - Ferrix Ventures.png" 
              alt="Ferrix Ventures Logo" 
              className="h-10 w-auto transition-transform duration-300 group-hover:scale-110"
            />
          </a>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#opportunity" className="text-sm font-mono text-muted-foreground hover:text-foreground transition-colors duration-300">
              {navContent.opportunity}
            </a>
            <a href="#redefining" className="text-sm font-mono text-muted-foreground hover:text-foreground transition-colors duration-300">
              {navContent.methodology}
            </a>
            <a href="#about" className="text-sm font-mono text-muted-foreground hover:text-foreground transition-colors duration-300">
              {navContent.about}
            </a>
            <a href="#contact" className="text-sm font-mono text-muted-foreground hover:text-foreground transition-colors duration-300">
              {navContent.contact}
            </a>
          </nav>

          <div className="hidden md:flex items-center space-x-2">
            <Button variant="ghost" size="icon" onClick={toggleLanguage} className="text-xs font-mono relative w-9 h-9">
              <span className={`absolute transition-all duration-150 ${isLangChanging ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}`}>
                {language === 'es' ? 'EN' : 'ES'}
              </span>
            </Button>

            <Button variant="ghost" size="icon" onClick={toggleTheme} className="relative w-9 h-9">
              <span className="sr-only">Toggle theme</span>
              {theme === 'light' && <Sun className={`absolute h-[1.2rem] w-[1.2rem] transition-all duration-150 ${isThemeChanging ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'}`} />}
              {theme === 'dark' && <Moon className={`absolute h-[1.2rem] w-[1.2rem] transition-all duration-150 ${isThemeChanging ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'}`} />}
              {theme === 'system' && <Monitor className={`absolute h-[1.2rem] w-[1.2rem] transition-all duration-150 ${isThemeChanging ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'}`} />}
            </Button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-foreground"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
