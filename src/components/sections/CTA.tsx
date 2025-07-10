import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface CTAProps {
  content: {
    investorTitle: string;
    investorDesc: string;
    investorSubDesc: string;
    investorButton: string;
  };
}

const CTA: React.FC<CTAProps> = ({ content }) => {
  return (
    <section id="contact" className="py-24 px-6 bg-black dark:bg-white">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white dark:text-black mb-6 tracking-tight animate-fade-in-up">
            {content.investorTitle.split('\n').map((line, idx) => (
              <React.Fragment key={idx}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </h2>
          <p className="text-lg md:text-xl text-gray-400 dark:text-gray-500 font-light max-w-2xl mx-auto">
            {content.investorDesc}
          </p>
        </div>
        <div className="flex justify-center">
          <Card className="bg-black dark:bg-white w-full max-w-[28rem] pt-8 pb-4 px-6">
            <CardContent className="space-y-4">
              <p className="text-white dark:text-black text-base font-mono">
                {content.investorSubDesc}
              </p>
              <a href="https://wa.me/14242160643" target="_blank" rel="noopener noreferrer" className="block mt-6">
                <Button className="w-full font-mono text-lg">
                  {content.investorButton}
                </Button>
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CTA;
