"use client";

import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { content as contentObj } from '@/content';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const AcquisitionsPage = ({ lang }: { lang: 'en' | 'es' }) => {
  const { language, toggleLanguage, isLangChanging } = useLanguage(lang);
  const c = contentObj[language] || contentObj['en'];
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header
        language={language}
        toggleLanguage={toggleLanguage}
        navContent={c.nav}
        isLangChanging={isLangChanging}
      />
      <main className="flex-1 flex flex-col items-center justify-center py-24">
        <h1 className="text-4xl font-bold mb-4">
          {language === 'es' ? 'Adquisiciones' : 'Acquisitions'}
        </h1>
        <p className="max-w-2xl text-center text-lg text-muted-foreground mb-8">
          {language === 'es'
            ? 'Próximamente: Profundizaremos en nuestra estrategia y casos de éxito en adquisiciones.'
            : 'Coming soon: A deep dive into our acquisition strategy and case studies.'}
        </p>
      </main>
      <Footer content={c.footer} />
    </div>
  );
};

export default function AcquisitionsPageWrapper({ params }: { params: Promise<{ lang: 'en' | 'es' }> }) {
  const [lang, setLang] = React.useState<'en' | 'es'>('en');
  React.useEffect(() => {
    params.then(({ lang }) => setLang(lang === 'es' ? 'es' : 'en'));
  }, [params]);
  return <AcquisitionsPage lang={lang} />;
}
