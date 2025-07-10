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

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

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
          <a href="#" onClick={scrollToTop} className="flex items-center group">
            <img 
              src="/Ferrix Ventures - 281x132.svg" 
              alt="Ferrix Ventures Logo" 
              className="h-10 w-auto transition-transform duration-300 group-hover:scale-110 dark:invert"
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

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-sm shadow-lg animate-fade-in-down">
          <nav className="flex flex-col items-center space-y-4 py-8">
            <a href="#opportunity" onClick={() => setMobileMenuOpen(false)} className="text-lg font-mono text-muted-foreground hover:text-foreground transition-colors duration-300">
              {navContent.opportunity}
            </a>
            <a href="#redefining" onClick={() => setMobileMenuOpen(false)} className="text-lg font-mono text-muted-foreground hover:text-foreground transition-colors duration-300">
              {navContent.methodology}
            </a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-lg font-mono text-muted-foreground hover:text-foreground transition-colors duration-300">
              {navContent.about}
            </a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-lg font-mono text-muted-foreground hover:text-foreground transition-colors duration-300">
              {navContent.contact}
            </a>
            <div className="flex items-center space-x-4 pt-4">
              <Button variant="ghost" size="icon" onClick={toggleLanguage} className="text-base font-mono relative w-10 h-10">
                <span className={`absolute transition-all duration-150 ${isLangChanging ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}`}>
                  {language === 'es' ? 'EN' : 'ES'}
                </span>
              </Button>
              <Button variant="ghost" size="icon" onClick={toggleTheme} className="relative w-10 h-10">
                <span className="sr-only">Toggle theme</span>
                {theme === 'light' && <Sun className={`absolute h-[1.5rem] w-[1.5rem] transition-all duration-150 ${isThemeChanging ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'}`} />}
                {theme === 'dark' && <Moon className={`absolute h-[1.5rem] w-[1.5rem] transition-all duration-150 ${isThemeChanging ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'}`} />}
                {theme === 'system' && <Monitor className={`absolute h-[1.5rem] w-[1.5rem] transition-all duration-150 ${isThemeChanging ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'}`} />}
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
