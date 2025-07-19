import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';

export const useLanguage = (forcedLanguage?: 'en' | 'es') => {
  const pathname = usePathname();
  const router = useRouter();

  const [language, setLanguage] = useState(forcedLanguage || 'en');
  const [isLangChanging, setIsLangChanging] = useState(false);

  useEffect(() => {
    if (forcedLanguage && forcedLanguage !== language) {
      setLanguage(forcedLanguage);
    }
  }, [forcedLanguage, language]);

  const toggleLanguage = () => {
    setIsLangChanging(true);
    setTimeout(() => {
      const newLang = language === 'es' ? 'en' : 'es';
      const currentPath = pathname;

      const pathSegments = currentPath.split('/').filter(Boolean);

      // Remove the current language segment if it exists
      if (pathSegments[0] === language) {
        pathSegments.shift();
      }

      const newPath = `/${newLang}/${pathSegments.join('/')}`;
      
      setLanguage(newLang);
      router.push(newPath, { scroll: false });
      setTimeout(() => setIsLangChanging(false), 75);
    }, 150);
  };

  return { language, toggleLanguage, isLangChanging };
};
