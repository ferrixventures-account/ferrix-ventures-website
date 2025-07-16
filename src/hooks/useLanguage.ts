import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';

export const useLanguage = (forcedLanguage?: 'en' | 'es') => {
  const pathname = usePathname();
  const router = useRouter();

  const getLangFromPath = (path: string): 'en' | 'es' => (path.startsWith('/es') ? 'es' : 'en');

  const [language, setLanguage] = useState<'en' | 'es'>(forcedLanguage || getLangFromPath(pathname));
  const [isLangChanging, setIsLangChanging] = useState(false);

  useEffect(() => {
    const lang = forcedLanguage || getLangFromPath(pathname);
    if (lang !== language) {
      setLanguage(lang);
    }
  }, [pathname, forcedLanguage, language]);

  const toggleLanguage = () => {
    setIsLangChanging(true);
    setTimeout(() => {
      const newLang = language === 'es' ? 'en' : 'es';
      const currentPath = pathname;
      let newPath;

      if (newLang === 'es') {
        if (currentPath.startsWith('/es')) {
          newPath = currentPath; // Already in Spanish
        } else {
          newPath = currentPath === '/' ? '/es' : `/es${currentPath}`;
        }
      } else {
        if (currentPath.startsWith('/es')) {
          newPath = currentPath.substring(3) || '/'; // Go to English version
        } else {
          newPath = currentPath; // Already in English
        }
      }
      
      setLanguage(newLang);
      router.push(newPath);
      setTimeout(() => setIsLangChanging(false), 75);
    }, 150);
  };

  return { language, toggleLanguage, isLangChanging };
};
