import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const useLanguage = (forcedLanguage?: 'en' | 'es') => {
  const location = useLocation();
  const navigate = useNavigate();

  const getLangFromPath = (path: string): 'en' | 'es' => (path.startsWith('/es') ? 'es' : 'en');

  const [language, setLanguage] = useState<'en' | 'es'>(forcedLanguage || getLangFromPath(location.pathname));
  const [isLangChanging, setIsLangChanging] = useState(false);

  useEffect(() => {
    const lang = forcedLanguage || getLangFromPath(location.pathname);
    if (lang !== language) {
      setLanguage(lang);
    }
  }, [location.pathname, forcedLanguage, language]);

  const toggleLanguage = () => {
    setIsLangChanging(true);
    setTimeout(() => {
      const newLang = language === 'es' ? 'en' : 'es';
      const currentPath = location.pathname;
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
      navigate(newPath);
      setTimeout(() => setIsLangChanging(false), 75);
    }, 150);
  };

  return { language, toggleLanguage, isLangChanging };
};
