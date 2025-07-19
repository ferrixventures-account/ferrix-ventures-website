"use client";

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/hooks/useLanguage';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Briefcase, Zap, Target, ShieldCheck, BarChart, Building, Handshake, Mail, Linkedin, Scale, Rocket, Gem } from 'lucide-react';
import FeatureCard from '@/components/ui/FeatureCard';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { content as contentObj } from '@/content';

type ThesisPageClientProps = {
  lang: 'en' | 'es';
  content: typeof contentObj['en']['thesis'];
  navContent: typeof contentObj['en']['nav'];
  footerContent: typeof contentObj['en']['footer'];
};

const ThesisPageClient: React.FC<ThesisPageClientProps> = ({ lang, content, navContent, footerContent }) => {
  const { language, toggleLanguage, isLangChanging } = useLanguage(lang);
  const advantageIcons = [Briefcase, Zap, Target];
  const assetClassIcons = { vc: Rocket, ferrix: Gem, pe: Scale };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header 
        language={language}
        toggleLanguage={toggleLanguage}
        navContent={navContent}
        isLangChanging={isLangChanging}
      />
      
      <main>
        {/* Hero Section */}
        <section className="h-screen flex items-center justify-center text-center bg-white dark:bg-black">
            <div className="container mx-auto px-6 animate-fade-in-up">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 leading-tight text-black dark:text-white" dangerouslySetInnerHTML={{ __html: content.hero.title }}></h1>
                <p className="mt-6 max-w-2xl mx-auto text-lg text-black/80 dark:text-white/80" dangerouslySetInnerHTML={{ __html: content.hero.subtitle }}></p>
                <div className="mt-8">
                    <Button size="lg" asChild>
                        <a href="https://calendar.app.google/SiEUYfD4xmSU61Aj7" target="_blank" rel="noopener noreferrer">
                            {content.hero.cta}
                        </a>
                    </Button>
                </div>
            </div>
        </section>

        <section className="py-24 px-6 bg-muted">
            <div className="container mx-auto px-6">
                <div>
                    <div className="text-center max-w-4xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4 tracking-tight" dangerouslySetInnerHTML={{ __html: content.valuation.title }}></h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light mb-12">{content.valuation.description}</p>
                    </div>
                    <div className="relative flex flex-col md:flex-row items-center justify-center gap-8 max-w-5xl mx-auto">
                        <Card className="text-center bg-background w-full md:w-1/2">
                            <CardHeader className="pb-4">
                                <CardTitle className="text-3xl font-extrabold text-foreground font-mono mb-2 tracking-tight">{content.valuation.traditional.multiple}</CardTitle>
                                <CardDescription className="text-muted-foreground font-semibold text-sm uppercase tracking-widest">{content.valuation.traditional.label}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-lg font-semibold">{content.valuation.traditional.businessType}</p>
                            </CardContent>
                        </Card>
                        <div className="relative flex flex-col md:flex-row items-center justify-center md:mx-2">
                            <span className="text-2xl md:text-3xl font-bold text-muted-foreground tracking-widest mx-2">VS</span>
                        </div>
                        <Card className="text-center bg-background w-full md:w-1/2">
                            <CardHeader className="pb-4">
                                <CardTitle className="text-3xl font-extrabold text-foreground font-mono mb-2 tracking-tight">{content.valuation.tech.multiple}</CardTitle>
                                <CardDescription className="text-muted-foreground font-semibold text-sm uppercase tracking-widest">{content.valuation.tech.label}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-lg font-semibold">{content.valuation.tech.businessType}</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>

        <section className="py-24 px-6 bg-white dark:bg-black">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4 tracking-tight">{content.whyNow.title}</h2>
                </div>
                <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
                    {content.whyNow.cards.map((item: { title: string; description: string; points: string[] }, index: number) => (
                        <FeatureCard 
                            key={index}
                            title={item.title}
                            description={item.description}
                            points={item.points}
                        />
                    ))}
                </div>
            </div>
        </section>

        {/* Methodology Section */}
        <section className="py-24 px-6 bg-muted">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4 tracking-tight">{content.methodology.title}</h2>
                </div>
                <div className="relative mt-12">
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-border -translate-y-1/2"></div>
                    <div className="grid md:grid-cols-4 gap-8 relative">
                        {content.methodology.steps.map((item: { phase: number; title: string; description: string }) => (
                            <div key={item.phase} className="text-center p-4 bg-muted z-10">
                                <div className="relative mb-4 inline-block">
                                    <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl">{item.phase}</div>
                                </div>
                                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                                <p className="text-muted-foreground text-sm font-light">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>

        {/* Our Advantage Section */}
        <section className="py-24 px-6 bg-white dark:bg-black">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4 tracking-tight">{content.advantage.title}</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light mb-12">{content.advantage.description}</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {content.advantage.cards.map((card, index) => {
                        return (
                            <Card key={index} className="bg-muted">
                                <CardHeader>
                                    <CardTitle className="text-xl font-bold">{card.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground font-light">{card.description}</p>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </section>

        {/* Asset Class Section */}
        <section className="py-24 px-6 bg-muted">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4 tracking-tight">{content.assetClass.title}</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light mb-12">{content.assetClass.description}</p>
                </div>
                <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mt-12">
                    {Object.entries(content.assetClass.cards).map(([key, card]) => {
                        const isFerrix = key === 'ferrix';
                        return (
                            <Card key={key} className={`${isFerrix ? 'bg-primary text-primary-foreground border-2 border-primary-foreground/50 shadow-lg' : 'bg-background'}`}>
                                <CardHeader>
                                    <CardTitle className="text-xl font-bold">{card.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-2 text-left font-light text-sm">
                                    <p><span className="font-semibold">Risk:</span> {card.risk}</p>
                                    <p><span className="font-semibold">Returns:</span> {card.returns}</p>
                                    <p><span className="font-semibold">Model:</span> {card.model}</p>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </section>

        {/* Investment Path Section */}
        <section className="py-24 px-6 bg-white dark:bg-black">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4 tracking-tight">{content.investmentPath.title}</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light mb-12">{content.investmentPath.description}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-12">
              {content.investmentPath.tracks.map((track: any, index: number) => {
                const Icon = track.title.includes('Acquisition') ? Building : Handshake;
                const isAcquisition = track.title.includes('Acquisition');
                return (
                  <Card key={index} className="bg-background">
                    <CardHeader>
                      <CardTitle className="text-xl font-bold">
                        {track.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2 font-light text-sm">
                      <p><span className="font-semibold">Target:</span> {track.target}</p>
                      <p><span className="font-semibold">Equity:</span> {track.equity}</p>
                      <p><span className="font-semibold">Returns:</span> {track.returns}</p>
                      <p className={`pt-2 ${isAcquisition ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>{track.profile}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
            <div className="mt-12 max-w-5xl mx-auto">
              <h3 className="text-3xl font-bold text-center mb-8">{content.investmentPath.nextSteps.title}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="bg-background">
                  <CardHeader>
                    <CardTitle>{content.investmentPath.nextSteps.steps.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-decimal list-inside space-y-2 font-light">
                      {content.investmentPath.nextSteps.steps.items.map((step: string, i: number) => (
                        <li key={i}>{step}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                <Card className="bg-background">
                  <CardHeader>
                    <CardTitle>{content.investmentPath.nextSteps.minimums.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 font-light">
                      {content.investmentPath.nextSteps.minimums.items.map((item: { investor: string; amount: string }, i: number) => (
                        <li key={i} className="flex justify-between border-b pb-2">
                          <span>{item.investor}</span>
                          <span className="font-semibold">{item.amount}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24 px-6 bg-muted">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4 tracking-tight">{content.contact.title}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light mb-12">{content.contact.description}</p>
            <div className="mt-12 max-w-2xl mx-auto">
              <Card className="bg-background shadow-lg text-center p-8">
                <CardHeader className="flex flex-col items-center">
                  <Image
                    src="/santiago-saenz-ariza.png"
                    alt={content.contact.card.name}
                    width={96}
                    height={96}
                    className="rounded-full mb-4"
                  />
                  <h3 className="text-2xl font-bold">{content.contact.card.name}</h3>
                  <p className="text-muted-foreground">{content.contact.card.title}</p>
                </CardHeader>
                <CardContent className="flex flex-col items-center space-y-6">
                  <div className="flex flex-col items-center space-y-2 text-sm text-muted-foreground">
                    <a href={`mailto:${content.contact.card.email}`} className="hover:text-primary hover:underline">
                      {content.contact.card.email}
                    </a>
                    <a href={contentObj[lang].links.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-primary hover:underline">
                      {content.contact.card.linkedin}
                    </a>
                  </div>
                  <Button asChild size="lg" className="mt-4 w-full sm:w-auto">
                    <a href={contentObj[lang].links.meeting} target="_blank" rel="noopener noreferrer">
                      {content.contact.card.cta}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer content={footerContent} />
    </div>
  );
};

export default ThesisPageClient;
