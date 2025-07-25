"use client";

import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { content as contentObj } from '@/content';

// Infer the type from the content object structure
type ContentType = typeof contentObj['en'];

interface AcquisitionsPageClientProps {
  lang: 'en' | 'es';
  content: ContentType; // Use the specific, inferred type
}

const AcquisitionsPageClient: React.FC<AcquisitionsPageClientProps> = ({ lang, content }) => {
  const { language, toggleLanguage, isLangChanging } = useLanguage(lang);
  const c = content;
  const ac = c.acquisitions;

  return (
    <div className="flex flex-col min-h-screen">
      <Header language={language} toggleLanguage={toggleLanguage} isLangChanging={isLangChanging} navContent={c.nav} />
      <main className="flex-grow pt-20 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200">
        {/* Hero Section */}
        <section className="py-20 text-center bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{ac.hero.headline}</h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6">{ac.hero.subheadline}</p>
            <p className="max-w-3xl mx-auto text-lg mb-8">{ac.hero.description}</p>
            <Button size="lg" asChild>
              <a href={c.links.meeting} target="_blank" rel="noopener noreferrer">{ac.hero.cta}</a>
            </Button>
          </div>
        </section>

        {/* Why Partner With Us Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">{ac.value.title}</h2>
            <p className="text-xl text-center text-gray-600 dark:text-gray-400 mb-12">{ac.value.subtitle}</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {ac.value.benefits.map((benefit: { icon: string; title: string; description: string; }, index: number) => (
                <Card key={index} className="p-6 bg-gray-50 dark:bg-gray-800 text-center">
                  <div className="text-5xl mb-4 mx-auto">{benefit.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{benefit.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Investment Models Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">{ac.models.title}</h2>
            <p className="text-xl text-center text-gray-600 dark:text-gray-400 mb-12">{ac.models.subtitle}</p>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {ac.models.options.map((option: { name: string; description: string; features: string[]; ideal: string; }, index: number) => (
                <Card key={index} className="p-6 flex flex-col">
                  <h3 className="text-2xl font-bold mb-3">{option.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">{option.description}</p>
                  <ul className="space-y-3 mb-6">
                    {option.features.map((feature: string, i: number) => (
                      <li key={i} className="flex items-center">
                         <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg mt-auto">
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300">{option.ideal}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Criteria Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">{ac.criteria.title}</h2>
            <p className="text-xl text-center text-gray-600 dark:text-gray-400 mb-12">{ac.criteria.subtitle}</p>
            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
              {ac.criteria.requirements.map((req: { category: string; items: string[]; }, index: number) => (
                <Card key={index} className="p-6 bg-gray-50 dark:bg-gray-800">
                  <h3 className="text-xl font-bold mb-4">{req.category}</h3>
                  <ul className="space-y-2">
                    {req.items.map((item: string, i: number) => (
                      <li key={i} className="flex items-start">
                        <svg className="w-5 h-5 mr-2 mt-1 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-100 dark:bg-gray-800">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">{ac.cta.title}</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl mb-8 dark:text-gray-400">{ac.cta.description}</p>
              <Button size="lg" asChild>
                 <a href={c.links.meeting} target="_blank" rel="noopener noreferrer">{ac.cta.button}</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer content={c.footer} />
    </div>
  );
};

export default AcquisitionsPageClient;
