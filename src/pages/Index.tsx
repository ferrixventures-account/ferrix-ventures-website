import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, Globe, TrendingUp, Zap, Users, Target, Star, CheckCircle, ExternalLink, Menu, X, BarChart3, DollarSign, Building2, ChevronDown } from 'lucide-react';

const Index = () => {
  const [language, setLanguage] = useState('es');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es');
  };

  const content = {
    es: {
      // Header
      nav: {
        opportunity: 'Oportunidad',
        methodology: 'Metodología',
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
            description: 'Insights profesionales sobre venture acceleration, market analysis y thought leadership en transformación digital.',
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
          equity: '0-50% equity'
        },
        acquisition: {
          title: 'Acquisition Acceleration', 
          subtitle: 'Máxima aceleración AI-powered',
          equity: '50-100% acquisition'
        }
      },

      // Leadership
      leadership: {
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
        methodology: 'Methodology',
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
          title: 'The Market VC Ignores',
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
            description: 'Professional insights on venture acceleration, market analysis and thought leadership in digital transformation.',
            cta: 'Follow on LinkedIn'
          },
          instagram: {
            title: 'Instagram',
            handle: '@ferrix.ventures',
            description: 'Behind-the-scenes of the first AI-first Venture Acceleration Studio, team culture and journey moments.',
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
          equity: '0-50% equity'
        },
        acquisition: {
          title: 'Acquisition Acceleration',
          subtitle: 'Maximum AI-powered acceleration',
          equity: '50-100% acquisition'
        }
      },

      // Leadership
      leadership: {
        title: 'Leadership',
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
            <a href="#home" className="flex items-center space-x-3 group">
              <div className="relative">
                <img 
                  src="/Logos - 1080x1080 - FRX.png" 
                  alt="FRX" 
                  className="w-10 h-10 transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div>
                <h1 className="text-xl font-bold text-black tracking-tight">FERRIX</h1>
                <p className="text-xs text-muted-foreground font-mono">VENTURES</p>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#opportunity" className="text-sm font-mono text-muted-foreground hover:text-black transition-colors duration-300">
                {currentContent.nav.opportunity}
              </a>
              <a href="#methodology" className="text-sm font-mono text-muted-foreground hover:text-black transition-colors duration-300">
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
              <a href="#methodology" className="block text-sm font-mono text-muted-foreground hover:text-black">{currentContent.nav.methodology}</a>
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
          <div className="animate-slide-up stagger-2">
            <Button 
              size="lg" 
              className="bg-black text-white hover:bg-gray-800 px-8 py-4 text-lg font-mono transition-all duration-300 hover:scale-105"
            >
              {currentContent.hero.cta}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-6 w-6 text-muted-foreground" />
        </div>
      </section>

      {/* Opportunity Section */}
      <section id="opportunity" className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-20 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 tracking-tight">
              {currentContent.opportunity.title}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light">
              {currentContent.opportunity.subtitle}
            </p>
          </div>

          {/* Market Context */}
          <div className="max-w-4xl mx-auto mb-20 animate-slide-up stagger-1">
            <Card className="glass-card border border-gray-200">
              <CardHeader>
                <CardTitle className="text-2xl text-black font-mono text-center">{currentContent.opportunity.context.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed font-light">{currentContent.opportunity.context.description}</p>
                <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                  <p className="text-black font-medium leading-relaxed">{currentContent.opportunity.context.marketGap}</p>
                </div>
                <p className="text-muted-foreground leading-relaxed font-light">{currentContent.opportunity.context.timing}</p>
              </CardContent>
            </Card>
          </div>

          {/* Key Statistics */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {Object.entries(currentContent.opportunity.stats).map(([key, stat], index) => (
              <Card key={key} className={`futuristic-border text-center animate-scale-in stagger-${index + 1} hover:shadow-lg transition-all duration-500`}>
                <CardHeader className="pb-4">
                  <CardTitle className="text-4xl font-bold text-black font-mono mb-2">{stat.number}</CardTitle>
                  <CardDescription className="text-black font-semibold text-sm uppercase tracking-wide">{stat.label}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-muted-foreground font-mono leading-relaxed">{stat.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Key Insight */}
          <Card className="max-w-4xl mx-auto glass-card border-2 border-black animate-slide-up stagger-4 mb-20">
            <CardHeader>
              <CardTitle className="text-2xl text-black text-center font-mono">{currentContent.opportunity.insight.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                  <h4 className="font-bold text-black mb-2 text-sm font-mono">PROBLEM</h4>
                  <p className="text-xs text-muted-foreground font-mono">{currentContent.opportunity.insight.problem}</p>
                </div>

                <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                  <h4 className="font-bold text-black mb-2 text-sm font-mono">SOLUTION</h4>
                  <p className="text-xs text-black font-mono">{currentContent.opportunity.insight.solution}</p>
                </div>

                <div className="bg-black p-6 rounded-lg">
                  <h4 className="font-bold text-white mb-2 text-sm font-mono">ADVANTAGE</h4>
                  <p className="text-xs text-white font-mono">{currentContent.opportunity.insight.advantage}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Why Now */}
          <Card className="max-w-4xl mx-auto glass-card border border-gray-200 animate-slide-up stagger-5">
            <CardHeader>
              <CardTitle className="text-2xl text-black text-center font-mono">{currentContent.opportunity.whyNow.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {currentContent.opportunity.whyNow.reasons.map((reason, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-muted-foreground font-mono">{reason}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-20 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 tracking-tight">
              {currentContent.social.title}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light">
              {currentContent.social.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* LinkedIn */}
            <Card className="futuristic-border animate-scale-in stagger-1 hover:shadow-xl transition-all duration-500">
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">in</span>
                  </div>
                  <div>
                    <CardTitle className="text-xl text-black font-mono">{currentContent.social.platforms.linkedin.title}</CardTitle>
                    <p className="text-sm text-muted-foreground font-mono">{currentContent.social.platforms.linkedin.handle}</p>
                  </div>
                </div>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {currentContent.social.platforms.linkedin.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-blue-600 text-white hover:bg-blue-700 font-mono text-sm">
                  {currentContent.social.platforms.linkedin.cta}
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Instagram */}
            <Card className="futuristic-border animate-scale-in stagger-2 hover:shadow-xl transition-all duration-500">
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">📷</span>
                  </div>
                  <div>
                    <CardTitle className="text-xl text-black font-mono">{currentContent.social.platforms.instagram.title}</CardTitle>
                    <p className="text-sm text-muted-foreground font-mono">{currentContent.social.platforms.instagram.handle}</p>
                  </div>
                </div>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {currentContent.social.platforms.instagram.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 font-mono text-sm">
                  {currentContent.social.platforms.instagram.cta}
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Card className="max-w-3xl mx-auto glass-card border border-gray-200 animate-slide-up stagger-3">
              <CardContent className="p-8">
                <p className="text-muted-foreground leading-relaxed font-light">
                  {currentContent.social.engagement}
                </p>
              </CardContent>
            </Card>
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
            <Card className="futuristic-border animate-scale-in stagger-1 hover:shadow-xl transition-all duration-500">
              <CardHeader>
                <Badge className="w-fit bg-black text-white hover:bg-black font-mono text-xs">TRACK 1</Badge>
                <CardTitle className="text-2xl text-black font-mono">{currentContent.methodology.partnership.title}</CardTitle>
                <CardDescription className="text-muted-foreground text-base font-light">
                  {currentContent.methodology.partnership.subtitle}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-50 p-4 rounded border border-gray-200">
                  <p className="text-sm text-black font-mono"><strong>Equity:</strong> {currentContent.methodology.partnership.equity}</p>
                </div>
              </CardContent>
            </Card>

            {/* Acquisition Acceleration */}
            <Card className="futuristic-border animate-scale-in stagger-2 hover:shadow-xl transition-all duration-500">
              <CardHeader>
                <Badge className="w-fit bg-gray-100 text-black hover:bg-gray-100 font-mono text-xs">TRACK 2</Badge>
                <CardTitle className="text-2xl text-black font-mono">{currentContent.methodology.acquisition.title}</CardTitle>
                <CardDescription className="text-muted-foreground text-base font-light">
                  {currentContent.methodology.acquisition.subtitle}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-50 p-4 rounded border border-gray-200">
                  <p className="text-sm text-black font-mono"><strong>Equity:</strong> {currentContent.methodology.acquisition.equity}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section id="about" className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-20 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 tracking-tight">
              {currentContent.leadership.title}
            </h2>
          </div>

          <Card className="glass-card border-2 border-black animate-scale-in">
            <CardHeader className="text-center">
              <div className="w-24 h-24 bg-black rounded-full flex items-center justify-center mx-auto mb-6 float-animation">
                <Users className="h-12 w-12 text-white" />
              </div>
              <CardTitle className="text-3xl text-black font-mono">{currentContent.leadership.founder}</CardTitle>
              <CardDescription className="text-lg text-black font-medium font-mono">
                {currentContent.leadership.role}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <blockquote className="bg-black p-8 rounded-lg">
                <p className="text-white italic text-lg leading-relaxed font-light text-center">
                  {currentContent.leadership.vision}
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
                <Button className="w-full bg-black text-white hover:bg-gray-800 font-mono text-sm">
                  Apply
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white futuristic-border animate-scale-in stagger-2 hover:shadow-xl transition-all duration-500">
              <CardHeader>
                <CardTitle className="text-xl text-black font-mono">{currentContent.cta.investors}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm font-mono">{currentContent.cta.investorsDesc}</p>
                <Button className="w-full bg-black text-white hover:bg-gray-800 font-mono text-sm">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white futuristic-border animate-scale-in stagger-3 hover:shadow-xl transition-all duration-500">
              <CardHeader>
                <CardTitle className="text-xl text-black font-mono">{currentContent.cta.talent}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm font-mono">{currentContent.cta.talentDesc}</p>
                <Button className="w-full bg-black text-white hover:bg-gray-800 font-mono text-sm">
                  Join Us
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-white border-t border-gray-200">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <img src="/Logos - 1080x1080 - FRX.png" alt="FRX" className="w-6 h-6" />
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