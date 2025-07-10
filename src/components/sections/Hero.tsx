import React from 'react';
import { Button } from '@/components/ui/button';

interface HeroProps {
  content: {
    headline: string;
    subheadline: string;
    cta: string;
  };
  scrollTo: (id: string) => void;
}

const Hero: React.FC<HeroProps> = ({ content, scrollTo }) => {
  return (
    <section className="relative h-screen flex items-center justify-center text-center bg-white dark:bg-black">
      <div className="relative z-10 max-w-4xl mx-auto px-4 animate-fade-in-up">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 leading-tight text-black dark:text-white">
          {content.headline}
        </h1>
        <p className="text-lg text-black/80 dark:text-white/80 mb-8 max-w-2xl mx-auto">
          {content.subheadline}
        </p>
        <Button size="lg" onClick={() => scrollTo('methodology')} className="bg-primary hover:bg-primary/90 text-primary-foreground">
          {content.cta}
        </Button>
      </div>
    </section>
  );
};

export default Hero;
