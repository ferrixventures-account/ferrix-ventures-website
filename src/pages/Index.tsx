import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, Globe, TrendingUp, Zap, Users, Target, Star, CheckCircle, ExternalLink, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const [language, setLanguage] = useState('es');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es');
  };

  const content = {
    es: {
      // Header
      nav: {
        home: 'Inicio',
        partnership: 'Partnership Acceleration',
        acquisition: 'Acquisition Acceleration', 
        about: 'Nosotros',
        investors: 'Inversores',
        blog: 'Blog',
        contact: 'Contacto'
      },
      headerCta: 'Conoce Nuestra Metodología',
      
      // Hero Section
      hero: {
        headline: 'El Primer AI-First Venture Acceleration Studio de Latinoamérica',
        subheadline: 'Ferrix Ventures es un AI-first Venture Acceleration Studio que transforma negocios establecidos en líderes digitales de clase mundial. A diferencia de los venture studios tradicionales que construyen empresas desde cero, nosotros aceleramos ventures existentes hacia el crecimiento exponencial.',
        distinction: {
          title: '¿Qué nos hace diferentes de otros Venture Studios?',
          traditional: 'Venture Studios Tradicionales: Construyen nuevas empresas desde cero',
          ferrix: 'Ferrix (Venture Acceleration Studio): Aceleramos ventures establecidos con cash flow probado',
          risk: 'Otros: Alta incertidumbre de mercado y producto',
          advantage: 'Nosotros: Riesgo reducido con fundamentals ya validados'
        },
        vision: 'Nuestra misión es democratizar el acceso a aceleración empresarial de nivel institucional mediante IA y metodologías avanzadas, transformando ventures tradicionales en empresas de crecimiento exponencial.',
        primaryCta: 'Conoce Nuestra Metodología de Aceleración',
        secondaryCta: 'Ve Cómo Aceleramos Ventures'
      },

      // Vision Section
      vision: {
        title: 'Redefiniendo la Aceleración de Ventures',
        marketGap: 'Los venture studios tradicionales construyen empresas desde cero con 90% de probabilidad de fracaso. Los fondos de private equity optimizan financieramente pero no transforman tecnológicamente. Existe una oportunidad masiva entre estos dos extremos.',
        innovation: 'Identificamos ventures establecidos con cash flow probado y PMF validado, luego los aceleramos exponencialmente mediante IA, automatización y metodologías avanzadas. No construimos desde cero - aceleramos lo que ya funciona.',
        pillars: {
          title: 'La Ventaja del Venture Acceleration',
          studio: {
            title: 'AI-First Acceleration Studio',
            desc: 'Aceleramos ventures existentes con IA y technology stacks avanzados, no construimos nuevas empresas'
          },
          capital: {
            title: 'Strategic Capital Deployment', 
            desc: 'Desplegamos capital para acelerar crecimiento, no para validar product-market fit'
          },
          platform: {
            title: 'Systematic Acceleration Platform',
            desc: 'Metodologías probadas que aceleran ventures de manera predecible y escalable'
          }
        }
      },

      // Service Portfolio
      services: {
        title: 'Partnership o Adquisición: Elige Tu Ruta de Aceleración',
        subtitle: 'Como el primer AI-first Venture Acceleration Studio de LATAM, ofrecemos dos servicios distintos de aceleración basados en preferencias del entrepreneur y estructura del deal. Ambos servicios despliegan la misma metodología AI-powered de clase mundial.',
        partnership: {
          title: 'PARTNERSHIP ACCELERATION',
          subtitle: 'Aceleración AI-powered manteniendo tu control mayoritario',
          equity: '0% a 50% equity stakes',
          control: 'Siempre mantienes 50%+ ownership y control operacional'
        },
        acquisition: {
          title: 'ACQUISITION ACCELERATION',
          subtitle: 'Full acquisition con maximum AI-powered acceleration',
          equity: '50% a 100% acquisition',
          commitment: 'Maximum AI deployment y acceleration resources'
        }
      },

      // Leadership
      leadership: {
        title: 'Liderando la Nueva Categoría de Venture Acceleration',
        founder: 'Santiago Sáenz Ariza - Founder & Managing Partner',
        subtitle: 'Creador del primer AI-first Venture Acceleration Studio de Latinoamérica',
        why: 'Después de construir en Silicon Valley y trabajar en venture capital, Santiago identificó una oportunidad masiva: millones de ventures establecidos necesitan aceleración exponencial, pero los modelos existentes no sirven sus necesidades.',
        vision: '"Después de ver cómo los venture studios tradicionales luchan con el 90% de failure rate y cómo PE tradicional deja exponential growth en la mesa, me di cuenta de que necesitábamos una nueva categoría. Venture Acceleration toma lo mejor de ambos mundos: ventures with proven fundamentals + AI-powered exponential growth acceleration."'
      },

      // CTA Section
      cta: {
        title: '¿Tu Venture Está Listo Para Aceleración AI-Powered?',
        entrepreneurs: 'Para Entrepreneurs con Ventures Establecidos',
        entrepreneursDesc: '¿Lideras un venture con revenue probado pero crecimiento estancado? Como el primer AI-first Venture Acceleration Studio, queremos evaluar si tu venture es ideal para nuestra metodología de aceleración.',
        investors: 'Para Inversionistas Institucionales', 
        investorsDesc: '¿Buscas exposure a una nueva asset class con better risk-return profile que traditional VC y higher growth que traditional PE? Venture Acceleration representa una oportunidad de investment única.',
        talent: 'Para AI & Growth Talent',
        talentDesc: '¿Quieres construir la próxima generación de venture acceleration infrastructure? Estamos building el team que definirá esta nueva categoría.',
        buttons: {
          entrepreneurs: 'Evaluar Fit Para Venture Acceleration',
          investors: 'Información sobre Venture Acceleration Fund',
          talent: 'Careers en Venture Acceleration'
        },
        note: 'No aplicamos a ventures muy tempranos sin revenue. No construimos ventures desde cero. Solo aceleramos ventures establecidos con cash flow probado hacia exponential growth.'
      }
    },
    en: {
      // Header
      nav: {
        home: 'Home',
        partnership: 'Partnership Acceleration',
        acquisition: 'Acquisition Acceleration',
        about: 'About',
        investors: 'Investors', 
        blog: 'Blog',
        contact: 'Contact'
      },
      headerCta: 'Learn More',

      // Hero Section
      hero: {
        headline: "Latin America's First AI-First Venture Acceleration Studio",
        subheadline: 'Ferrix Ventures is an AI-first Venture Acceleration Studio that transforms established businesses into world-class digital leaders. Unlike traditional venture studios that build companies from scratch, we accelerate existing ventures toward exponential growth.',
        distinction: {
          title: 'What makes us different from other Venture Studios?',
          traditional: 'Traditional Venture Studios: Build new companies from scratch',
          ferrix: 'Ferrix (Venture Acceleration Studio): Accelerate established ventures with proven cash flow',
          risk: 'Others: High market and product uncertainty',
          advantage: 'Us: Reduced risk with validated fundamentals'
        },
        vision: 'Our mission is to democratize access to institutional-grade business acceleration through AI and advanced methodologies, transforming traditional ventures into exponential growth companies.',
        primaryCta: 'Learn Our Acceleration Methodology',
        secondaryCta: 'See How We Accelerate Ventures'
      },

      // Vision Section
      vision: {
        title: 'Redefining Venture Acceleration',
        marketGap: 'Traditional venture studios build companies from scratch with 90% probability of failure. Private equity funds optimize financially but don\'t transform technologically. There\'s a massive opportunity between these two extremes.',
        innovation: 'We identify established ventures with proven cash flow and validated PMF, then accelerate them exponentially through AI, automation and advanced methodologies. We don\'t build from scratch - we accelerate what already works.',
        pillars: {
          title: 'The Venture Acceleration Advantage',
          studio: {
            title: 'AI-First Acceleration Studio',
            desc: 'We accelerate existing ventures with AI and advanced technology stacks, not build new companies'
          },
          capital: {
            title: 'Strategic Capital Deployment',
            desc: 'We deploy capital to accelerate growth, not to validate product-market fit'
          },
          platform: {
            title: 'Systematic Acceleration Platform', 
            desc: 'Proven methodologies that accelerate ventures predictably and scalably'
          }
        }
      },

      // Service Portfolio
      services: {
        title: 'Partnership or Acquisition: Choose Your Acceleration Path',
        subtitle: 'As Latin America\'s first AI-first Venture Acceleration Studio, we offer two distinct acceleration services based on entrepreneur preferences and deal structure. Both services deploy the same world-class AI-powered methodology.',
        partnership: {
          title: 'PARTNERSHIP ACCELERATION',
          subtitle: 'AI-powered acceleration while maintaining your majority control',
          equity: '0% to 50% equity stakes',
          control: 'You always retain 50%+ ownership and operational control'
        },
        acquisition: {
          title: 'ACQUISITION ACCELERATION',
          subtitle: 'Full acquisition with maximum AI-powered acceleration',
          equity: '50% to 100% acquisition',
          commitment: 'Maximum AI deployment and acceleration resources'
        }
      },

      // Leadership
      leadership: {
        title: 'Leading the New Category of Venture Acceleration',
        founder: 'Santiago Sáenz Ariza - Founder & Managing Partner',
        subtitle: 'Creator of Latin America\'s first AI-first Venture Acceleration Studio',
        why: 'After building in Silicon Valley and working in venture capital, Santiago identified a massive opportunity: millions of established ventures need exponential acceleration, but existing models don\'t serve their needs.',
        vision: '"After seeing how traditional venture studios struggle with 90% failure rates and how traditional PE leaves exponential growth on the table, I realized we needed a new category. Venture Acceleration takes the best of both worlds: ventures with proven fundamentals + AI-powered exponential growth acceleration."'
      },

      // CTA Section
      cta: {
        title: 'Is Your Venture Ready for AI-Powered Acceleration?',
        entrepreneurs: 'For Entrepreneurs with Established Ventures',
        entrepreneursDesc: 'Do you lead a venture with proven revenue but stagnant growth? As the first AI-first Venture Acceleration Studio, we want to evaluate if your venture is ideal for our acceleration methodology.',
        investors: 'For Institutional Investors',
        investorsDesc: 'Looking for exposure to a new asset class with better risk-return profile than traditional VC and higher growth than traditional PE? Venture Acceleration represents a unique investment opportunity.',
        talent: 'For AI & Growth Talent',
        talentDesc: 'Want to build the next generation of venture acceleration infrastructure? We\'re building the team that will define this new category.',
        buttons: {
          entrepreneurs: 'Evaluate Fit for Venture Acceleration',
          investors: 'Venture Acceleration Fund Information',
          talent: 'Careers in Venture Acceleration'
        },
        note: 'We don\'t apply to very early ventures without revenue. We don\'t build ventures from scratch. We only accelerate established ventures with proven cash flow toward exponential growth.'
      }
    }
  };

  const currentContent = content[language];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-black rounded-sm flex items-center justify-center">
                <Zap className="h-5 w-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-semibold text-black">Ferrix Ventures</h1>
                <p className="text-xs text-muted-foreground">AI-First Venture Acceleration Studio</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-muted-foreground hover:text-black transition-colors font-medium">{currentContent.nav.home}</a>
              <a href="#services" className="text-muted-foreground hover:text-black transition-colors font-medium">{currentContent.nav.partnership}</a>
              <a href="#acquisition" className="text-muted-foreground hover:text-black transition-colors font-medium">{currentContent.nav.acquisition}</a>
              <a href="#about" className="text-muted-foreground hover:text-black transition-colors font-medium">{currentContent.nav.about}</a>
              <a href="#investors" className="text-muted-foreground hover:text-black transition-colors font-medium">{currentContent.nav.investors}</a>
              <a href="#contact" className="text-muted-foreground hover:text-black transition-colors font-medium">{currentContent.nav.contact}</a>
            </nav>

            {/* Language Toggle & CTA */}
            <div className="hidden md:flex items-center space-x-4">
              <button
                onClick={toggleLanguage}
                className="text-sm px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 transition-colors"
              >
                {language === 'es' ? '🇺🇸 EN' : '🇪🇸 ES'}
              </button>
              
              <Button className="bg-black text-white hover:bg-gray-800 border border-black">
                {currentContent.headerCta}
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden flex items-center space-x-2">
              <button
                onClick={toggleLanguage}
                className="text-sm px-2 py-1 border border-gray-300 rounded"
              >
                {language === 'es' ? 'EN' : 'ES'}
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 py-4 px-4 space-y-4">
              <a href="#home" className="block text-muted-foreground hover:text-black font-medium">{currentContent.nav.home}</a>
              <a href="#services" className="block text-muted-foreground hover:text-black font-medium">{currentContent.nav.partnership}</a>
              <a href="#acquisition" className="block text-muted-foreground hover:text-black font-medium">{currentContent.nav.acquisition}</a>
              <a href="#about" className="block text-muted-foreground hover:text-black font-medium">{currentContent.nav.about}</a>
              <a href="#investors" className="block text-muted-foreground hover:text-black font-medium">{currentContent.nav.investors}</a>
              <a href="#contact" className="block text-muted-foreground hover:text-black font-medium">{currentContent.nav.contact}</a>
              <div className="pt-4 border-t border-gray-200">
                <Button className="w-full bg-black text-white hover:bg-gray-800">
                  {currentContent.headerCta}
                </Button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-black mb-8 leading-tight">
              {currentContent.hero.headline}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto mb-12 leading-relaxed">
              {currentContent.hero.subheadline}
            </p>

            {/* Key Distinction */}
            <Card className="max-w-4xl mx-auto mb-12 border-2 border-black">
              <CardHeader>
                <CardTitle className="text-xl text-black flex items-center justify-center">
                  <span className="mr-2">💡</span> {currentContent.hero.distinction.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-left">
                <div className="flex items-start space-x-3">
                  <span className="text-black font-semibold">❌</span>
                  <p className="text-muted-foreground">{currentContent.hero.distinction.traditional}</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-black font-semibold">✅</span>
                  <p className="text-black">{currentContent.hero.distinction.ferrix}</p>
                </div>
                <Separator className="my-4" />
                <div className="flex items-start space-x-3">
                  <span className="text-black font-semibold">❌</span>
                  <p className="text-muted-foreground">{currentContent.hero.distinction.risk}</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-black font-semibold">✅</span>
                  <p className="text-black">{currentContent.hero.distinction.advantage}</p>
                </div>
              </CardContent>
            </Card>

            {/* Vision Statement */}
            <Card className="max-w-4xl mx-auto mb-12 border border-gray-200">
              <CardContent className="p-6">
                <p className="text-lg text-muted-foreground italic leading-relaxed">
                  {currentContent.hero.vision}
                </p>
              </CardContent>
            </Card>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-black text-white hover:bg-gray-800 px-8 py-4">
                {currentContent.hero.primaryCta}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-black text-black hover:bg-gray-50 px-8 py-4">
                {currentContent.hero.secondaryCta}
                <ExternalLink className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              {currentContent.vision.title}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <Card className="border border-gray-200">
              <CardHeader>
                <CardTitle className="text-xl text-black">{language === 'es' ? 'La Oportunidad de Mercado' : 'The Market Gap'}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{currentContent.vision.marketGap}</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-black">
              <CardHeader>
                <CardTitle className="text-xl text-black">{language === 'es' ? 'Nuestra Innovación: AI-First Venture Acceleration' : 'Our Innovation: AI-First Venture Acceleration'}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-black leading-relaxed">{currentContent.vision.innovation}</p>
              </CardContent>
            </Card>
          </div>

          {/* Three Pillars */}
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-black mb-8">{currentContent.vision.pillars.title}</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border border-gray-200 hover:border-black transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-black rounded-sm flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-black">{currentContent.vision.pillars.studio.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{currentContent.vision.pillars.studio.desc}</p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 hover:border-black transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-black rounded-sm flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-black">{currentContent.vision.pillars.capital.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{currentContent.vision.pillars.capital.desc}</p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 hover:border-black transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-black rounded-sm flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-black">{currentContent.vision.pillars.platform.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{currentContent.vision.pillars.platform.desc}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Portfolio Section */}
      <section id="services" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              {currentContent.services.title}
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              {currentContent.services.subtitle}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Partnership Acceleration */}
            <Card className="border-2 border-black">
              <CardHeader>
                <Badge className="w-fit bg-black text-white hover:bg-black">TRACK 1</Badge>
                <CardTitle className="text-2xl text-black">{currentContent.services.partnership.title}</CardTitle>
                <CardDescription className="text-muted-foreground text-base">
                  {currentContent.services.partnership.subtitle}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-gray-50 p-4 rounded border border-gray-200">
                  <p className="text-sm text-black"><strong>{language === 'es' ? 'Equity Range' : 'Equity Range'}:</strong> {currentContent.services.partnership.equity}</p>
                  <p className="text-sm text-black"><strong>{language === 'es' ? 'Tu Control' : 'Your Control'}:</strong> {currentContent.services.partnership.control}</p>
                </div>
              </CardContent>
            </Card>

            {/* Acquisition Acceleration */}
            <Card className="border border-gray-200">
              <CardHeader>
                <Badge className="w-fit bg-gray-100 text-black hover:bg-gray-100">TRACK 2</Badge>
                <CardTitle className="text-2xl text-black">{currentContent.services.acquisition.title}</CardTitle>
                <CardDescription className="text-muted-foreground text-base">
                  {currentContent.services.acquisition.subtitle}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-gray-50 p-4 rounded border border-gray-200">
                  <p className="text-sm text-black"><strong>{language === 'es' ? 'Equity Range' : 'Equity Range'}:</strong> {currentContent.services.acquisition.equity}</p>
                  <p className="text-sm text-black"><strong>{language === 'es' ? 'Nuestro Compromiso' : 'Our Commitment'}:</strong> {currentContent.services.acquisition.commitment}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section id="about" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              {currentContent.leadership.title}
            </h2>
          </div>

          <Card className="max-w-4xl mx-auto border-2 border-black">
            <CardHeader className="text-center">
              <div className="w-24 h-24 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-12 w-12 text-white" />
              </div>
              <CardTitle className="text-2xl text-black">{currentContent.leadership.founder}</CardTitle>
              <CardDescription className="text-lg text-black font-medium">
                {currentContent.leadership.subtitle}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-gray-50 p-6 rounded border border-gray-200">
                <h4 className="font-semibold text-black mb-3">{language === 'es' ? 'Por Qué Santiago Creó Venture Acceleration' : 'Why Santiago Created Venture Acceleration'}:</h4>
                <p className="text-muted-foreground">{currentContent.leadership.why}</p>
              </div>

              <div className="bg-white p-6 rounded border border-gray-200">
                <h4 className="font-semibold text-black mb-3">{language === 'es' ? 'Background' : 'Background'}:</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-black mr-2" />
                    <span className="text-sm">🎓 Universidad de los Andes - Business Administration</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-black mr-2" />
                    <span className="text-sm">🚀 Co-Founder & CEO, Agua for Devs (AI platform, 280+ Fortune 500 users)</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-black mr-2" />
                    <span className="text-sm">💼 Ex-Interim Chief of Staff, Share Ventures ($50M fund)</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-black mr-2" />
                    <span className="text-sm">🏆 Makers Fellowship & The Founder School Alumni</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-black mr-2" />
                    <span className="text-sm">🌎 Silicon Valley operational experience + AI development</span>
                  </li>
                </ul>
              </div>

              <blockquote className="bg-black p-6 rounded border-l-4 border-black">
                <p className="text-white italic text-lg leading-relaxed">
                  {currentContent.leadership.vision}
                </p>
                <footer className="mt-4 text-right">
                  <cite className="text-gray-300 font-medium">- Santiago Sáenz Ariza</cite>
                </footer>
              </blockquote>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 px-4 bg-black">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {currentContent.cta.title}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-white border border-gray-200">
              <CardHeader>
                <CardTitle className="text-xl text-black">{currentContent.cta.entrepreneurs}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm">{currentContent.cta.entrepreneursDesc}</p>
                <Button className="w-full bg-black text-white hover:bg-gray-800">
                  {currentContent.cta.buttons.entrepreneurs}
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white border border-gray-200">
              <CardHeader>
                <CardTitle className="text-xl text-black">{currentContent.cta.investors}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm">{currentContent.cta.investorsDesc}</p>
                <Button className="w-full bg-black text-white hover:bg-gray-800">
                  {currentContent.cta.buttons.investors}
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white border border-gray-200">
              <CardHeader>
                <CardTitle className="text-xl text-black">{currentContent.cta.talent}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm">{currentContent.cta.talentDesc}</p>
                <Button className="w-full bg-black text-white hover:bg-gray-800">
                  {currentContent.cta.buttons.talent}
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Card className="max-w-4xl mx-auto bg-white border border-gray-200">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">💡</span>
                  </div>
                  <p className="text-black text-sm leading-relaxed">
                    <strong>{language === 'es' ? 'Distinción Importante' : 'Important Distinction'}:</strong> {currentContent.cta.note}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-white border-t border-gray-200">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-6 h-6 bg-black rounded-sm flex items-center justify-center">
              <Zap className="h-4 w-4 text-white" />
            </div>
            <span className="font-semibold text-black">Ferrix Ventures</span>
          </div>
          <p className="text-sm text-muted-foreground">
            AI-First Venture Acceleration Studio
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            © 2024 Ferrix Ventures. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;