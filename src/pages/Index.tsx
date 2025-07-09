import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, Globe, TrendingUp, Zap, Users, Target, Star, CheckCircle, ExternalLink, Menu, X, BarChart3, DollarSign, Building2, ChevronDown } from 'lucide-react';

import { useNavigate, useLocation } from "react-router-dom";

interface IndexProps {
  forcedLanguage?: string;
}

const Index: React.FC<IndexProps> = ({ forcedLanguage }) => {
  const [language, setLanguage] = useState(forcedLanguage || 'en');
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

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
    const newLang = language === 'es' ? 'en' : 'es';
    setLanguage(newLang);
    navigate(newLang === 'es' ? '/es' : '/');
  };


  const content = {
    es: {
      // Header
      nav: {
        opportunity: 'Oportunidad',
        methodology: 'Tesis',
        about: 'Nosotros',
        contact: 'Contacto'
      },
      
      // Hero Section
      hero: {
        headline: 'AI-First Venture Acceleration Studio',
        subheadline: 'Transformamos ventures establecidos en líderes digitales exponenciales.',
        cta: 'Explorar Metodología'
      },

      // Opportunity Section
      opportunity: {
        title: 'La Oportunidad de $12T',
        subtitle: 'Mientras VC persigue 500K startups con 90% failure rate, 358M negocios establecidos con cash flow probado esperan aceleración exponencial.',
        context: {
          title: 'El Mercado Que VC Ignora',
          description: 'Existe una desconexión masiva entre donde fluye el capital de riesgo y donde está la verdadera oportunidad de crecimiento. Mientras fondos VC invierten $300B anuales en startups con 90% probabilidad de fracaso, 358 millones de SMEs rentables generan $12+ trillones en valor pero carecen de acceso a aceleración tecnológica de clase mundial.',
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
            description: 'Insights profesionales sobre venture acceleration, market analysis y thought about en transformación digital.',
            cta: 'Seguir en LinkedIn'
          },
          instagram: {
            title: 'Instagram',
            handle: '@ferrix.ventures',
            description: 'Behind-the-scenes del primer AI-first Venture Acceleration Studio, cultura de equipo y momentos del journey.',
            cta: 'Seguir en Instagram'
          }
        },
        engagement: 'Únete a la conversación sobre el futuro de venture acceleration y comparte tu perspectiva sobre transformación digital.'
      },

      // Methodology Section
      methodology: {
        title: 'Metodología AI-Powered',
        subtitle: 'Dos rutas de aceleración, una metodología de clase mundial.',
        partnership: {
          title: 'Partnership Acceleration',
          subtitle: 'Mantienes control mayoritario',
          equity: '0-50% equity',
          description: 'Mantén majority control mientras aceleramos tu growth mediante AI-powered systems y strategic expertise. Perfecto para entrepreneurs que quieren exponential growth pero no están listos para full exit.'
        },
        acquisition: {
          title: 'Acquisition Acceleration', 
          subtitle: 'Máxima aceleración AI-powered',
          equity: '50-100% acquisition',
          description: 'Maximum speed y capital deployment through majority/full ownership. Implementamos aggressive AI-powered acceleration strategies sin partnership constraints para entrepreneurs listos para strategic exit.'
        }
      },

      // About
      about: {
        title: 'Liderazgo',
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
        talentDesc: 'Construye la infraestructura de venture acceleration'
      }
    },
    en: {
      // Header
      nav: {
        opportunity: 'Opportunity',
        methodology: 'Thesis',
        about: 'About',
        contact: 'Contact'
      },

      // Hero Section
      hero: {
        headline: 'AI-First Venture Acceleration Studio',
        subheadline: 'We transform established ventures into exponential digital leaders.',
        cta: 'Explore Methodology'
      },

      // Opportunity Section
      opportunity: {
        title: 'The $12T Opportunity',
        subtitle: 'While VC chases 500K startups with 90% failure rate, 358M established businesses with proven cash flow await exponential acceleration.',
        context: {
          title: '',
          description: 'There\'s a massive disconnect between where venture capital flows and where the real growth opportunity lies. While VC funds invest $300B annually in startups with 90% probability of failure, 358 million profitable SMEs generate $12+ trillion in value but lack access to world-class technological acceleration.',
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
        entrepreneursDesc: 'Evaluate if your venture is ideal for acceleration',
        investors: 'Investors',
        investorsDesc: 'New asset class with better risk-return profile',
        talent: 'AI Talent',
        talentDesc: 'Build the venture acceleration infrastructure'
      }
    }
  };

  const currentContent = content[language];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrollY > 50 ? 'bg-white/90 backdrop-blur-md border-b border-gray-200/50' : 'bg-transparent'
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
              <a href="#opportunity" className="text-sm font-mono text-muted-foreground hover:text-black transition-colors duration-300">
                {currentContent.nav.opportunity}
              </a>
              <a href="#redefining" className="text-sm font-mono text-muted-foreground hover:text-black transition-colors duration-300">
                {currentContent.nav.methodology}
              </a>
              <a href="#about" className="text-sm font-mono text-muted-foreground hover:text-black transition-colors duration-300">
                {currentContent.nav.about}
              </a>
              <a href="#contact" className="text-sm font-mono text-muted-foreground hover:text-black transition-colors duration-300">
                {currentContent.nav.contact}
              </a>
            </nav>

            {/* Language Toggle */}
            <div className="hidden md:flex items-center space-x-4">
              <button
                onClick={toggleLanguage}
                className="text-xs font-mono px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 transition-all duration-300"
              >
                {language === 'es' ? 'EN' : 'ES'}
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden flex items-center space-x-2">
              <button
                onClick={toggleLanguage}
                className="text-xs font-mono px-2 py-1 border border-gray-300 rounded"
              >
                {language === 'es' ? 'EN' : 'ES'}
              </button>
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
            <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-200/50 py-4 px-6 space-y-4">
              <a href="#opportunity" className="block text-sm font-mono text-muted-foreground hover:text-black">{currentContent.nav.opportunity}</a>
              <a href="#redefining" className="block text-sm font-mono text-muted-foreground hover:text-black">{currentContent.nav.methodology}</a>
              <a href="#about" className="block text-sm font-mono text-muted-foreground hover:text-black">{currentContent.nav.about}</a>
              <a href="#contact" className="block text-sm font-mono text-muted-foreground hover:text-black">{currentContent.nav.contact}</a>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white"></div>
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <div className="animate-slide-up">
            <h1 className="text-5xl md:text-7xl font-bold text-black mb-8 leading-tight tracking-tight">
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
                className="bg-black text-white hover:bg-gray-800 px-8 py-4 text-lg font-mono transition-all duration-300 hover:scale-105 flex items-center"
              >
                Our Thesis
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
      <section id="opportunity" className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-5xl px-4 md:px-12 lg:px-24">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-5xl font-extrabold text-black mb-4 tracking-tight">The $12T Opportunity</h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-light mb-0">
              358M established, profitable businesses are waiting for exponential acceleration—while VC chases 500K high-risk startups.
            </p>
          </div>

        </div>

        {/* Key Statistics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mt-20 px-2 md:px-10 lg:px-24 xl:px-40">
          {Object.entries(currentContent.opportunity.stats).map(([key, stat], index) => {
            const s = stat as { number: string; label: string; desc: string };
            return (
              <Card key={key} className="futuristic-border text-center animate-scale-in stagger-1 hover:shadow-2xl transition-all duration-500 bg-white/90 border border-gray-100">
                <CardHeader className="pb-4">
                  <CardTitle className="text-4xl font-extrabold text-black font-mono mb-2 tracking-tight">{s.number}</CardTitle>
                  <CardDescription className="text-black font-semibold text-sm uppercase tracking-widest opacity-80">{s.label}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-muted-foreground font-mono leading-relaxed opacity-75">{s.desc}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
        <div className="flex flex-col items-center text-center mt-20 mb-4 px-2 md:px-10 lg:px-32 xl:px-56">
          <p className="text-lg md:text-2xl text-black font-bold mb-4 max-w-3xl">
            Venture capital flows to risky startups, ignoring the world’s largest pool of proven, cash-flowing companies.
          </p>
        </div>

        {/* Market Context - Integrated */}
        <div className="mt-20 mb-4 flex flex-col items-center text-center px-2 md:px-10 lg:px-32 xl:px-56">
          <h3 className="text-3xl md:text-5xl font-extrabold text-black mb-6 tracking-tight leading-tight">
            
          </h3>
        </div>
      </section>

      {/* Redefining Venture Acceleration Section */}
      <section id="redefining" className="py-24 px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 tracking-tight">
              Redefining Venture Acceleration
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-light">
              Traditional venture studios build companies from scratch with 90% failure probability. Private equity funds optimize financially but don't transform technologically. There's a massive opportunity between these two extremes.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm flex flex-col items-center justify-center p-10 text-center transition-all">
              <div className="text-2xl md:text-3xl font-extrabold text-black mb-2">AI-First</div>
              <div className="text-lg md:text-xl font-bold uppercase text-black mb-4 tracking-wide">Acceleration Studio</div>
              <div className="text-base text-muted-foreground font-mono">We accelerate existing ventures with AI and advanced tech stacks, we don't build new companies</div>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm flex flex-col items-center justify-center p-10 text-center transition-all">
              <div className="text-2xl md:text-3xl font-extrabold text-black mb-2">Strategic</div>
              <div className="text-lg md:text-xl font-bold uppercase text-black mb-4 tracking-wide">Capital Deployment</div>
              <div className="text-base text-muted-foreground font-mono">We deploy capital to accelerate growth, not to validate product-market fit</div>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm flex flex-col items-center justify-center p-10 text-center transition-all">
              <div className="text-2xl md:text-3xl font-extrabold text-black mb-2">Systematic</div>
              <div className="text-lg md:text-xl font-bold uppercase text-black mb-4 tracking-wide">Acceleration Platform</div>
              <div className="text-base text-muted-foreground font-mono">Proven methodologies that accelerate ventures predictably and scalably</div>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section id="methodology" className="py-24 px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-20 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 tracking-tight">
              {currentContent.methodology.title}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light">
              {currentContent.methodology.subtitle}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Partnership Acceleration */}
            <Card className="futuristic-border animate-scale-in stagger-1 hover:shadow-xl transition-all duration-500 flex flex-col justify-between h-full">
              <CardHeader>
                <Badge className="w-fit bg-black text-white hover:bg-black font-mono text-xs">TRACK 1</Badge>
                <CardTitle className="text-2xl text-black font-mono">{currentContent.methodology.partnership.title}</CardTitle>
                <CardDescription className="text-muted-foreground text-base font-light">
                  {currentContent.methodology.partnership.subtitle}
                </CardDescription>
                <p className="text-sm text-black font-normal mt-2">
                  {currentContent.methodology.partnership.description}
                </p>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-50 p-4 rounded border border-gray-200">
                  <p className="text-sm text-black font-mono"><strong>Equity:</strong> {currentContent.methodology.partnership.equity}</p>
                </div>
                <a href="https://wa.me/14242160643" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-black text-white w-full mt-6 hover:bg-gray-900">Apply</Button>
                </a>
              </CardContent>
            </Card>

            {/* Acquisition Acceleration */}
            <Card className="futuristic-border animate-scale-in stagger-2 hover:shadow-xl transition-all duration-500 flex flex-col justify-between h-full">
              <CardHeader>
                <Badge className="w-fit bg-black text-white hover:bg-black font-mono text-xs">TRACK 2</Badge>
                <CardTitle className="text-2xl text-black font-mono">{currentContent.methodology.acquisition.title}</CardTitle>
                <CardDescription className="text-muted-foreground text-base font-light">
                  {currentContent.methodology.acquisition.subtitle}
                </CardDescription>
                <p className="text-sm text-black font-normal mt-2">
                  {currentContent.methodology.acquisition.description}
                </p>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-50 p-4 rounded border border-gray-200">
                  <p className="text-sm text-black font-mono"><strong>Equity:</strong> {currentContent.methodology.acquisition.equity}</p>
                </div>
                <a href="https://wa.me/14242160643" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-black text-white w-full mt-6 hover:bg-gray-900">Apply</Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-20 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 tracking-tight">
              {currentContent.about.title}
            </h2>
          </div>

          <Card className="glass-card border border-gray-100 bg-white/80 backdrop-blur-lg rounded-2xl animate-scale-in">
            <CardHeader className="text-center flex flex-col items-center">
              <div className="w-28 h-28 rounded-full overflow-hidden bg-gray-200 mb-6 shadow-none">
                <img 
                  src="/Santiago Sáenz Ariza.png" 
                  alt="Santiago Sáenz Ariza" 
                  className="object-cover w-full h-full rounded-full border border-gray-200"
                  width={112}
                  height={112}
                />
              </div>
              <CardTitle className="text-3xl text-black font-mono font-extrabold mb-2">{currentContent.about.founder}</CardTitle>
              <CardDescription className="text-lg text-black font-medium font-mono opacity-80 mb-2">
                {currentContent.about.role}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <blockquote className="bg-black/90 p-8 rounded-xl">
                <p className="text-white italic text-lg leading-relaxed font-light text-center">
                  {currentContent.about.vision}
                </p>
              </blockquote>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 px-6 bg-black">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight animate-slide-up">
              {currentContent.cta.title}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white futuristic-border animate-scale-in stagger-1 hover:shadow-xl transition-all duration-500">
              <CardHeader>
                <CardTitle className="text-xl text-black font-mono">{currentContent.cta.entrepreneurs}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm font-mono">{currentContent.cta.entrepreneursDesc}</p>
                <a href="https://wa.me/14242160643" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-black text-white hover:bg-gray-800 font-mono text-sm">
                    Apply
                  </Button>
                </a>
              </CardContent>
            </Card>

            <Card className="bg-white futuristic-border animate-scale-in stagger-2 hover:shadow-xl transition-all duration-500">
              <CardHeader>
                <CardTitle className="text-xl text-black font-mono">{currentContent.cta.investors}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm font-mono">{currentContent.cta.investorsDesc}</p>
                <a href="https://wa.me/14242160643" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-black text-white hover:bg-gray-800 font-mono text-sm">
                    Learn More
                  </Button>
                </a>
              </CardContent>
            </Card>

            <Card className="bg-white futuristic-border animate-scale-in stagger-3 hover:shadow-xl transition-all duration-500">
              <CardHeader>
                <CardTitle className="text-xl text-black font-mono">{currentContent.cta.talent}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm font-mono">{currentContent.cta.talentDesc}</p>
                <a href="https://wa.me/14242160643" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-black text-white hover:bg-gray-800 font-mono text-sm">
                    Join Us
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-white border-t border-gray-200">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <span className="font-bold text-black font-mono">FERRIX VENTURES</span>
          </div>
          <p className="text-xs text-muted-foreground font-mono">
            AI-First Venture Acceleration Studio
          </p>
          <p className="text-xs text-muted-foreground mt-2 font-mono">
            © 2025 Ferrix Ventures. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;