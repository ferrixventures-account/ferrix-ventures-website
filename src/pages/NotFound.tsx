import React, { useState, useEffect } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { content } from '../content';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';

const NotFound: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const getLangFromPath = (path: string): 'en' | 'es' => (path.startsWith('/es') ? 'es' : 'en');
  const [language, setLanguage] = useState<'en' | 'es'>(getLangFromPath(location.pathname));
  const [isLangChanging, setIsLangChanging] = useState(false);

  useEffect(() => {
    const lang = getLangFromPath(location.pathname);
    if (lang !== language) {
      setLanguage(lang);
    }
  }, [location.pathname, language]);

  const toggleLanguage = () => {
    setIsLangChanging(true);
    setTimeout(() => {
      const newLang = language === 'es' ? 'en' : 'es';
      const homePath = newLang === 'es' ? '/es' : '/';
      navigate(homePath);
      setTimeout(() => setIsLangChanging(false), 75);
    }, 150);
  };

  const currentContent = content[language];
  const homeUrl = language === 'es' ? '/es' : '/';

  return (
    <>
      <SEO
        title={`${currentContent.notFound.title} | Ferrix Ventures`}
        description="The page you are looking for does not exist."
        lang={language}
        url={`https://ferrixventures.com${location.pathname}`}
      />
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div className="min-h-screen bg-background text-foreground flex flex-col">
        <Header
          language={language}
          toggleLanguage={toggleLanguage}
          navContent={currentContent.nav}
          isLangChanging={isLangChanging}
        />
        <main className="flex-grow flex items-center justify-center text-center px-4">
          <div className="max-w-md mx-auto animate-fade-in-up">
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              404
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              {currentContent.notFound.headline}
            </p>
            <Button asChild>
              <Link to={homeUrl}>{currentContent.notFound.backToHome}</Link>
            </Button>
          </div>
        </main>
        <Footer content={currentContent.footer} />
      </div>
    </>
  );
};

export default NotFound;
