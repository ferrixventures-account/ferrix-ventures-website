"use client";

import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShieldCheck, Target, Zap } from 'lucide-react';
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
  const advantageIcons = [Target, Zap, ShieldCheck];

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
                    {content.advantage.cards.map((card: { title: string; description: string }, index: number) => {
                        const Icon = advantageIcons[index];
                        return (
                            <Card key={index} className="bg-muted">
                                <CardHeader>
                                    <div className="flex items-center gap-4">
                                        <div className="bg-primary/10 p-3 rounded-full">
                                            <Icon className="w-6 h-6 text-primary" />
                                        </div>
                                        <CardTitle className="text-xl font-bold">{card.title}</CardTitle>
                                    </div>
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
        <section className="py-24 px-6 bg-background">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4 tracking-tight">{content.assetClass.title}</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light mb-12">{content.assetClass.description}</p>
                </div>
                <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mt-12 text-center">
                    <Card className="bg-muted">
                        <CardHeader>
                            <CardTitle>{content.assetClass.cards.vc.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <p><span className="font-semibold">Risk:</span> {content.assetClass.cards.vc.risk}</p>
                            <p><span className="font-semibold">Returns:</span> {content.assetClass.cards.vc.returns}</p>
                            <p><span className="font-semibold">Model:</span> {content.assetClass.cards.vc.model}</p>
                        </CardContent>
                    </Card>
                    <Card className="bg-primary text-primary-foreground border-2 border-primary-foreground/50 shadow-lg">
                        <CardHeader>
                            <CardTitle>{content.assetClass.cards.ferrix.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <p><span className="font-semibold">Risk:</span> {content.assetClass.cards.ferrix.risk}</p>
                            <p><span className="font-semibold">Returns:</span> {content.assetClass.cards.ferrix.returns}</p>
                            <p><span className="font-semibold">Model:</span> {content.assetClass.cards.ferrix.model}</p>
                        </CardContent>
                    </Card>
                    <Card className="bg-muted">
                        <CardHeader>
                            <CardTitle>{content.assetClass.cards.pe.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <p><span className="font-semibold">Risk:</span> {content.assetClass.cards.pe.risk}</p>
                            <p><span className="font-semibold">Returns:</span> {content.assetClass.cards.pe.returns}</p>
                            <p><span className="font-semibold">Model:</span> {content.assetClass.cards.pe.model}</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>

        {/* Investment Path Section */}
        <section className="py-24 px-6 bg-muted">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4 tracking-tight">{content.investmentPath.title}</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light mb-12">{content.investmentPath.description}</p>
                </div>
                <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mt-12">
                    {content.investmentPath.tracks.map((track: { title: string; target: string; equity: string; returns: string; profile: string; }, index: number) => (
                        <Card key={index} className="bg-background">
                            <CardHeader>
                                <CardTitle>{track.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <p><span className="font-semibold">Target:</span> {track.target}</p>
                                <p><span className="font-semibold">Equity:</span> {track.equity}</p>
                                <p><span className="font-semibold">Returns:</span> {track.returns}</p>
                                <p><span className="font-semibold">Profile:</span> {track.profile}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
                <div className="max-w-6xl mx-auto mt-12 grid md:grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-2xl font-bold mb-4">{content.investmentPath.nextSteps.steps.title}</h3>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                            {content.investmentPath.nextSteps.steps.items.map((item: string, index: number) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold mb-4">{content.investmentPath.nextSteps.minimums.title}</h3>
                        <ul className="space-y-2 text-muted-foreground">
                            {content.investmentPath.nextSteps.minimums.items.map((item: { investor: string; amount: string; }, index: number) => (
                                <li key={index}><span className="font-semibold">{item.investor}:</span> {item.amount}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        {/* Contact Section */}
        <section className="py-24 px-6 bg-background">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4 tracking-tight">{content.contact.title}</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light mb-12">{content.contact.description}</p>
                <div className="max-w-md mx-auto">
                    <Card className="bg-muted text-left">
                        <CardHeader>
                            <CardTitle>{content.contact.card.name}</CardTitle>
                            <CardDescription>{content.contact.card.title}</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <a href={`mailto:${content.contact.card.email}`} className="block text-primary hover:underline">{content.contact.card.email}</a>
                            <a href={`https://linkedin.com/in/santiagosaenzariza`} target="_blank" rel="noopener noreferrer" className="block text-primary hover:underline">{content.contact.card.linkedin}</a>
                            <Button size="lg" className="w-full" asChild>
                                <a href="https://calendar.app.google/SiEUYfD4xmSU61Aj7" target="_blank" rel="noopener noreferrer">
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
