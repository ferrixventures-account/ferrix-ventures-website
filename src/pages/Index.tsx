
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
          control: 'Siempre mantienes 50%+ ownership y control operacional',
          tiers: {
            catalyst: {
              name: 'CATALYST ACCELERATION',
              desc: 'Aceleración de fundación digital con IA para ventures LATAM',
              equity: '0% (pure fee-for-service)',
              investment: '$8,000 USD',
              duration: '6 semanas'
            },
            growth: {
              name: 'GROWTH ACCELERATION', 
              desc: 'Expansión regional con AI-powered marketing automation',
              equity: '10-20% OR pure fee ($35,000)',
              investment: '$18,000 USD + equity',
              duration: '4 meses'
            },
            market: {
              name: 'MARKET LEADERSHIP ACCELERATION',
              desc: 'US market entry con advanced AI positioning',
              equity: '15-25% OR pure fee ($40,000)',
              investment: '$25,000 USD + equity', 
              duration: '8 semanas'
            },
            strategic: {
              name: 'STRATEGIC ACCELERATION PARTNERSHIP',
              desc: 'Deep AI-first partnership para exponential acceleration',
              equity: '25-50% (always retain majority control)',
              investment: '$100k-500k growth capital',
              duration: '12-18 meses'
            }
          }
        },
        acquisition: {
          title: 'ACQUISITION ACCELERATION',
          subtitle: 'Full acquisition con maximum AI-powered acceleration',
          equity: '50% a 100% acquisition',
          commitment: 'Maximum AI deployment y acceleration resources',
          types: {
            majority: {
              name: 'MAJORITY ACQUISITION (50-80%)',
              desc: 'Become majority owners con tu continued involvement',
              stake: '20-50% retained ownership',
              investment: '$250k-2M+ acquisition y growth capital',
              duration: '24-36 months to AI-optimized exit'
            },
            full: {
              name: 'FULL ACQUISITION (80-100%)',
              desc: 'Complete acquisition con maximum AI acceleration deployment',
              stake: '0-20% retained (optional)',
              investment: '$500k-5M+ acquisition y growth capital',
              duration: '18-36 months to strategic exit'
            }
          }
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
          control: 'You always retain 50%+ ownership and operational control',
          tiers: {
            catalyst: {
              name: 'CATALYST ACCELERATION',
              desc: 'Digital foundation acceleration with AI for LATAM ventures',
              equity: '0% (pure fee-for-service)',
              investment: '$8,000 USD',
              duration: '6 weeks'
            },
            growth: {
              name: 'GROWTH ACCELERATION',
              desc: 'Regional expansion with AI-powered marketing automation',
              equity: '10-20% OR pure fee ($35,000)',
              investment: '$18,000 USD + equity',
              duration: '4 months'
            },
            market: {
              name: 'MARKET LEADERSHIP ACCELERATION',
              desc: 'US market entry with advanced AI positioning',
              equity: '15-25% OR pure fee ($40,000)',
              investment: '$25,000 USD + equity',
              duration: '8 weeks'
            },
            strategic: {
              name: 'STRATEGIC ACCELERATION PARTNERSHIP',
              desc: 'Deep AI-first partnership for exponential acceleration',
              equity: '25-50% (always retain majority control)',
              investment: '$100k-500k growth capital',
              duration: '12-18 months'
            }
          }
        },
        acquisition: {
          title: 'ACQUISITION ACCELERATION',
          subtitle: 'Full acquisition with maximum AI-powered acceleration',
          equity: '50% to 100% acquisition',
          commitment: 'Maximum AI deployment and acceleration resources',
          types: {
            majority: {
              name: 'MAJORITY ACQUISITION (50-80%)',
              desc: 'Become majority owners with your continued involvement',
              stake: '20-50% retained ownership',
              investment: '$250k-2M+ acquisition and growth capital',
              duration: '24-36 months to AI-optimized exit'
            },
            full: {
              name: 'FULL ACQUISITION (80-100%)',
              desc: 'Complete acquisition with maximum AI acceleration deployment',
              stake: '0-20% retained (optional)',
              investment: '$500k-5M+ acquisition and growth capital',
              duration: '18-36 months to strategic exit'
            }
          }
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Ferrix Ventures</h1>
                <p className="text-xs text-gray-600">AI-First Venture Acceleration Studio</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">{currentContent.nav.home}</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">{currentContent.nav.partnership}</a>
              <a href="#acquisition" className="text-gray-700 hover:text-blue-600 transition-colors">{currentContent.nav.acquisition}</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">{currentContent.nav.about}</a>
              <a href="#investors" className="text-gray-700 hover:text-blue-600 transition-colors">{currentContent.nav.investors}</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">{currentContent.nav.contact}</a>
            </nav>

            <div className="flex items-center space-x-4">
              {/* Language Toggle */}
              <button 
                onClick={toggleLanguage}
                className="flex items-center space-x-2 px-3 py-2 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
              >
                <Globe className="h-4 w-4" />
                <span className="text-sm font-medium">{language === 'es' ? '🇪🇸 ES' : '🇺🇸 EN'}</span>
              </button>

              <Button className="hidden md:inline-flex bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                {currentContent.headerCta}
              </Button>

              {/* Mobile Menu Toggle */}
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pt-4 border-t border-gray-200">
              <nav className="flex flex-col space-y-4">
                <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">{currentContent.nav.home}</a>
                <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">{currentContent.nav.partnership}</a>
                <a href="#acquisition" className="text-gray-700 hover:text-blue-600 transition-colors">{currentContent.nav.acquisition}</a>
                <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">{currentContent.nav.about}</a>
                <a href="#investors" className="text-gray-700 hover:text-blue-600 transition-colors">{currentContent.nav.investors}</a>
                <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">{currentContent.nav.contact}</a>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  {currentContent.headerCta}
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              {currentContent.hero.headline}
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              {currentContent.hero.subheadline}
            </p>

            {/* Key Distinction Box */}
            <Card className="mb-8 max-w-4xl mx-auto border-2 border-blue-200 bg-blue-50/50">
              <CardHeader>
                <CardTitle className="text-lg text-blue-900 flex items-center justify-center">
                  <Target className="h-5 w-5 mr-2" />
                  {currentContent.hero.distinction.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center text-red-700">
                  <X className="h-4 w-4 mr-2 text-red-500" />
                  <span className="text-sm">{currentContent.hero.distinction.traditional}</span>
                </div>
                <div className="flex items-center text-green-700">
                  <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                  <span className="text-sm">{currentContent.hero.distinction.ferrix}</span>
                </div>
                <div className="flex items-center text-red-700">
                  <X className="h-4 w-4 mr-2 text-red-500" />
                  <span className="text-sm">{currentContent.hero.distinction.risk}</span>
                </div>
                <div className="flex items-center text-green-700">
                  <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                  <span className="text-sm">{currentContent.hero.distinction.advantage}</span>
                </div>
              </CardContent>
            </Card>

            <p className="text-lg text-gray-700 mb-8 italic max-w-3xl mx-auto">
              {currentContent.hero.vision}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-3">
                {currentContent.hero.primaryCta}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-blue-300 hover:bg-blue-50">
                {currentContent.hero.secondaryCta}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {currentContent.vision.title}
            </h2>
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-700">
              <p className="font-semibold text-red-600">{currentContent.vision.marketGap}</p>
              <p className="text-blue-600 font-semibold">{currentContent.vision.innovation}</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 border-blue-200 hover:border-blue-300 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-blue-900">{currentContent.vision.pillars.studio.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{currentContent.vision.pillars.studio.desc}</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-200 hover:border-green-300 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-green-900">{currentContent.vision.pillars.capital.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{currentContent.vision.pillars.capital.desc}</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-200 hover:border-purple-300 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-purple-900">{currentContent.vision.pillars.platform.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{currentContent.vision.pillars.platform.desc}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Portfolio Section */}
      <section id="services" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {currentContent.services.title}
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              {currentContent.services.subtitle}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Partnership Acceleration */}
            <div className="space-y-6">
              <Card className="border-2 border-blue-300 bg-blue-50/50">
                <CardHeader>
                  <Badge className="w-fit bg-blue-100 text-blue-800 hover:bg-blue-100">TRACK 1</Badge>
                  <CardTitle className="text-2xl text-blue-900">{currentContent.services.partnership.title}</CardTitle>
                  <CardDescription className="text-blue-700 text-base">
                    {currentContent.services.partnership.subtitle}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-blue-200">
                    <p className="text-sm text-blue-800"><strong>{language === 'es' ? 'Equity Range' : 'Equity Range'}:</strong> {currentContent.services.partnership.equity}</p>
                    <p className="text-sm text-blue-800"><strong>{language === 'es' ? 'Tu Control' : 'Your Control'}:</strong> {currentContent.services.partnership.control}</p>
                  </div>
                </CardContent>
              </Card>

              {/* Partnership Tiers */}
              <div className="space-y-4">
                <Card className="border border-gray-200 hover:border-blue-300 transition-colors">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg text-gray-900">{currentContent.services.partnership.tiers.catalyst.name}</CardTitle>
                      <Badge variant="outline" className="text-xs">{currentContent.services.partnership.tiers.catalyst.equity}</Badge>
                    </div>
                    <CardDescription className="text-sm">{currentContent.services.partnership.tiers.catalyst.desc}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="font-medium text-gray-700">{language === 'es' ? 'Inversión' : 'Investment'}:</span>
                        <p className="text-gray-600">{currentContent.services.partnership.tiers.catalyst.investment}</p>
                      </div>
                      <div>
                        <span className="font-medium text-gray-700">{language === 'es' ? 'Duración' : 'Duration'}:</span>
                        <p className="text-gray-600">{currentContent.services.partnership.tiers.catalyst.duration}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border border-gray-200 hover:border-blue-300 transition-colors">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg text-gray-900">{currentContent.services.partnership.tiers.growth.name}</CardTitle>
                      <Badge variant="outline" className="text-xs">{currentContent.services.partnership.tiers.growth.equity}</Badge>
                    </div>
                    <CardDescription className="text-sm">{currentContent.services.partnership.tiers.growth.desc}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="font-medium text-gray-700">{language === 'es' ? 'Inversión' : 'Investment'}:</span>
                        <p className="text-gray-600">{currentContent.services.partnership.tiers.growth.investment}</p>
                      </div>
                      <div>
                        <span className="font-medium text-gray-700">{language === 'es' ? 'Duración' : 'Duration'}:</span>
                        <p className="text-gray-600">{currentContent.services.partnership.tiers.growth.duration}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border border-gray-200 hover:border-blue-300 transition-colors">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg text-gray-900">{currentContent.services.partnership.tiers.market.name}</CardTitle>
                      <Badge variant="outline" className="text-xs">{currentContent.services.partnership.tiers.market.equity}</Badge>
                    </div>
                    <CardDescription className="text-sm">{currentContent.services.partnership.tiers.market.desc}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="font-medium text-gray-700">{language === 'es' ? 'Inversión' : 'Investment'}:</span>
                        <p className="text-gray-600">{currentContent.services.partnership.tiers.market.investment}</p>
                      </div>
                      <div>
                        <span className="font-medium text-gray-700">{language === 'es' ? 'Duración' : 'Duration'}:</span>
                        <p className="text-gray-600">{currentContent.services.partnership.tiers.market.duration}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-blue-300 bg-blue-50/30">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg text-blue-900">{currentContent.services.partnership.tiers.strategic.name}</CardTitle>
                      <Badge className="text-xs bg-blue-100 text-blue-800 hover:bg-blue-100">{currentContent.services.partnership.tiers.strategic.equity}</Badge>
                    </div>
                    <CardDescription className="text-sm text-blue-700">{currentContent.services.partnership.tiers.strategic.desc}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="font-medium text-blue-800">{language === 'es' ? 'Inversión' : 'Investment'}:</span>
                        <p className="text-blue-700">{currentContent.services.partnership.tiers.strategic.investment}</p>
                      </div>
                      <div>
                        <span className="font-medium text-blue-800">{language === 'es' ? 'Duración' : 'Duration'}:</span>
                        <p className="text-blue-700">{currentContent.services.partnership.tiers.strategic.duration}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Acquisition Acceleration */}
            <div className="space-y-6">
              <Card className="border-2 border-purple-300 bg-purple-50/50">
                <CardHeader>
                  <Badge className="w-fit bg-purple-100 text-purple-800 hover:bg-purple-100">TRACK 2</Badge>
                  <CardTitle className="text-2xl text-purple-900">{currentContent.services.acquisition.title}</CardTitle>
                  <CardDescription className="text-purple-700 text-base">
                    {currentContent.services.acquisition.subtitle}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-purple-200">
                    <p className="text-sm text-purple-800"><strong>{language === 'es' ? 'Equity Range' : 'Equity Range'}:</strong> {currentContent.services.acquisition.equity}</p>
                    <p className="text-sm text-purple-800"><strong>{language === 'es' ? 'Nuestro Compromiso' : 'Our Commitment'}:</strong> {currentContent.services.acquisition.commitment}</p>
                  </div>
                </CardContent>
              </Card>

              {/* Acquisition Types */}
              <div className="space-y-4">
                <Card className="border-2 border-purple-200 hover:border-purple-300 transition-colors">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg text-purple-900">{currentContent.services.acquisition.types.majority.name}</CardTitle>
                    <CardDescription className="text-sm text-purple-700">{currentContent.services.acquisition.types.majority.desc}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0 space-y-3">
                    <div className="text-sm">
                      <span className="font-medium text-purple-800">{language === 'es' ? 'Tu Participación' : 'Your Stake'}:</span>
                      <p className="text-purple-700">{currentContent.services.acquisition.types.majority.stake}</p>
                    </div>
                    <div className="text-sm">
                      <span className="font-medium text-purple-800">{language === 'es' ? 'Inversión' : 'Investment'}:</span>
                      <p className="text-purple-700">{currentContent.services.acquisition.types.majority.investment}</p>
                    </div>
                    <div className="text-sm">
                      <span className="font-medium text-purple-800">{language === 'es' ? 'Duración' : 'Duration'}:</span>
                      <p className="text-purple-700">{currentContent.services.acquisition.types.majority.duration}</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-purple-300 bg-purple-50/30">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg text-purple-900">{currentContent.services.acquisition.types.full.name}</CardTitle>
                    <CardDescription className="text-sm text-purple-700">{currentContent.services.acquisition.types.full.desc}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0 space-y-3">
                    <div className="text-sm">
                      <span className="font-medium text-purple-800">{language === 'es' ? 'Tu Participación' : 'Your Stake'}:</span>
                      <p className="text-purple-700">{currentContent.services.acquisition.types.full.stake}</p>
                    </div>
                    <div className="text-sm">
                      <span className="font-medium text-purple-800">{language === 'es' ? 'Inversión' : 'Investment'}:</span>
                      <p className="text-purple-700">{currentContent.services.acquisition.types.full.investment}</p>
                    </div>
                    <div className="text-sm">
                      <span className="font-medium text-purple-800">{language === 'es' ? 'Duración' : 'Duration'}:</span>
                      <p className="text-purple-700">{currentContent.services.acquisition.types.full.duration}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {currentContent.leadership.title}
            </h2>
          </div>

          <Card className="max-w-4xl mx-auto border-2 border-blue-200">
            <CardHeader className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-12 w-12 text-white" />
              </div>
              <CardTitle className="text-2xl text-gray-900">{currentContent.leadership.founder}</CardTitle>
              <CardDescription className="text-lg text-blue-600 font-medium">
                {currentContent.leadership.subtitle}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-3">{language === 'es' ? 'Por Qué Santiago Creó Venture Acceleration' : 'Why Santiago Created Venture Acceleration'}:</h4>
                <p className="text-blue-800">{currentContent.leadership.why}</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-3">{language === 'es' ? 'Background' : 'Background'}:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">🎓 Universidad de los Andes - Business Administration</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">🚀 Co-Founder & CEO, Agua for Devs (AI platform, 280+ Fortune 500 users)</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">💼 Ex-Interim Chief of Staff, Share Ventures ($50M fund)</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">🏆 Makers Fellowship & The Founder School Alumni</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">🌎 Silicon Valley operational experience + AI development</span>
                  </li>
                </ul>
              </div>

              <blockquote className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg border-l-4 border-blue-500">
                <p className="text-gray-800 italic text-lg leading-relaxed">
                  {currentContent.leadership.vision}
                </p>
                <footer className="mt-4 text-right">
                  <cite className="text-blue-600 font-medium">- Santiago Sáenz Ariza</cite>
                </footer>
              </blockquote>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-blue-600 to-purple-700">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {currentContent.cta.title}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
              <CardHeader>
                <CardTitle className="text-xl text-white">{currentContent.cta.entrepreneurs}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-white/90 text-sm">{currentContent.cta.entrepreneursDesc}</p>
                <Button className="w-full bg-white text-blue-600 hover:bg-gray-100">
                  {currentContent.cta.buttons.entrepreneurs}
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
              <CardHeader>
                <CardTitle className="text-xl text-white">{currentContent.cta.investors}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-white/90 text-sm">{currentContent.cta.investorsDesc}</p>
                <Button className="w-full bg-white text-purple-600 hover:bg-gray-100">
                  {currentContent.cta.buttons.investors}
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
              <CardHeader>
                <CardTitle className="text-xl text-white">{currentContent.cta.talent}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-white/90 text-sm">{currentContent.cta.talentDesc}</p>
                <Button className="w-full bg-white text-indigo-600 hover:bg-gray-100">
                  {currentContent.cta.buttons.talent}
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Card className="max-w-4xl mx-auto bg-yellow-50 border-yellow-200">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-yellow-800 text-sm font-bold">💡</span>
                  </div>
                  <p className="text-yellow-800 text-sm leading-relaxed">
                    <strong>{language === 'es' ? 'Distinción Importante' : 'Important Distinction'}:</strong> {currentContent.cta.note}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Zap className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold">Ferrix Ventures</span>
              </div>
              <p className="text-gray-400 text-sm">
                {language === 'es' 
                  ? 'El primer AI-first Venture Acceleration Studio de Latinoamérica'
                  : "Latin America's first AI-first Venture Acceleration Studio"
                }
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">{language === 'es' ? 'Servicios' : 'Services'}</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#services" className="hover:text-white transition-colors">Partnership Acceleration</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Acquisition Acceleration</a></li>
                <li><a href="#investors" className="hover:text-white transition-colors">{language === 'es' ? 'Fondo de Inversión' : 'Investment Fund'}</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">{language === 'es' ? 'Empresa' : 'Company'}</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#about" className="hover:text-white transition-colors">{language === 'es' ? 'Nosotros' : 'About'}</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">{language === 'es' ? 'Contacto' : 'Contact'}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">{language === 'es' ? 'Contacto' : 'Contact'}</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <p>📧 {language === 'es' ? 'hola@ferrixventures.com' : 'hello@ferrixventures.com'}</p>
                <p>📍 Bogotá, Colombia</p>
                <p>🌎 {language === 'es' ? 'Sirviendo LATAM y Estados Unidos' : 'Serving LATAM & US'}</p>
              </div>
            </div>
          </div>
          
          <Separator className="my-8 bg-gray-700" />
          
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>&copy; 2025 Ferrix Ventures. {language === 'es' ? 'Todos los derechos reservados.' : 'All rights reserved.'}</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">{language === 'es' ? 'Privacidad' : 'Privacy'}</a>
              <a href="#" className="hover:text-white transition-colors">{language === 'es' ? 'Términos' : 'Terms'}</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
