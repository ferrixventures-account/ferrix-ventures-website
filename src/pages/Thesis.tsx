import React, { useEffect } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { content } from '../content';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, ShieldCheck, Target, TrendingUp, DollarSign, Globe, Zap } from 'lucide-react';

const advantageCards = [
    {
        icon: ShieldCheck,
        title: "Proprietary Deal Flow",
        description: "We source off-market deals through our exclusive network, avoiding competitive auctions and securing favorable entry multiples."
    },
    {
        icon: TrendingUp,
        title: "Tech-Driven Growth",
        description: "Our in-house AI and automation experts implement systems that drive operational efficiency and unlock new revenue streams."
    },
    {
        icon: Zap,
        title: "Operational Excellence",
        description: "We have a proven playbook for scaling businesses, from optimizing marketing funnels to streamlining financial operations."
    }
];

// Layout Components
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SEO from '@/components/SEO';

const Thesis: React.FC = () => {
  const { language, toggleLanguage, isLangChanging } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const currentContent = content[language];
  const baseUrl = 'https://ferrixventures.com';
  const pageUrl = `${baseUrl}/thesis`;

  const advantageCards = [
    { icon: Target },
    { icon: Zap },
    { icon: ShieldCheck },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO 
        title={currentContent.thesis.meta.title}
        description={currentContent.thesis.meta.description}
        keywords={currentContent.thesis.meta.keywords}
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
        <section className="h-screen flex items-center justify-center text-center bg-white dark:bg-black">
            <div className="container mx-auto px-6 animate-fade-in-up">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 leading-tight text-black dark:text-white" dangerouslySetInnerHTML={{ __html: currentContent.thesis.hero.title }}></h1>
                <p className="mt-6 max-w-2xl mx-auto text-lg text-black/80 dark:text-white/80" dangerouslySetInnerHTML={{ __html: currentContent.thesis.hero.subtitle }}></p>
                <div className="mt-8">
                    <Button size="lg" asChild>
                        <a href="https://calendar.app.google/SiEUYfD4xmSU61Aj7" target="_blank" rel="noopener noreferrer">
                            {currentContent.thesis.hero.cta}
                        </a>
                    </Button>
                </div>
            </div>
        </section>

        <section className="py-24 px-6 bg-muted">
            <div className="container mx-auto px-6">
                <div>
                    <div className="text-center max-w-4xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4 tracking-tight" dangerouslySetInnerHTML={{ __html: currentContent.thesis.valuation.title }}></h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light mb-12">{currentContent.thesis.valuation.description}</p>
                    </div>
                    <div className="relative flex flex-col md:flex-row items-center justify-center gap-8 max-w-5xl mx-auto">
                        <Card className="text-center bg-background w-full md:w-1/2">
                            <CardHeader className="pb-4">
                                <CardTitle className="text-3xl font-extrabold text-foreground font-mono mb-2 tracking-tight">{currentContent.thesis.valuation.traditional.multiple}</CardTitle>
                                <CardDescription className="text-muted-foreground font-semibold text-sm uppercase tracking-widest">{currentContent.thesis.valuation.traditional.label}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-lg font-semibold">{currentContent.thesis.valuation.traditional.businessType}</p>
                            </CardContent>
                        </Card>
                        <div className="relative flex flex-col md:flex-row items-center justify-center md:mx-2">
                            <span className="text-2xl md:text-3xl font-bold text-muted-foreground tracking-widest mx-2">VS</span>
                        </div>
                        <Card className="text-center bg-background w-full md:w-1/2">
                            <CardHeader className="pb-4">
                                <CardTitle className="text-3xl font-extrabold text-foreground font-mono mb-2 tracking-tight">{currentContent.thesis.valuation.tech.multiple}</CardTitle>
                                <CardDescription className="text-muted-foreground font-semibold text-sm uppercase tracking-widest">{currentContent.thesis.valuation.tech.label}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-lg font-semibold">{currentContent.thesis.valuation.tech.businessType}</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>

        <section className="py-24 px-6 bg-white dark:bg-black">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4 tracking-tight">{currentContent.thesis.whyNow.title}</h2>
                </div>
                <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
                    {currentContent.thesis.whyNow.cards.map((item, index) => (
                        <Card key={index} className="flex flex-col bg-muted">
                            <CardHeader>
                                <CardTitle className="font-bold">{item.title}</CardTitle>
                                <CardDescription>{item.description}</CardDescription>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <ul className="space-y-2 font-light">
                                    {item.points.map((point, pIndex) => (
                                        <li key={pIndex} className="flex items-start">
                                            <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>

        {/* Methodology Section */}
        <section className="py-24 px-6 bg-muted">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4 tracking-tight">{currentContent.thesis.methodology.title}</h2>
                </div>
                <div className="relative mt-12">
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-border -translate-y-1/2"></div>
                    <div className="grid md:grid-cols-4 gap-8 relative">
                        {currentContent.thesis.methodology.steps.map(item => (
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
                    <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4 tracking-tight">{currentContent.thesis.advantage.title}</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light mb-12">{currentContent.thesis.advantage.description}</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {currentContent.thesis.advantage.cards.map((card, index) => {
                        const Icon = advantageCards[index].icon;
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

        {/* Join the Next Asset Class Section */}
        <section className="py-24 px-6 bg-white dark:bg-black">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4 tracking-tight">{currentContent.thesis.assetClass.title}</h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-light mb-12">{currentContent.thesis.assetClass.description}</p>
                </div>
                <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
                    {/* Traditional VC */}
                    <Card className="flex flex-col text-center p-6 bg-muted">
                        <CardHeader>
                            <CardTitle className="text-2xl font-bold">{currentContent.thesis.assetClass.cards.vc.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow space-y-4 font-light">
                            <p><strong className="font-semibold">Risk:</strong> {currentContent.thesis.assetClass.cards.vc.risk}</p>
                            <p><strong className="font-semibold">Returns:</strong> {currentContent.thesis.assetClass.cards.vc.returns}</p>
                            <p><strong className="font-semibold">Model:</strong> {currentContent.thesis.assetClass.cards.vc.model}</p>
                        </CardContent>
                    </Card>

                    {/* Ferrix Ventures - Highlighted */}
                    <Card className="flex flex-col text-center p-6 bg-muted border-2 border-primary ring-4 ring-primary/20 shadow-lg scale-105">
                        <CardHeader>
                            <CardTitle className="text-2xl font-bold">{currentContent.thesis.assetClass.cards.ferrix.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow space-y-4 font-light">
                            <p><strong className="font-semibold">Risk:</strong> {currentContent.thesis.assetClass.cards.ferrix.risk}</p>
                            <p><strong className="font-semibold">Returns:</strong> {currentContent.thesis.assetClass.cards.ferrix.returns}</p>
                            <p><strong className="font-semibold">Model:</strong> {currentContent.thesis.assetClass.cards.ferrix.model}</p>
                        </CardContent>
                    </Card>

                    {/* Private Equity */}
                    <Card className="flex flex-col text-center p-6 bg-muted">
                        <CardHeader>
                            <CardTitle className="text-2xl font-bold">{currentContent.thesis.assetClass.cards.pe.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow space-y-4 font-light">
                            <p><strong className="font-semibold">Risk:</strong> {currentContent.thesis.assetClass.cards.pe.risk}</p>
                            <p><strong className="font-semibold">Returns:</strong> {currentContent.thesis.assetClass.cards.pe.returns}</p>
                            <p><strong className="font-semibold">Model:</strong> {currentContent.thesis.assetClass.cards.pe.model}</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>

        {/* Your Investment Path Section */}
        <section className="py-24 px-6 bg-muted">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4 tracking-tight">{currentContent.thesis.investmentPath.title}</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light mb-12">{currentContent.thesis.investmentPath.description}</p>
                </div>
                
                {/* Investment Tracks */}
                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {currentContent.thesis.investmentPath.tracks.map((track, index) => (
                        <Card key={index} className="text-center flex flex-col bg-background">
                            <CardHeader>
                                <CardTitle className="text-2xl font-bold">{track.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4 flex-grow font-light">
                                <p><strong className="font-semibold">Target:</strong> {track.target}</p>
                                <p><strong className="font-semibold">Equity:</strong> {track.equity}</p>
                                <p><strong className="font-semibold">Returns:</strong> {track.returns}</p>
                                <p className="text-muted-foreground pt-2">{track.profile}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Next Steps & Minimums Card */}
                <div className="max-w-5xl mx-auto mt-12">
                    <Card className="w-full bg-background">
                        <CardHeader className="text-center">
                            <CardTitle className="text-2xl font-bold">{currentContent.thesis.investmentPath.nextSteps.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="grid md:grid-cols-2 gap-8 p-8">
                            <div>
                                <h3 className="font-semibold mb-4 text-lg">{currentContent.thesis.investmentPath.nextSteps.steps.title}</h3>
                                <ol className="space-y-4 font-light">
                                    {currentContent.thesis.investmentPath.nextSteps.steps.items.map((item, index) => (
                                        <li key={index} className="flex items-start"><div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm mr-3 flex-shrink-0">{index + 1}</div><span>{item}</span></li>
                                    ))}
                                </ol>
                            </div>
                            <div>
                                <h3 className="font-semibold mb-4 text-lg">{currentContent.thesis.investmentPath.nextSteps.minimums.title}</h3>
                                <ul className="space-y-3 font-light">
                                    {currentContent.thesis.investmentPath.nextSteps.minimums.items.map((item, index) => (
                                        <li key={index}><strong className="font-semibold">{item.investor}:</strong> {item.amount}</li>
                                    ))}
                                </ul>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>

        {/* Contact CTA Section */}
        <section className="py-24 bg-background">
            <div className="container mx-auto px-6 text-center max-w-4xl">
                <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4 tracking-tight">{currentContent.thesis.contact.title}</h2>
                <p className="text-lg text-muted-foreground mx-auto mb-10">
                    {currentContent.thesis.contact.description}
                </p>
                
                <Card className="max-w-md mx-auto bg-muted p-8 text-center">
                    <h3 className="text-3xl font-bold">{currentContent.thesis.contact.card.name}</h3>
                    <p className="text-xl text-muted-foreground mt-1">{currentContent.thesis.contact.card.title}</p>
                    <div className="mt-4 space-y-1">
                        <a href={`mailto:${currentContent.thesis.contact.card.email}`} className="block text-lg text-primary hover:underline">{currentContent.thesis.contact.card.email}</a>
                        <a href="https://www.linkedin.com/in/santiagosaenzariza/" target="_blank" rel="noopener noreferrer" className="block text-lg text-primary hover:underline">{currentContent.thesis.contact.card.linkedin}</a>
                    </div>
                    <Button size="lg" asChild className="font-mono text-lg px-8 py-6 mt-8">
                        <a href="https://calendar.app.google/SiEUYfD4xmSU61Aj7" target="_blank" rel="noopener noreferrer">{currentContent.thesis.contact.card.cta}</a>
                    </Button>
                </Card>
            </div>
        </section>
      </main>

      <Footer content={currentContent.footer} />
    </div>
  );
};

export default Thesis;
