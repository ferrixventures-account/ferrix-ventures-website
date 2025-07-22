"use client";

import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { content as contentObj } from '@/content';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const AcquisitionsPage = ({ lang }: { lang: 'en' | 'es' }) => {
  const { language, toggleLanguage, isLangChanging } = useLanguage(lang);
  const c = contentObj[language] || contentObj['en'];
  
  const content = {
    en: {
      hero: {
        headline: 'Ready to Exit or Scale Together?',
        subheadline: 'Partner with Ferrix Ventures for your next chapter',
        description: 'Whether you\'re ready for a strategic exit or want to scale alongside experienced operators, we provide the capital, expertise, and technology to unlock your business\'s full potential.',
        cta: 'Explore Partnership'
      },
      value: {
        title: 'Why Partner with Ferrix Ventures?',
        subtitle: 'We\'re not just investors—we\'re growth partners who understand your journey',
        benefits: [
          {
            icon: '🚀',
            title: 'Proven Growth Methodology',
            description: 'Our systematic approach has helped dozens of businesses achieve 3-10x growth through digital transformation and operational excellence.'
          },
          {
            icon: '💰',
            title: 'Fair Valuations & Fast Decisions',
            description: 'We provide competitive valuations based on your true potential, not just current metrics. Decisions in 30 days, not 6 months.'
          },
          {
            icon: '🤝',
            title: 'Founder-Friendly Approach',
            description: 'We respect the legacy you\'ve built. Whether you stay involved or step back, we ensure your vision and values continue.'
          },
          {
            icon: '⚡',
            title: 'AI & Technology Integration',
            description: 'Access to cutting-edge AI tools and automation systems that would cost hundreds of thousands to develop independently.'
          },
          {
            icon: '🎯',
            title: 'Operational Excellence',
            description: 'Our team of operators, not just financiers, roll up their sleeves to work alongside you in scaling your business.'
          },
          {
            icon: '🌐',
            title: 'Network & Resources',
            description: 'Tap into our network of industry experts, potential customers, and strategic partners to accelerate growth.'
          }
        ]
      },
      models: {
        title: 'Our Investment Tracks',
        subtitle: 'We offer two distinct paths for partnership, tailored to your company’s scale and your personal goals.',
        options: [
          {
            name: 'Partnership Fund',
            description: 'For established businesses looking for a strategic partner to accelerate growth while retaining significant ownership.',
            features: [
              'Targeting businesses with $5M - $50M in revenue',
              'We acquire a 20-49% equity stake',
              'You remain in control, leading the business day-to-day',
              'Access to our capital, technology, and operational expertise',
              'Focused on long-term, sustainable growth'
            ],
            ideal: 'For owners who want to de-risk, take some chips off the table, and gain a powerful growth partner.',
            badge: 'Growth Equity'
          },
          {
            name: 'Acquisition Fund',
            description: 'For business owners ready for a full or majority exit, ensuring your legacy is protected and amplified.',
            features: [
              'Targeting businesses with $10M - $100M in revenue',
              'We acquire a 50-100% equity stake',
              'Flexible transition for the founder (stay on or exit)',
              'Commitment to preserving your company culture and brand',
              'A straightforward, efficient process to acquisition'
            ],
            ideal: 'For founders planning retirement, seeking a new venture, or wanting to secure their financial future.',
            badge: 'Full Acquisition'
          }
        ]
      },
      criteria: {
        title: 'What We Look For',
        subtitle: 'We partner with businesses that have strong fundamentals and growth potential',
        requirements: [
          {
            category: 'Financial Profile',
            items: [
              'Annual Revenue: $5M - $100M',
              'Strong, predictable cash flow',
              'History of profitability',
              'Based in the United States'
            ]
          },
          {
            category: 'Market Position',
            items: [
              'Established customer base',
              'Defensible market position',
              'Growth opportunities in addressable market',
              'Strong brand or reputation in industry'
            ]
          },
          {
            category: 'Operations',
            items: [
              'Scalable business model',
              'Key processes documented',
              'Quality team and culture',
              'Digital transformation potential'
            ]
          }
        ]
      },
      process: {
        title: 'Our Partnership Process',
        subtitle: 'From first conversation to partnership in 30-60 days',
        steps: [
          {
            step: '1',
            title: 'Initial Conversation',
            description: 'We start with a no-pressure conversation to understand your goals, challenges, and vision for the future.',
            duration: '1 week'
          },
          {
            step: '2',
            title: 'Business Assessment',
            description: 'Our team conducts a comprehensive review of your business, financials, and growth potential.',
            duration: '2 weeks'
          },
          {
            step: '3',
            title: 'Partnership Proposal',
            description: 'We present a detailed proposal outlining the partnership structure, valuation, and growth plan.',
            duration: '1 week'
          },
          {
            step: '4',
            title: 'Due Diligence & Legal',
            description: 'Final due diligence, legal documentation, and transition planning to ensure a smooth partnership.',
            duration: '2-4 weeks'
          }
        ]
      },
      cta: {
        title: 'Ready to Explore Your Options?',
        description: 'Every successful business reaches a point where the next chapter requires new resources, expertise, or capital. Let\'s discuss how we can help you achieve your goals.',
        primaryButton: 'Schedule Confidential Discussion',
        note: 'All conversations are confidential and non-binding. No obligation to proceed.'
      }
    },
    es: {
      hero: {
        headline: '¿Listo para Salir o Escalar Juntos?',
        subheadline: 'Asóciate con Ferrix Ventures para tu próximo capítulo',
        description: 'Ya sea que estés listo para una salida estratégica o quieras escalar junto a operadores experimentados, proporcionamos el capital, experiencia y tecnología para desbloquear el potencial completo de tu negocio.',
        cta: 'Explorar Sociedad'
      },
      value: {
        title: '¿Por Qué Asociarse con Ferrix Ventures?',
        subtitle: 'No somos solo inversionistas—somos socios de crecimiento que entienden tu trayectoria',
        benefits: [
          {
            icon: '🚀',
            title: 'Metodología de Crecimiento Probada',
            description: 'Nuestro enfoque sistemático ha ayudado a docenas de negocios a lograr crecimiento 3-10x a través de transformación digital y excelencia operacional.'
          },
          {
            icon: '💰',
            title: 'Valuaciones Justas y Decisiones Rápidas',
            description: 'Proporcionamos valuaciones competitivas basadas en tu verdadero potencial, no solo métricas actuales. Decisiones en 30 días, no 6 meses.'
          },
          {
            icon: '🤝',
            title: 'Enfoque Amigable al Fundador',
            description: 'Respetamos el legado que has construido. Ya sea que permanezcas involucrado o te retires, aseguramos que tu visión y valores continúen.'
          },
          {
            icon: '⚡',
            title: 'Integración de IA y Tecnología',
            description: 'Acceso a herramientas de IA de vanguardia y sistemas de automatización que costarían cientos de miles desarrollar independientemente.'
          },
          {
            icon: '🎯',
            title: 'Excelencia Operacional',
            description: 'Nuestro equipo de operadores, no solo financieros, trabajan codo a codo contigo para escalar tu negocio.'
          },
          {
            icon: '🌐',
            title: 'Red y Recursos',
            description: 'Accede a nuestra red de expertos de la industria, clientes potenciales y socios estratégicos para acelerar el crecimiento.'
          }
        ]
      },
      models: {
        title: 'Nuestras Vías de Inversión',
        subtitle: 'Ofrecemos dos caminos distintos para asociarnos, diseñados según la escala de tu empresa y tus metas personales.',
        options: [
          {
            name: 'Fondo de Asociación',
            description: 'Para empresas establecidas que buscan un socio estratégico para acelerar el crecimiento mientras retienen una participación significativa.',
            features: [
              'Dirigido a empresas con ingresos de $5M - $50M',
              'Adquirimos una participación del 20-49%',
              'Tú mantienes el control, liderando el negocio día a día',
              'Acceso a nuestro capital, tecnología y experiencia operativa',
              'Enfocado en un crecimiento sostenible a largo plazo'
            ],
            ideal: 'Para dueños que quieren reducir riesgos, liquidar parte de su participación y ganar un socio de crecimiento poderoso.',
            badge: 'Capital de Crecimiento'
          },
          {
            name: 'Fondo de Adquisición',
            description: 'Para dueños de negocios listos para una salida total o mayoritaria, asegurando que su legado sea protegido y amplificado.',
            features: [
              'Dirigido a empresas con ingresos de $10M - $100M',
              'Adquirimos una participación del 50-100%',
              'Transición flexible para el fundador (puede continuar o salir)',
              'Compromiso de preservar la cultura y marca de tu empresa',
              'Un proceso de adquisición directo y eficiente'
            ],
            ideal: 'Para fundadores que planean su retiro, buscan un nuevo proyecto o quieren asegurar su futuro financiero.',
            badge: 'Adquisición Completa'
          }
        ]
      },
      criteria: {
        title: 'Lo Que Buscamos',
        subtitle: 'Nos asociamos con negocios que tienen fundamentos sólidos y potencial de crecimiento',
        requirements: [
          {
            category: 'Perfil Financiero',
            items: [
              'Ingresos Anuales: $5M - $100M',
              'Flujo de caja fuerte y predecible',
              'Historial de rentabilidad',
              'Con sede en Estados Unidos'
            ]
          },
          {
            category: 'Posición en el Mercado',
            items: [
              'Base de clientes establecida',
              'Posición defendible en el mercado',
              'Oportunidades de crecimiento en mercado direccionable',
              'Marca fuerte o reputación en la industria'
            ]
          },
          {
            category: 'Operaciones',
            items: [
              'Modelo de negocio escalable',
              'Procesos clave documentados',
              'Equipo y cultura de calidad',
              'Potencial de transformación digital'
            ]
          }
        ]
      },
      process: {
        title: 'Nuestro Proceso de Sociedad',
        subtitle: 'De la primera conversación a la sociedad en 30-60 días',
        steps: [
          {
            step: '1',
            title: 'Conversación Inicial',
            description: 'Comenzamos con una conversación sin presión para entender tus objetivos, desafíos y visión para el futuro.',
            duration: '1 semana'
          },
          {
            step: '2',
            title: 'Evaluación del Negocio',
            description: 'Nuestro equipo conduce una revisión integral de tu negocio, finanzas y potencial de crecimiento.',
            duration: '2 semanas'
          },
          {
            step: '3',
            title: 'Propuesta de Sociedad',
            description: 'Presentamos una propuesta detallada describiendo la estructura de sociedad, valuación y plan de crecimiento.',
            duration: '1 semana'
          },
          {
            step: '4',
            title: 'Due Diligence y Legal',
            description: 'Due diligence final, documentación legal y planificación de transición para asegurar una sociedad suave.',
            duration: '2-4 semanas'
          }
        ]
      },
      cta: {
        title: '¿Listo para Explorar tus Opciones?',
        description: 'Todo negocio exitoso llega a un punto donde el próximo capítulo requiere nuevos recursos, experiencia o capital. Discutamos cómo podemos ayudarte a lograr tus objetivos.',
        primaryButton: 'Programar Discusión Confidencial',
        note: 'Todas las conversaciones son confidenciales y sin compromiso. No hay obligación de proceder.'
      }
    }
  };

  const pageContent = content[language];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header
        language={language}
        toggleLanguage={toggleLanguage}
        navContent={c.nav}
        isLangChanging={isLangChanging}
      />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center bg-white dark:bg-black">
        <div className="relative z-10 max-w-4xl mx-auto px-4 animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 leading-tight text-black dark:text-white">
            {pageContent.hero.headline}
          </h1>
          <p className="text-lg text-black/80 dark:text-white/80 mb-4 max-w-2xl mx-auto">
            {pageContent.hero.subheadline}
          </p>
          <p className="text-base text-black/70 dark:text-white/70 mb-8 max-w-3xl mx-auto">
            {pageContent.hero.description}
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            {pageContent.hero.cta}
          </Button>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">{pageContent.value.title}</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">{pageContent.value.subtitle}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pageContent.value.benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-500 dark:text-gray-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Models */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">{pageContent.models.title}</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">{pageContent.models.subtitle}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {pageContent.models.options.map((model, index) => (
              <Card key={index} className="p-8 relative">
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  {model.badge}
                </Badge>
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">{model.name}</h3>
                  <p className="text-gray-500 dark:text-gray-400 mb-4">{model.description}</p>
                </div>
                <ul className="space-y-3 mb-6">
                  {model.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-300">{model.ideal}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Criteria */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">{pageContent.criteria.title}</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">{pageContent.criteria.subtitle}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {pageContent.criteria.requirements.map((req, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-xl font-semibold mb-4">{req.category}</h3>
                <ul className="space-y-2">
                  {req.items.map((item, i) => (
                    <li key={i} className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">{pageContent.process.title}</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">{pageContent.process.subtitle}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pageContent.process.steps.map((step, index) => (
              <Card key={index} className="p-6 text-center">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-2">{step.description}</p>
                <Badge variant="outline">{step.duration}</Badge>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">{pageContent.cta.title}</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 mb-8">{pageContent.cta.description}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                {pageContent.cta.primaryButton}
              </Button>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">{pageContent.cta.note}</p>
          </div>
        </div>
      </section>

      <Footer content={c.footer} />
    </div>
  );
};

export default function AcquisitionsPageWrapper({ params }: { params: Promise<{ lang: 'en' | 'es' }> }) {
  const [lang, setLang] = React.useState<'en' | 'es'>('en');
  React.useEffect(() => {
    params.then(({ lang }) => setLang(lang === 'es' ? 'es' : 'en'));
  }, [params]);
  return <AcquisitionsPage lang={lang} />;
}
