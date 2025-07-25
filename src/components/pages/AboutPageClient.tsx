'use client';

import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import About from '@/components/sections/About';

interface AboutPageClientProps {
  lang: 'en' | 'es';
  content: {
    nav: { text: string; href: string }[];
    about: {
      meta: { title: string; description: string };
      title: string;
      story: string;
      founder: string;
      role: string;
      vision: string;
    };
    cta: {
      title: string;
      entrepreneurs: string;
      entrepreneursDesc: string;
      investors: string;
      investorsDesc: string;
      talent: string;
      talentDesc: string;
      talentTitle: string;
      talentDescLong: string;
      talentButton: string;
      investorTitle: string;
      investorDesc: string;
      investorButton: string;
      apply: string;
    };
    footer: { rights: string };
  };
}

const AboutPageClient: React.FC<AboutPageClientProps> = ({ lang, content }) => {
  const { language, toggleLanguage, isLangChanging } = useLanguage(lang);

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header
        language={language}
        toggleLanguage={toggleLanguage}
        navContent={content.nav}
        isLangChanging={isLangChanging}
      />
      <main className="flex-grow">
        <About aboutContent={content.about} ctaContent={content.cta} />
      </main>
      <Footer content={content.footer} />
    </div>
  );
};

export default AboutPageClient;
