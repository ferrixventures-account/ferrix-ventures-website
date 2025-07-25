"use client";

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sun, Moon, Monitor, Menu, X } from 'lucide-react';
import { useTheme } from '@/theme/ThemeContext';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';

interface NavItem {
  text: string;
  href: string;
}

interface HeaderProps {
  language: string;
  toggleLanguage: () => void;
  navContent: NavItem[];
  isLangChanging: boolean;
}

const HeaderClient: React.FC<HeaderProps> = ({ language, toggleLanguage, navContent, isLangChanging }) => {
  const { theme, setTheme } = useTheme();
  const [scrollY, setScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isThemeChanging, setIsThemeChanging] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // Prevent hydration mismatch by only rendering theme-dependent UI after mount
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const homeUrl = language === 'es' ? '/es' : '/';

    if (href.startsWith('#')) {
      const sectionId = href.substring(1);
      if (pathname !== homeUrl) {
        router.push(homeUrl);
        setTimeout(() => {
          const section = document.getElementById(sectionId);
          if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100); // Timeout to allow navigation to complete
      } else {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      const targetUrl = language === 'es' && !href.startsWith('/es') && href.startsWith('/') ? `/es${href}` : href;
      router.push(targetUrl);
    }
  };

  const scrollToTop = () => {
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
      const themes: ('system' | 'light' | 'dark')[] = ['system', 'light', 'dark'];
      const currentThemeIndex = themes.indexOf((theme as 'system' | 'light' | 'dark') || 'system');
      const nextTheme = themes[(currentThemeIndex + 1) % themes.length];
      setTheme(nextTheme as 'system' | 'light' | 'dark');
      setTimeout(() => setIsThemeChanging(false), 75);
    }, 150);
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 bg-background/80 backdrop-blur border-b border-border ${
      scrollY > 50 ? 'bg-background/90 backdrop-blur-md border-b border-border/50' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href={language === 'es' ? '/es' : '/'} onClick={scrollToTop} className="flex items-center group">
            <Image 
              src="/Ferrix Ventures - 281x132.svg" 
              alt="Ferrix Ventures Logo" 
              width={140} 
              height={66} 
              className="h-10 w-auto transition-transform duration-300 group-hover:scale-110 dark:invert"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navContent.map((item) => (
              <button key={item.text} onClick={() => handleLinkClick(item.href)} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300">
                {item.text}
              </button>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            {/* Language Toggle */}
            <Button variant="ghost" size="sm" onClick={toggleLanguage} className="text-sm w-20">
              <div className={`transition-opacity duration-300 ${isLangChanging ? 'opacity-0' : 'opacity-100'}`}>
                {language === 'en' ? 'Español' : 'English'}
              </div>
            </Button>

            {/* Theme Toggle */}
            {mounted && (
              <Button variant="ghost" size="icon" onClick={toggleTheme} className="relative w-10 h-10">
                <div className={`absolute transition-all duration-300 ${isThemeChanging ? 'transform rotate-90 opacity-0' : 'transform rotate-0 opacity-100'}`}>
                  {theme === 'light' && <Sun className="h-5 w-5" />}
                  {theme === 'dark' && <Moon className="h-5 w-5" />}
                  {theme === 'system' && <Monitor className="h-5 w-5" />}
                </div>
              </Button>
            )}

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="mt-4 md:hidden">
            <nav className="flex flex-col space-y-4">
              {navContent.map((item) => (
                <button key={item.text} onClick={() => handleLinkClick(item.href)} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors text-left">
                  {item.text}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default HeaderClient;
