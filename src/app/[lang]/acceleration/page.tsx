"use client";

import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { content as contentObj } from '@/content';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const AccelerationPage = ({ lang }: { lang: 'en' | 'es' }) => {
  const { language, toggleLanguage, isLangChanging } = useLanguage(lang);
  const c = contentObj[language] || contentObj['en'];
  
  const content = {
    en: {
      hero: {
        headline: 'Ferrix Acceleration Program',
        subheadline: 'Transform your $250K-$5M revenue business into a digital powerhouse in just 4 months',
        description: 'Our intensive acceleration program helps established US businesses achieve startup-level growth through digital transformation, AI-powered operations, and scalable go-to-market strategies.',
        cta: 'Apply Now'
      },
      program: {
        title: 'The 4-Month Digital Transformation',
        subtitle: 'From Traditional Business to Digital Leader',
        phases: [
          {
            phase: 'Month 1',
            title: 'Digital Foundation',
            description: 'Complete digital audit, tech stack optimization, and foundational systems setup',
            deliverables: ['Digital infrastructure assessment', 'CRM & automation setup', 'Analytics implementation']
          },
          {
            phase: 'Month 2', 
            title: 'Go-to-Market Revolution',
            description: 'Build scalable customer acquisition systems using internet-first strategies',
            deliverables: ['Digital marketing funnel', 'Content strategy & SEO', 'Social media automation']
          },
          {
            phase: 'Month 3',
            title: 'Operations Excellence',
            description: 'Streamline operations with AI and automation for maximum efficiency',
            deliverables: ['Process automation', 'AI-powered insights', 'Team productivity systems']
          },
          {
            phase: 'Month 4',
            title: 'Scale & Optimize',
            description: 'Launch growth initiatives and establish sustainable scaling systems',
            deliverables: ['Growth experiments', 'Performance optimization', 'Long-term strategy']
          }
        ]
      },
      benefits: {
        title: 'What You\'ll Achieve',
        items: [
          { icon: '🚀', title: 'Revenue Growth', description: '2-5x revenue increase through digital channels' },
          { icon: '🎯', title: 'Customer Acquisition', description: 'Predictable, scalable customer acquisition systems' },
          { icon: '⚡', title: 'Operational Efficiency', description: '40-60% reduction in manual processes' },
          { icon: '📊', title: 'Data-Driven Decisions', description: 'Real-time insights and performance tracking' },
          { icon: '🤖', title: 'AI Integration', description: 'Custom AI solutions for your specific industry' },
          { icon: '🌐', title: 'Digital Presence', description: 'Professional online presence that converts' }
        ]
      },
      pricing: {
        title: 'Investment Options',
        subtitle: 'Choose the model that works best for your business',
        models: [
          {
            name: 'Full Payment',
            price: '$2,500',
            description: 'Complete 4-month program with full ownership of all systems and processes',
            features: ['4-month intensive program', 'Dedicated acceleration team', 'All tools & systems included', 'Ongoing support for 6 months'],
            badge: 'Most Popular'
          },
          {
            name: 'Equity Partnership',
            price: 'FREE',
            description: 'Get the full program at no upfront cost in exchange for 0.75% equity',
            features: ['Zero upfront investment', 'Same comprehensive program', 'Shared success model', 'Long-term partnership'],
            badge: 'Zero Risk'
          },
          {
            name: 'Revenue Share',
            price: 'FREE',
            description: 'Pay nothing upfront, share 25% of additional revenue generated during the program',
            features: ['No upfront costs', 'Pay only for results', 'Performance-based model', '12-month revenue share period'],
            badge: 'Results-Based'
          }
        ]
      },
      cta: {
        title: 'Ready to Transform Your Business?',
        description: 'Join the next cohort of businesses achieving exponential growth through digital transformation.',
        button: 'Apply for Acceleration Program',
        note: 'Limited to 10 businesses per cohort. Next cohort starts in 30 days.'
      }
    },
    es: {
      hero: {
        headline: 'Programa de Aceleración Ferrix',
        subheadline: 'Transforma tu negocio de $250K-$5M en ingresos en una potencia digital en solo 4 meses',
        description: 'Nuestro programa intensivo de aceleración ayuda a negocios establecidos en EE.UU. a lograr crecimiento nivel startup a través de transformación digital, operaciones potenciadas por IA, y estrategias escalables de go-to-market.',
        cta: 'Aplicar Ahora'
      },
      program: {
        title: 'La Transformación Digital de 4 Meses',
        subtitle: 'De Negocio Tradicional a Líder Digital',
        phases: [
          {
            phase: 'Mes 1',
            title: 'Fundación Digital',
            description: 'Auditoría digital completa, optimización de stack tecnológico, y configuración de sistemas fundamentales',
            deliverables: ['Evaluación de infraestructura digital', 'Configuración de CRM y automatización', 'Implementación de analytics']
          },
          {
            phase: 'Mes 2',
            title: 'Revolución Go-to-Market',
            description: 'Construye sistemas escalables de adquisición de clientes usando estrategias internet-first',
            deliverables: ['Embudo de marketing digital', 'Estrategia de contenido y SEO', 'Automatización de redes sociales']
          },
          {
            phase: 'Mes 3',
            title: 'Excelencia Operacional',
            description: 'Optimiza operaciones con IA y automatización para máxima eficiencia',
            deliverables: ['Automatización de procesos', 'Insights potenciados por IA', 'Sistemas de productividad del equipo']
          },
          {
            phase: 'Mes 4',
            title: 'Escalar y Optimizar',
            description: 'Lanza iniciativas de crecimiento y establece sistemas de escalamiento sostenible',
            deliverables: ['Experimentos de crecimiento', 'Optimización de rendimiento', 'Estrategia a largo plazo']
          }
        ]
      },
      benefits: {
        title: 'Lo Que Lograrás',
        items: [
          { icon: '🚀', title: 'Crecimiento de Ingresos', description: 'Aumento de ingresos 2-5x a través de canales digitales' },
          { icon: '🎯', title: 'Adquisición de Clientes', description: 'Sistemas predecibles y escalables de adquisición de clientes' },
          { icon: '⚡', title: 'Eficiencia Operacional', description: '40-60% reducción en procesos manuales' },
          { icon: '📊', title: 'Decisiones Basadas en Datos', description: 'Insights en tiempo real y seguimiento de rendimiento' },
          { icon: '🤖', title: 'Integración de IA', description: 'Soluciones de IA personalizadas para tu industria específica' },
          { icon: '🌐', title: 'Presencia Digital', description: 'Presencia online profesional que convierte' }
        ]
      },
      pricing: {
        title: 'Opciones de Inversión',
        subtitle: 'Elige el modelo que mejor funcione para tu negocio',
        models: [
          {
            name: 'Pago Completo',
            price: '$2,500',
            description: 'Programa completo de 4 meses con propiedad total de todos los sistemas y procesos',
            features: ['Programa intensivo de 4 meses', 'Equipo de aceleración dedicado', 'Todas las herramientas y sistemas incluidos', 'Soporte continuo por 6 meses'],
            badge: 'Más Popular'
          },
          {
            name: 'Sociedad de Equity',
            price: 'GRATIS',
            description: 'Obtén el programa completo sin costo inicial a cambio del 0.75% de equity',
            features: ['Cero inversión inicial', 'Mismo programa integral', 'Modelo de éxito compartido', 'Sociedad a largo plazo'],
            badge: 'Cero Riesgo'
          },
          {
            name: 'Revenue Share',
            price: 'GRATIS',
            description: 'No pagues nada inicial, comparte 25% de los ingresos adicionales generados durante el programa',
            features: ['Sin costos iniciales', 'Paga solo por resultados', 'Modelo basado en rendimiento', 'Período de revenue share de 12 meses'],
            badge: 'Basado en Resultados'
          }
        ]
      },
      cta: {
        title: '¿Listo para Transformar tu Negocio?',
        description: 'Únete a la próxima cohorte de negocios logrando crecimiento exponencial a través de transformación digital.',
        button: 'Aplicar al Programa de Aceleración',
        note: 'Limitado a 10 negocios por cohorte. La próxima cohorte inicia en 30 días.'
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

      {/* Program Overview */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">{pageContent.program.title}</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">{pageContent.program.subtitle}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pageContent.program.phases.map((phase, index) => (
              <Card key={index} className="p-6">
                <Badge className="mb-4">{phase.phase}</Badge>
                <h3 className="text-xl font-semibold mb-3">{phase.title}</h3>
                <p className="text-muted-foreground mb-4">{phase.description}</p>
                <ul className="text-sm space-y-1">
                  {phase.deliverables.map((item, i) => (
                    <li key={i} className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-16">{pageContent.benefits.title}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pageContent.benefits.items.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">{pageContent.pricing.title}</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">{pageContent.pricing.subtitle}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {pageContent.pricing.models.map((model, index) => (
              <Card key={index} className="p-8 relative">
                {model.badge && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    {model.badge}
                  </Badge>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{model.name}</h3>
                  <div className="text-3xl font-bold text-primary mb-2">{model.price}</div>
                  <p className="text-muted-foreground">{model.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {model.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full">
                  {language === 'es' ? 'Seleccionar Plan' : 'Choose Plan'}
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">{pageContent.cta.title}</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 mb-8">{pageContent.cta.description}</p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground mb-4">
              {pageContent.cta.button}
            </Button>
            <p className="text-sm text-gray-500 dark:text-gray-400">{pageContent.cta.note}</p>
          </div>
        </div>
      </section>

      <Footer content={c.footer} />
    </div>
  );
};

export default function AccelerationPageWrapper({ params }: { params: Promise<{ lang: 'en' | 'es' }> }) {
  const [lang, setLang] = React.useState<'en' | 'es'>('en');
  React.useEffect(() => {
    params.then(({ lang }) => setLang(lang === 'es' ? 'es' : 'en'));
  }, [params]);
  return <AccelerationPage lang={lang} />;
}
