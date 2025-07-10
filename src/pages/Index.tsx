import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Sun, Moon, Monitor, ArrowRight, Globe, TrendingUp, Zap, Users, Target, Star, CheckCircle, ExternalLink, Menu, X, BarChart3, DollarSign, Building2, ChevronDown } from 'lucide-react';
import { useTheme } from 'next-themes';

import { useNavigate, useLocation } from "react-router-dom";

interface IndexProps {
  forcedLanguage?: string;
}

const Index: React.FC<IndexProps> = ({ forcedLanguage }) => {
  const { theme, setTheme } = useTheme();
  const [language, setLanguage] = useState(forcedLanguage || 'en');
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isThemeChanging, setIsThemeChanging] = useState(false);
  const [isLangChanging, setIsLangChanging] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Sync language with forcedLanguage prop
  useEffect(() => {
    if (forcedLanguage && forcedLanguage !== language) {
      setLanguage(forcedLanguage);
    }
  }, [forcedLanguage]);

  const toggleLanguage = () => {
    setIsLangChanging(true);
    setTimeout(() => {
      const newLang = language === 'es' ? 'en' : 'es';
      setLanguage(newLang);
      navigate(newLang === 'es' ? '/es' : '/');
      setTimeout(() => setIsLangChanging(false), 75);
    }, 150);
  };

  const toggleTheme = () => {
    setIsThemeChanging(true);
    setTimeout(() => {
      const themes = ['system', 'light', 'dark'];
      const currentThemeIndex = themes.indexOf(theme || 'system');
      const nextTheme = themes[(currentThemeIndex + 1) % themes.length];
      setTheme(nextTheme);
      setTimeout(() => setIsThemeChanging(false), 75); // Allow new icon to render
    }, 150); // Duration of the exit animation
  };

  const content = {
    es: {
      // Header
      nav: {
        opportunity: 'Oportunidad',
        methodology: 'Tesis',
        about: 'Nosotros',
        contact: 'Invertir'
      },
      
      // Hero Section
      hero: {
        headline: 'Estudio de Aceleración de Ventures con IA',
        subheadline: 'Transformamos negocios tradicionales en líderes digitales con crecimiento exponencial.',
        cta: 'Explora nuestra Tesis'
      },

      // Opportunity Section
      opportunity: {
        title: 'La Oportunidad de $12T',
        subtitle: 'Mientras el VC persigue 500K startups de alto riesgo y 90% tasa de fracaso, 358M negocios establecidos y rentables esperan aceleración exponencial.',
        context: {
          title: 'El Mercado Que VC Ignora',
          description: 'El capital de riesgo fluye hacia startups riesgosas, ignorando el mayor grupo mundial de empresas comprobadas y rentables.',
          marketGap: 'Esta brecha representa la mayor oportunidad de inversión no explotada en la historia moderna: un mercado 10x más grande que el startup ecosystem, con fundamentals probados y necesidad desesperada de transformación digital.',
          timing: 'Con IA democratizando capacidades antes exclusivas de tech giants, ahora es posible acelerar ventures tradicionales hacia crecimiento exponencial a una fracción del costo y riesgo de construir desde cero.'
        },
        stats: {
          smes: {
            number: '358M',
            label: 'SMEs Establecidos',
            desc: 'Negocios rentables globalmente vs 500K startups VC anuales'
          },
          market: {
            number: '$12T+',
            label: 'Valor Bloqueado',
            desc: 'En negocios tradicionales esperando transformación digital'
          },
          success: {
            number: '65%+',
            label: 'Tasa de Éxito',
            desc: 'SMEs rentables vs 10% startups - 6.5x mejor probabilidad'
          },
          gdp: {
            number: '44%',
            label: 'Del PIB Global',
            desc: 'Generado por SMEs vs 3% por startups venture-backed'
          }
        },
        insight: {
          title: 'VC persigue el mercado equivocado',
          problem: 'VC tradicional: 500K startups, 90% failure rate, $300B desperdiciados anualmente',
          solution: 'Venture Acceleration: 358M negocios probados, cash flow validado, PMF confirmado',
          advantage: 'Menor riesgo, 10x mayor escala, returns superiores con fundamentals sólidos'
        },
        whyNow: {
          title: '¿Por Qué Ahora?',
          reasons: [
            'IA democratiza capacidades antes exclusivas de tech giants',
            'SMEs desesperados por transformación digital post-COVID',
            'Brecha masiva entre capital disponible y negocios que lo necesitan',
            'Herramientas de acceleration nunca fueron tan accesibles',
            'Mercado público valora growth sobre profitability - momento perfecto'
          ]
        }
      },

      // Social Media Section
      social: {
        title: 'Síguenos en Redes',
        subtitle: 'Mantente actualizado con insights sobre venture acceleration y el futuro de los negocios.',
        platforms: {
          linkedin: {
            title: 'LinkedIn',
            handle: '@ferrixventures',
            description: 'Insights profesionales sobre aceleración de ventures, análisis de mercado y liderazgo en transformación digital.',
            cta: 'Seguir en LinkedIn'
          },
          instagram: {
            title: 'Instagram',
            handle: '@ferrix.ventures',
            description: 'Detrás de cámaras del primer estudio de aceleración de ventures impulsado por IA, cultura de equipo y momentos clave del recorrido.',
            cta: 'Seguir en Instagram'
          }
        },
        engagement: 'Únete a la conversación sobre el futuro de venture acceleration y comparte tu perspectiva sobre transformación digital.'
      },
      // Redefining Venture Acceleration Section
      redefining: {
        title: 'Redefiniendo la Aceleración de Ventures',
        description: 'Los venture studios tradicionales crean empresas desde cero con 90% de probabilidad de fracaso. Los fondos de private equity optimizan financieramente pero no transforman tecnológicamente. Hay una oportunidad masiva entre estos dos extremos.',
        cards: [
          {
            title: 'IA-Primero',
            subtitle: 'Estudio de Aceleración',
            desc: 'Aceleramos negocios existentes con IA y tecnología avanzada, no creamos empresas nuevas'
          },
          {
            title: 'Estratégico',
            subtitle: 'Despliegue de Capital',
            desc: 'Desplegamos capital para acelerar el crecimiento, no para validar product-market fit'
          },
          {
            title: 'Sistemático',
            subtitle: 'Plataforma de Aceleración',
            desc: 'Metodologías probadas que aceleran ventures de forma predecible y escalable'
          }
        ]
      },

      // Methodology Section
      methodology: {
        title: 'Metodología AI-Powered',
        subtitle: 'Dos rutas de aceleración, una metodología de clase mundial.',
        partnership: {
          title: 'Partnership Acceleration',
          subtitle: 'Mantienes control mayoritario',
          equity: '0-50% equity',
          description: 'Mantén el control mayoritario mientras aceleramos tu crecimiento mediante sistemas impulsados por IA y experiencia estratégica. Perfecto para emprendedores que buscan crecimiento exponencial pero no están listos para una salida total.'
        },
        acquisition: {
          title: 'Acquisition Acceleration', 
          subtitle: 'Máxima aceleración AI-powered',
          equity: '50-100% acquisition',
          description: 'Máxima velocidad y despliegue de capital a través de la propiedad mayoritaria o total. Implementamos estrategias agresivas de aceleración impulsadas por IA sin restricciones de asociación, para emprendedores listos para una salida estratégica.'
        }
      },

      // About
      about: {
        title: 'Nosotros',
        founder: 'Santiago Sáenz Ariza',
        role: 'Founder & Managing Partner',
        vision: '"Venture Acceleration toma lo mejor de ambos mundos: ventures probados + aceleración AI exponencial."'
      },

      // CTA Section
      cta: {
        title: '¿Listo para Aceleración AI?',
        entrepreneurs: 'Entrepreneurs',
        entrepreneursDesc: 'Evalúa si tu venture es ideal para aceleración',
        investors: 'Inversionistas',
        investorsDesc: 'Nueva asset class con mejor risk-return profile',
        talent: 'Talento AI',
        talentDesc: 'Construye la infraestructura de venture acceleration',
        talentTitle: 'Únete a Nuestra Red de Talento AI',
        talentDescLong: 'Ayúdanos a construir el futuro de la aceleración de ventures. Buscamos ingenieros de IA, operadores y constructores digitales.',
        talentButton: 'Únete',
        investorTitle: 'Sé Parte de la\nPróxima Clase de Activos',
        investorDesc: 'Únete a nuestro fondo y participa en la próxima ola de creación de valor impulsada por IA en empresas comprobadas. Diversifica tu portafolio y únete a un grupo selecto de inversionistas visionarios.',
        investorSubDesc: 'Accede a una oportunidad de inversión diferenciada: aceleración AI de compañías establecidas y con flujo de caja.',
        investorButton: 'Aprende cómo invertir',
        apply: 'Aplicar'
      },
      // Footer Section
      footer: {
        rights: 'Todos los derechos reservados.'
      }
    },
    en: {
      // Footer Section
      footer: {
        rights: 'All rights reserved.'
      },
      // Redefining Venture Acceleration Section
      redefining: {
        title: 'Redefining Venture Acceleration',
        description: "Traditional venture studios build companies from scratch with 90% failure probability. Private equity funds optimize financially but don't transform technologically. There's a massive opportunity between these two extremes.",
        cards: [
          {
            title: 'AI-First',
            subtitle: 'Acceleration Studio',
            desc: "We accelerate existing ventures with AI and advanced tech stacks, we don't build new companies"
          },
          {
            title: 'Strategic',
            subtitle: 'Capital Deployment',
            desc: 'We deploy capital to accelerate growth, not to validate product-market fit'
          },
          {
            title: 'Systematic',
            subtitle: 'Acceleration Platform',
            desc: 'Proven methodologies that accelerate ventures predictably and scalably'
          }
        ]
      },
      // Header
      nav: {
        opportunity: 'Opportunity',
        methodology: 'Thesis',
        about: 'About',
        contact: 'Invest'
      },

      // Hero Section
      hero: {
        headline: 'AI-First Venture Acceleration Studio',
        subheadline: 'We transform established ventures into exponential digital leaders.',
        cta: 'Explore our Thesis'
      },

      // Opportunity Section
      opportunity: {
        title: 'The $12T Opportunity',
        subtitle: 'While VC chases 500K startups with 90% failure rate, 358M established businesses with proven cash flow await exponential acceleration.',
        context: {
          title: '',
          description: "Venture capital flows to risky startups, ignoring the world’s largest pool of proven, cash-flowing companies.",
          marketGap: 'This gap represents the largest untapped investment opportunity in modern history: a market 10x larger than the startup ecosystem, with proven fundamentals and desperate need for digital transformation.',
          timing: 'With AI democratizing capabilities once exclusive to tech giants, it\'s now possible to accelerate traditional ventures toward exponential growth at a fraction of the cost and risk of building from scratch.'
        },
        stats: {
          smes: {
            number: '358M',
            label: 'Established SMEs',
            desc: 'Profitable businesses globally vs 500K VC startups annually'
          },
          market: {
            number: '$12T+',
            label: 'Value Locked',
            desc: 'In traditional businesses awaiting digital transformation'
          },
          success: {
            number: '65%+',
            label: 'Success Rate',
            desc: 'Profitable SMEs vs 10% startups - 6.5x better probability'
          },
          gdp: {
            number: '44%',
            label: 'Of Global GDP',
            desc: 'Generated by SMEs vs 3% by venture-backed startups'
          }
        },
        insight: {
          title: 'VC is chasing the wrong market',
          problem: 'Traditional VC: 500K startups, 90% failure rate, $300B wasted annually',
          solution: 'Venture Acceleration: 358M proven businesses, validated cash flow, confirmed PMF',
          advantage: 'Lower risk, 10x greater scale, superior returns with solid fundamentals'
        },
        whyNow: {
          title: 'Why Now?',
          reasons: [
            'AI democratizes capabilities once exclusive to tech giants',
            'SMEs desperate for digital transformation post-COVID',
            'Massive gap between available capital and businesses that need it',
            'Acceleration tools have never been more accessible',
            'Public markets value growth over profitability - perfect timing'
          ]
        }
      },

      // Social Media Section
      social: {
        title: 'Follow Us',
        subtitle: 'Stay updated with insights on venture acceleration and the future of business.',
        platforms: {
          linkedin: {
            title: 'LinkedIn',
            handle: '@ferrixventures',
            description: 'Professional insights on venture acceleration, market analysis and thought about in digital transformation.',
            cta: 'Follow on LinkedIn'
          },
          instagram: {
            title: 'Instagram',
            handle: '@ferrix.ventures',
            description: 'Behind-the-scenes of the first AI-first Venture Acceleration Studio, about culture and journey moments.',
            cta: 'Follow on Instagram'
          }
        },
        engagement: 'Join the conversation about the future of venture acceleration and share your perspective on digital transformation.'
      },

      // Methodology Section
      methodology: {
        title: 'AI-Powered Methodology',
        subtitle: 'Two acceleration paths, one world-class methodology.',
        partnership: {
          title: 'Partnership Acceleration',
          subtitle: 'You maintain majority control',
          equity: '0-50% equity',
          description: 'Maintain majority control while we accelerate your growth with AI-powered systems and strategic expertise. Perfect for entrepreneurs seeking exponential growth but not yet ready for a full exit.'
        },
        acquisition: {
          title: 'Acquisition Acceleration',
          subtitle: 'Maximum AI-powered acceleration',
          equity: '50-100% acquisition',
          description: 'Maximum speed and capital deployment through majority or full ownership. We implement aggressive AI-powered acceleration strategies without partnership constraints for entrepreneurs ready for a strategic exit.'
        }
      },

      // About
      about: {
        title: 'About',
        founder: 'Santiago Sáenz Ariza',
        role: 'Founder & Managing Partner',
        vision: '"Venture Acceleration takes the best of both worlds: proven ventures + AI exponential acceleration."'
      },

      // CTA Section
      cta: {
        title: 'Ready for AI Acceleration?',
        entrepreneurs: 'Entrepreneurs',
        entrepreneursDesc: 'See if your venture is ideal for acceleration',
        investors: 'Investors',
        investorsDesc: 'A new asset class with a better risk-return profile',
        talent: 'AI Talent',
        talentDesc: 'Build the infrastructure for venture acceleration',
        talentTitle: 'Join Our AI Talent Network',
        talentDescLong: 'Help us build the future of venture acceleration. We’re looking for AI engineers, operators, and digital builders.',
        talentButton: 'Join Us',
        investorTitle: 'Be Part of the\nNext Asset Class',
        investorDesc: 'Join our fund and be part of the next wave of AI-powered value creation in proven businesses. Diversify your portfolio and join a select group of forward-thinking investors.',
        investorSubDesc: 'Access a differentiated investment opportunity: AI-powered acceleration of established, cash-flowing companies.',
        investorButton: 'Learn how to invest',
        apply: 'Apply'
      }
    }
  };

  const currentContent = content[language];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-500 bg-background/80 backdrop-blur border-b border-border ${
        scrollY > 50 ? 'bg-background/90 backdrop-blur-md border-b border-border/50' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#home" className="flex items-center group">
              <img 
                src="/Logos - 281x132 - Ferrix Ventures.png" 
                alt="Ferrix Ventures Logo" 
                className="h-10 w-auto transition-transform duration-300 group-hover:scale-110"
              />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#opportunity" className="text-sm font-mono text-muted-foreground hover:text-foreground transition-colors duration-300">
                {currentContent.nav.opportunity}
              </a>
              <a href="#redefining" className="text-sm font-mono text-muted-foreground hover:text-foreground transition-colors duration-300">
                {currentContent.nav.methodology}
              </a>
              <a href="#about" className="text-sm font-mono text-muted-foreground hover:text-foreground transition-colors duration-300">
                {currentContent.nav.about}
              </a>
              <a href="#contact" className="text-sm font-mono text-muted-foreground hover:text-foreground transition-colors duration-300">
                {currentContent.nav.contact}
              </a>
            </nav>

            {/* Action Buttons */}
            <div className="hidden md:flex items-center space-x-2">
              {/* Language Toggle */}
              <Button variant="ghost" size="icon" onClick={toggleLanguage} className="text-xs font-mono relative w-9 h-9">
                <span className={`absolute transition-all duration-150 ${isLangChanging ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}`}>
                  {language === 'es' ? 'EN' : 'ES'}
                </span>
              </Button>

              {/* Theme Toggle Button */}
              <Button variant="ghost" size="icon" onClick={toggleTheme} className="relative w-9 h-9">
                <span className="sr-only">Toggle theme</span>
                {theme === 'light' && <Sun className={`absolute h-[1.2rem] w-[1.2rem] transition-all duration-150 ${isThemeChanging ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'}`} />}
                {theme === 'dark' && <Moon className={`absolute h-[1.2rem] w-[1.2rem] transition-all duration-150 ${isThemeChanging ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'}`} />}
                {theme === 'system' && <Monitor className={`absolute h-[1.2rem] w-[1.2rem] transition-all duration-150 ${isThemeChanging ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'}`} />}
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2"
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border/50 py-4 px-6 space-y-4">
              <a href="#opportunity" className="block text-sm font-mono text-muted-foreground hover:text-foreground">{currentContent.nav.opportunity}</a>
              <a href="#redefining" className="block text-sm font-mono text-muted-foreground hover:text-foreground">{currentContent.nav.methodology}</a>
              <a href="#about" className="block text-sm font-mono text-muted-foreground hover:text-foreground">{currentContent.nav.about}</a>
              <a href="#contact" className="block text-sm font-mono text-muted-foreground hover:text-foreground">{currentContent.nav.contact}</a>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden bg-background">
        <div className="absolute inset-0 bg-gradient-to-br from-background to-background"></div>
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <div className="animate-slide-up">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-8 leading-tight tracking-tight">
              {currentContent.hero.headline}
            </h1>
          </div>
          <div className="animate-slide-up stagger-1">
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed font-light">
              {currentContent.hero.subheadline}
            </p>
          </div>
          <div className="animate-slide-up stagger-2 flex justify-center">
            <a href="#redefining" className="group">
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/80 px-8 py-4 text-lg font-mono transition-all duration-300 hover:scale-105 flex items-center"
              >
                {currentContent.hero.cta}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </a>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-6 w-6 text-muted-foreground" />
        </div>
      </section>

      {/* Opportunity Section */}
      <section id="opportunity" className="py-24 px-6 bg-white dark:bg-black">
        <div className="container mx-auto max-w-5xl px-4 md:px-12 lg:px-24">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-5xl font-extrabold text-black dark:text-white mb-4 tracking-tight">{currentContent.opportunity.title}</h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-light mb-0">
              {currentContent.opportunity.subtitle}
            </p>
          </div>

        </div>

        {/* Key Statistics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mt-20 px-2 md:px-10 lg:px-24 xl:px-40">
          {Object.entries(currentContent.opportunity.stats).map(([key, stat], index) => {
            const s = stat as { number: string; label: string; desc: string };
            return (
              <Card key={key} className="text-center transition-all duration-500 bg-muted/50 dark:bg-white/5 border border-border dark:border-white/10 rounded-2xl shadow-sm dark:backdrop-blur-sm hover:shadow-xl hover:border-foreground/50 dark:hover:border-white/40">
                <CardHeader className="pb-4">
                  <CardTitle className="text-4xl font-extrabold text-foreground font-mono mb-2 tracking-tight">{s.number}</CardTitle>
                  <CardDescription className="text-muted-foreground font-semibold text-sm uppercase tracking-widest">{s.label}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-muted-foreground font-mono leading-relaxed">{s.desc}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
        <div className="flex flex-col items-center text-center mt-20 mb-4 px-2 md:px-10 lg:px-32 xl:px-56">
          <p className="text-lg md:text-2xl text-black dark:text-white font-bold mb-4 max-w-3xl">
            {currentContent.opportunity.context.description}
          </p>
        </div>

        {/* Market Context - Integrated */}
        <div className="mt-20 mb-4 flex flex-col items-center text-center px-2 md:px-10 lg:px-32 xl:px-56">
          <h3 className="text-3xl md:text-5xl font-extrabold text-foreground mb-6 tracking-tight leading-tight">
            
          </h3>
        </div>
      </section>

      {/* Redefining Venture Acceleration Section */}
      <section id="redefining" className="py-24 px-6 bg-muted/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
              {currentContent.redefining.title}
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-light">
              {currentContent.redefining.description}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {currentContent.redefining.cards.map((card, idx) => (
              <Card key={idx} className="text-center transition-all duration-500 bg-muted/50 dark:bg-white/5 border border-border dark:border-white/10 rounded-2xl shadow-sm dark:backdrop-blur-sm hover:shadow-xl hover:border-foreground/50 dark:hover:border-white/40">
                <CardHeader className="p-10">
                  <CardTitle className="text-2xl md:text-3xl font-extrabold text-foreground mb-2">{card.title}</CardTitle>
                  <CardDescription className="text-lg md:text-xl font-bold uppercase text-foreground mb-4 tracking-wide">{card.subtitle}</CardDescription>
                </CardHeader>
                <CardContent className="px-10 pb-10">
                  <p className="text-base text-muted-foreground font-mono">{card.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section id="methodology" className="py-24 px-6 bg-white dark:bg-black">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-20 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-6 tracking-tight">
              {currentContent.methodology.title}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-light">
              {currentContent.methodology.subtitle}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Partnership Acceleration */}
            <Card className="transition-all duration-500 flex flex-col justify-between h-full bg-muted/50 dark:bg-white/5 border border-border dark:border-white/10 rounded-2xl shadow-sm dark:backdrop-blur-sm hover:shadow-xl hover:border-foreground/50 dark:hover:border-white/40">
              <CardHeader>
                <Badge className="w-fit bg-black dark:bg-white text-white dark:text-black font-mono text-xs">TRACK 1</Badge>
                <CardTitle className="text-2xl text-black dark:text-white font-mono">{currentContent.methodology.partnership.title}</CardTitle>
                <CardDescription className="text-muted-foreground text-base font-light">
                  {currentContent.methodology.partnership.subtitle}
                </CardDescription>
                <p className="text-sm text-muted-foreground font-normal mt-2">
                  {currentContent.methodology.partnership.description}
                </p>
              </CardHeader>
              <CardContent>
                <div className="bg-muted p-4 rounded-lg">
                  <p className="text-sm text-foreground font-mono"><strong>Equity:</strong> {currentContent.methodology.partnership.equity}</p>
                </div>
                <a href="https://wa.me/14242160643" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-black dark:bg-white text-white dark:text-black w-full mt-6 hover:bg-gray-800 dark:hover:bg-gray-200">{currentContent.cta.apply}</Button>
                </a>
              </CardContent>
            </Card>

            {/* Acquisition Acceleration */}
            <Card className="transition-all duration-500 flex flex-col justify-between h-full bg-muted/50 dark:bg-white/5 border border-border dark:border-white/10 rounded-2xl shadow-sm dark:backdrop-blur-sm hover:shadow-xl hover:border-foreground/50 dark:hover:border-white/40">
              <CardHeader>
                <Badge className="w-fit bg-black dark:bg-white text-white dark:text-black font-mono text-xs">TRACK 2</Badge>
                <CardTitle className="text-2xl text-black dark:text-white font-mono">{currentContent.methodology.acquisition.title}</CardTitle>
                <CardDescription className="text-muted-foreground text-base font-light">
                  {currentContent.methodology.acquisition.subtitle}
                </CardDescription>
                <p className="text-sm text-muted-foreground font-normal mt-2">
                  {currentContent.methodology.acquisition.description}
                </p>
              </CardHeader>
              <CardContent>
                <div className="bg-muted p-4 rounded-lg">
                  <p className="text-sm text-foreground font-mono"><strong>Equity:</strong> {currentContent.methodology.acquisition.equity}</p>
                </div>
                <a href="https://wa.me/14242160643" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-black dark:bg-white text-white dark:text-black w-full mt-6 hover:bg-gray-800 dark:hover:bg-gray-200">{currentContent.cta.apply}</Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-background">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-20 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
              {currentContent.about.title}
            </h2>
          </div>

          <Card className="glass-card border-border bg-card/80 backdrop-blur-lg rounded-2xl animate-scale-in transition-all duration-300 hover:shadow-xl hover:scale-105">
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
              <CardTitle className="text-3xl text-foreground font-mono font-extrabold mb-2">{currentContent.about.founder}</CardTitle>
              <CardDescription className="text-lg text-foreground font-medium font-mono opacity-80 mb-2">
                {currentContent.about.role}
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
            <Card className="glass-card border-border bg-card/80 backdrop-blur-lg rounded-2xl mt-8 animate-scale-in transition-all duration-300 hover:shadow-xl hover:scale-105">
              <CardHeader className="text-center flex flex-col items-center">
                <CardTitle className="text-2xl text-foreground font-mono font-extrabold mb-2">{currentContent.cta.talentTitle}</CardTitle>
                <CardDescription className="text-base text-foreground font-mono opacity-80 mb-4">
                  {currentContent.cta.talentDescLong}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <a href="https://wa.me/14242160643" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/80 font-mono text-lg">{currentContent.cta.talentButton}</Button>
                </a>
              </CardContent>
            </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 px-6 bg-black dark:bg-white">
  <div className="container mx-auto max-w-4xl">
    <div className="text-center mb-12">
      <h2 className="text-4xl md:text-5xl font-bold text-white dark:text-black mb-6 tracking-tight animate-slide-up">
        {currentContent.cta.investorTitle.split('\n').map((line, idx) => (
          <React.Fragment key={idx}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </h2>
      <p className="text-lg md:text-xl text-gray-300 dark:text-gray-600 font-light max-w-2xl mx-auto">
        {currentContent.cta.investorDesc}
      </p>
    </div>
    <div className="flex justify-center">
      <Card className="bg-black dark:bg-white border border-gray-800 dark:border-gray-300 animate-scale-in transition-all duration-500 w-full max-w-[28rem] pt-8 pb-4 px-6 hover:shadow-xl hover:border-foreground/50 dark:hover:border-black/40">
        
        <CardContent className="space-y-4">
          <p className="text-gray-300 dark:text-gray-700 text-base font-mono">
            {currentContent.cta.investorSubDesc}
          </p>
          <a href="https://wa.me/14242160643" target="_blank" rel="noopener noreferrer" className="block mt-6">
            <Button className="w-full bg-white text-black hover:bg-gray-200 dark:bg-black dark:text-white dark:hover:bg-gray-800 font-mono text-lg">
              {currentContent.cta.investorButton}
            </Button>
          </a>
        </CardContent>
      </Card>
    </div>
  </div>
</section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-background border-t border-border">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <span className="font-bold text-foreground font-mono">FERRIX VENTURES</span>
          </div>
          <div className="flex flex-col items-center gap-2 mb-4">
            <a href="https://www.linkedin.com/company/ferrix/" target="_blank" rel="noopener noreferrer" className="hover:underline text-primary font-mono text-sm">LinkedIn</a>
            <a href="mailto:Hello@ferrix.ventures" className="hover:underline text-foreground font-mono text-sm">Hello@ferrix.ventures</a>
          </div>
          
          <p className="text-xs text-muted-foreground mt-2 font-mono">
            © 2025 Ferrix Ventures. {currentContent.footer.rights}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;