"use client";

import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { content as contentObj } from '@/content';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const AccelerationPage = ({ lang }: { lang: 'en' | 'es' }) => {
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
          {language === 'es' ? 'Aceleración' : 'Acceleration'}
        </h1>
        <p className="max-w-2xl text-center text-lg text-muted-foreground mb-8">
          {language === 'es'
            ? 'Próximamente: Expansión detallada sobre nuestra metodología y casos de éxito en aceleración.'
            : 'Coming soon: A deep dive into our acceleration methodology and success stories.'}
        </p>
      </main>
      <Footer content={c.footer} />
    </div>
  );
};

export default function AccelerationPageWrapper({ params }: { params: Promise<{ lang: 'en' | 'es' }> }) {
  const [lang, setLang] = React.useState<'en' | 'es'>('en');
  React.useEffect(() => {
    params.then(({ lang }) => setLang(lang === 'es' ? 'es' : 'en'));
  }, [params]);
  return <AccelerationPage lang={lang} />;
}
