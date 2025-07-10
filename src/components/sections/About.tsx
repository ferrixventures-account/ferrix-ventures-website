import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface AboutProps {
  aboutContent: {
    title: string;
    founder: string;
    role: string;
  };
  ctaContent: {
    talentTitle: string;
    talentDescLong: string;
    talentButton: string;
  };
}

const About: React.FC<AboutProps> = ({ aboutContent, ctaContent }) => {
  return (
    <section id="about" className="py-24 px-6 bg-white dark:bg-black">
      <div className="container mx-auto max-w-4xl">
                <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
            {aboutContent.title}
          </h2>
        </div>

                <Card className="bg-muted/50 animate-fade-in-up">
          <CardHeader className="text-center flex flex-col items-center">
            <div className="w-28 h-28 rounded-full overflow-hidden bg-muted mb-6 shadow-none">
              <img 
                src="/Santiago Saenz Ariza.png" 
                alt="Santiago Sáenz Ariza" 
                className="object-cover w-full h-full rounded-full border border-border"
                width={112}
                height={112}
              />
            </div>
            <CardTitle className="text-2xl text-foreground font-mono font-extrabold mb-2">{aboutContent.founder}</CardTitle>
                        <CardDescription className="text-base text-muted-foreground font-medium font-mono mb-2">
              {aboutContent.role}
            </CardDescription>
            <div className="flex flex-col items-center gap-2 mb-2 mt-8">
              <a href="mailto:santiago@ferrix.ventures.com" className="hover:underline text-foreground font-mono text-sm mb-1">santiago@ferrix.ventures.com</a>
              <a href="https://www.linkedin.com/in/santiagosaenzariza/" target="_blank" rel="noopener noreferrer" className="hover:underline text-primary font-mono text-sm">LinkedIn</a>
            </div>
          </CardHeader>
          <CardContent>
          </CardContent>
        </Card>
        {/* Recruiting CTA Card */}
                <Card className="bg-muted/50 animate-fade-in-up mt-8">
          <CardHeader className="text-center flex flex-col items-center">
            <CardTitle className="text-2xl text-foreground font-mono font-extrabold mb-2">{ctaContent.talentTitle}</CardTitle>
            <CardDescription className="text-base text-foreground font-mono opacity-80 mb-4">
              {ctaContent.talentDescLong}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <a href="https://wa.me/14242160643" target="_blank" rel="noopener noreferrer">
                            <Button className="w-full" size="lg">{ctaContent.talentButton}</Button>
            </a>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;
