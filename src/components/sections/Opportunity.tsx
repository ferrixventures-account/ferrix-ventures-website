import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface OpportunityProps {
  content: {
    title: string;
    subtitle: string;
    stats: {
      [key: string]: {
        number: string;
        label: string;
        desc: string;
      };
    };
    context: {
      description: string;
    };
  };
}

const Opportunity: React.FC<OpportunityProps> = ({ content }) => {
  return (
    <section id="opportunity" className="py-24 px-6 bg-white dark:bg-black">
      <div className="container mx-auto max-w-5xl px-4 md:px-12 lg:px-24">
                <div className="text-center mb-16 animate-fade-in-up">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4 tracking-tight">{content.title}</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light mb-0">
            {content.subtitle}
          </p>
        </div>
      </div>

      {/* Key Statistics */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mt-20 px-2 md:px-10 lg:px-24 xl:px-40">
        {Object.entries(content.stats).map(([key, stat]) => {
          const s = stat as { number: string; label: string; desc: string };
          return (
                        <Card key={key} className="text-center bg-muted">
              <CardHeader className="pb-4">
                <CardTitle className="text-3xl font-extrabold text-foreground font-mono mb-2 tracking-tight">{s.number}</CardTitle>
                <CardDescription className="text-muted-foreground font-semibold text-sm uppercase tracking-widest">{s.label}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground font-mono leading-relaxed">{s.desc}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
      <div className="flex flex-col items-center text-center mt-16 mb-4 px-2 md:px-10 lg:px-32 xl:px-56">
        <p className="text-lg text-black dark:text-white font-bold mb-4 max-w-3xl">
          {content.context.description}
        </p>
      </div>
    </section>
  );
};

export default Opportunity;
