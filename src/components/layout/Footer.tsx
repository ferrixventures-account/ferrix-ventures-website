import React from 'react';

interface FooterProps {
  content: {
    rights: string;
  };
}

const Footer: React.FC<FooterProps> = ({ content }) => {
  return (
    <footer className="py-8 px-6 bg-background border-t border-border">
      <div className="container mx-auto max-w-6xl text-center">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <span className="font-bold text-foreground font-mono">FERRIX VENTURES</span>
        </div>
        <div className="flex flex-col items-center gap-2 mb-4">
          <a href="https://www.linkedin.com/company/ferrix/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors hover:underline font-mono text-sm">LinkedIn</a>
          <a href="mailto:Hello@ferrix.ventures" className="text-muted-foreground hover:text-foreground transition-colors hover:underline font-mono text-sm">Hello@ferrix.ventures</a>
        </div>
        
        <p className="text-xs text-muted-foreground mt-2 font-mono">
          © 2025 Ferrix Ventures. {content.rights}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
