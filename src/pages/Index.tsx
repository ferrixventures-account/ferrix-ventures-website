import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { content } from '../content';

// Layout Components
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// Section Components
import Hero from '@/components/sections/Hero';
import Opportunity from '@/components/sections/Opportunity';
import Redefining from '@/components/sections/Redefining';
import Methodology from '@/components/sections/Methodology';
import About from '@/components/sections/About';
import CTA from '@/components/sections/CTA';
import SEO from '@/components/SEO';

interface IndexProps {
  forcedLanguage?: string;
}

const Index: React.FC<IndexProps> = ({ forcedLanguage }) => {
  const [language, setLanguage] = useState(forcedLanguage || 'en');
  const navigate = useNavigate();
  const [isLangChanging, setIsLangChanging] = useState(false);

  // Sync language with forcedLanguage prop
  useEffect(() => {
    if (forcedLanguage && forcedLanguage !== language) {
      setLanguage(forcedLanguage);
    }
  }, [forcedLanguage, language]);

  const toggleLanguage = () => {
    setIsLangChanging(true);
    setTimeout(() => {
      const newLang = language === 'es' ? 'en' : 'es';
      setLanguage(newLang);
      navigate(newLang === 'es' ? '/es' : '/');
      setTimeout(() => setIsLangChanging(false), 75);
    }, 150);
  };

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

    const currentContent = content[language];
  const baseUrl = 'https://ferrixventures.com';
  const pageUrl = language === 'es' ? `${baseUrl}/es` : baseUrl;

  return (
        <div className="min-h-screen bg-background text-foreground">
      <SEO 
        title={currentContent.meta.title}
        description={currentContent.meta.description}
        keywords={currentContent.meta.keywords}
        lang={language as 'en' | 'es'}
        url={pageUrl}
        socials={currentContent.social.platforms}
      />
      <Header 
        language={language}
        toggleLanguage={toggleLanguage}
        navContent={currentContent.nav}
        isLangChanging={isLangChanging}
      />
      
      <main>
        {/* Hero Section */}
        <Hero content={currentContent.hero} scrollTo={scrollTo} />
        
        {/* Opportunity Section */}
        <Opportunity content={currentContent.opportunity} />
        
        {/* Redefining Venture Acceleration Section */}
        <Redefining content={currentContent.redefining} />
        
        {/* Methodology Section */}
        <Methodology content={currentContent.methodology} cta={currentContent.cta} />
        
        {/* About Section */}
        <About aboutContent={currentContent.about} ctaContent={currentContent.cta} />
        
        {/* CTA Section */}
        <CTA content={currentContent.cta} />
      </main>

      <Footer content={currentContent.footer} />
    </div>
  );
};

export default Index;