"use client";

import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { content } from '@/content';

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

interface HomePageProps {
  params: { lang: 'en' | 'es' };
}

const HomePage: React.FC<HomePageProps> = ({ params }) => {
  const { language, toggleLanguage, isLangChanging } = useLanguage(params.lang);

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
  return (
    <div className="min-h-screen bg-background text-foreground">
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

export default HomePage;