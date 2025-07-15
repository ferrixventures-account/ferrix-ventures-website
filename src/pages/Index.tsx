import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
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
import Investors from '@/components/sections/Investors';
import SEO from '@/components/SEO';

interface IndexProps {
  forcedLanguage?: 'en' | 'es';
}

const Index: React.FC<IndexProps> = ({ forcedLanguage }) => {
  const { language, toggleLanguage, isLangChanging } = useLanguage(forcedLanguage);

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
        imageUrl='/ferrix-ventures-og-image.png'
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
        
        {/* Investors Section */}
        <Investors content={currentContent.cta} />
      </main>

      <Footer content={currentContent.footer} />
    </div>
  );
};

export default Index;