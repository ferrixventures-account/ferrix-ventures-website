import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface InvestorsProps {
  content: {
    investorTitle: string;
    investorDesc: string;
    investorSubDesc: string;
    investorButton: string;
  };
}

const Investors: React.FC<InvestorsProps> = ({ content }) => {
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
          <p className="text-lg text-gray-400 dark:text-gray-500 font-light max-w-2xl mx-auto">
            {content.investorDesc}
          </p>
          <div className="mt-8">
            <a href="https://wa.me/14242160643" target="_blank" rel="noopener noreferrer">
              <Button className="font-mono text-lg px-8 py-6 bg-white text-black dark:bg-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-800">
                {content.investorButton}
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Investors;
