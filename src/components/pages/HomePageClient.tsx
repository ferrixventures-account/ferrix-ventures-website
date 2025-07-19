"use client";

import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { content as contentObj } from '@/content';

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

type HomePageClientProps = {
  lang: 'en' | 'es';
  content: typeof contentObj['en'];
};

const HomePageClient: React.FC<HomePageClientProps> = ({ lang, content }) => {
  const { language, toggleLanguage, isLangChanging } = useLanguage(lang);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header 
        language={language}
        toggleLanguage={toggleLanguage}
        navContent={content.nav}
        isLangChanging={isLangChanging}
      />
      
      <main>
        {/* Hero Section */}
        <Hero content={content.hero} scrollTo={scrollTo} />
        
        {/* Opportunity Section */}
        <Opportunity content={content.opportunity} />
        
        {/* Redefining Venture Acceleration Section */}
        <Redefining content={content.redefining} />
        
        {/* Methodology Section */}
        <Methodology content={content.methodology} cta={content.cta} />
        
        {/* About Section */}
        <About aboutContent={content.about} ctaContent={content.cta} />
        
        {/* Investors Section */}
        <Investors content={content.cta} language={language} />
      </main>

      <Footer content={content.footer} />
    </div>
  );
};

export default HomePageClient;
