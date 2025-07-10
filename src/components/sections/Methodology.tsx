import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface MethodologyProps {
  content: {
    title: string;
    subtitle: string;
    partnership: {
      title: string;
      subtitle: string;
      description: string;
      equity: string;
    };
    acquisition: {
      title: string;
      subtitle: string;
      description: string;
      equity: string;
    };
  };
  cta: {
    apply: string;
  };
}

const Methodology: React.FC<MethodologyProps> = ({ content, cta }) => {
  return (
        <section id="methodology" className="py-24 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-20 animate-fade-in-up">
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
            {content.title}
          </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light">
            {content.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Partnership Acceleration */}
                    <Card className="flex flex-col justify-between h-full bg-muted">
            <CardHeader>
                            <Badge variant="secondary" className="w-fit font-mono text-xs">TRACK 1</Badge>
                            <CardTitle className="text-2xl text-foreground font-mono">{content.partnership.title}</CardTitle>
              <CardDescription className="text-muted-foreground text-base font-light">
                {content.partnership.subtitle}
              </CardDescription>
              <p className="text-sm text-muted-foreground font-normal mt-2">
                {content.partnership.description}
              </p>
            </CardHeader>
            <CardContent>
              <div className="bg-muted p-4 rounded-lg">
                <p className="text-sm text-foreground font-mono"><strong>Equity:</strong> {content.partnership.equity}</p>
              </div>
              <a href="https://wa.me/14242160643" target="_blank" rel="noopener noreferrer">
                <Button className="bg-black dark:bg-white text-white dark:text-black w-full mt-6 hover:bg-gray-800 dark:hover:bg-gray-200">{cta.apply}</Button>
              </a>
            </CardContent>
          </Card>

          {/* Acquisition Acceleration */}
                    <Card className="flex flex-col justify-between h-full bg-muted">
            <CardHeader>
                            <Badge variant="secondary" className="w-fit font-mono text-xs">TRACK 2</Badge>
                            <CardTitle className="text-2xl text-foreground font-mono">{content.acquisition.title}</CardTitle>
              <CardDescription className="text-muted-foreground text-base font-light">
                {content.acquisition.subtitle}
              </CardDescription>
              <p className="text-sm text-muted-foreground font-normal mt-2">
                {content.acquisition.description}
              </p>
            </CardHeader>
            <CardContent>
              <div className="bg-muted p-4 rounded-lg">
                <p className="text-sm text-foreground font-mono"><strong>Equity:</strong> {content.acquisition.equity}</p>
              </div>
              <a href="https://wa.me/14242160643" target="_blank" rel="noopener noreferrer">
                <Button className="bg-black dark:bg-white text-white dark:text-black w-full mt-6 hover:bg-gray-800 dark:hover:bg-gray-200">{cta.apply}</Button>
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Methodology;
