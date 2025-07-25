import React from 'react';
import { content } from '@/content';
import { Metadata } from 'next';
import AboutPageClient from '@/components/pages/AboutPageClient';

export async function generateMetadata({ params }: { params: Promise<{ lang: 'en' | 'es' }> }): Promise<Metadata> {
  const c = content.es;
  return {
    title: c.about?.meta?.title || 'Sobre Nosotros - Ferrix Ventures',
    description: c.about?.meta?.description || 'Conoce Ferrix Ventures, nuestra misión, historia y equipo.',
    openGraph: {
      title: c.about?.meta?.title || 'Sobre Nosotros - Ferrix Ventures',
      description: c.about?.meta?.description || 'Conoce Ferrix Ventures, nuestra misión, historia y equipo.',
      url: 'https://ferrixventures.com/es/about',
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'Ferrix Ventures',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: c.about?.meta?.title || 'Sobre Nosotros - Ferrix Ventures',
      description: c.about?.meta?.description || 'Conoce Ferrix Ventures, nuestra misión, historia y equipo.',
      images: ['/og-image.jpg'],
      creator: '@ferrixventures',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

const AboutPage = async () => {
  const c = content.es;
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'AboutPage',
            name: c.about?.title || 'Sobre Ferrix Ventures',
            description: c.about?.story,
            mainEntity: {
              '@type': 'Organization',
              name: 'Ferrix Ventures',
              url: 'https://ferrixventures.com/es',
              logo: 'https://ferrixventures.com/Ferrix Ventures - 281x132.svg',
              sameAs: [
                'https://linkedin.com/company/ferrix-ventures',
                'https://twitter.com/ferrixventures',
              ],
            },
          }),
        }}
      />
      <AboutPageClient lang="es" content={c} />
    </>
  );
};

export default AboutPage;
