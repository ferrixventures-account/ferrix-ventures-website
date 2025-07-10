import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface RedefiningProps {
  content: {
    title: string;
    description: string;
    cards: {
      title: string;
      subtitle: string;
      desc: string;
    }[];
  };
}

const Redefining: React.FC<RedefiningProps> = ({ content }) => {
  return (
        <section id="redefining" className="py-24 px-6 bg-muted">
      <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
            {content.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-light">
            {content.description}
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-10">
          {content.cards.map((card, idx) => (
                        <Card key={idx} className="text-center">
              <CardHeader className="p-10">
                <CardTitle className="text-2xl md:text-3xl font-extrabold text-foreground mb-2">{card.title}</CardTitle>
                                <CardDescription className="text-lg md:text-xl font-bold uppercase text-muted-foreground mb-4 tracking-wide">{card.subtitle}</CardDescription>
              </CardHeader>
              <CardContent className="px-10 pb-10">
                <p className="text-base text-muted-foreground font-mono">{card.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Redefining;
