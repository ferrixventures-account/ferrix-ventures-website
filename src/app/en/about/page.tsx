import React from 'react';
import { content } from '@/content';
import { Metadata } from 'next';
import AboutPageClient from '@/components/pages/AboutPageClient';

export async function generateMetadata({ params }: { params: Promise<{ lang: 'en' | 'es' }> }): Promise<Metadata> {
  const c = content.en;
  return {
    title: c.about?.meta?.title || 'About - Ferrix Ventures',
    description: c.about?.meta?.description || 'Learn about Ferrix Ventures, our mission, story, and team.',
    openGraph: {
      title: c.about?.meta?.title || 'About - Ferrix Ventures',
      description: c.about?.meta?.description || 'Learn about Ferrix Ventures, our mission, story, and team.',
      url: 'https://ferrixventures.com/about',
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
      title: c.about?.meta?.title || 'About - Ferrix Ventures',
      description: c.about?.meta?.description || 'Learn about Ferrix Ventures, our mission, story, and team.',
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
  const c = content.en;
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'AboutPage',
            name: c.about?.title || 'About Ferrix Ventures',
            description: c.about?.story,
            mainEntity: {
              '@type': 'Organization',
              name: 'Ferrix Ventures',
              url: 'https://ferrixventures.com',
              logo: 'https://ferrixventures.com/Ferrix Ventures - 281x132.svg',
              sameAs: [
                'https://linkedin.com/company/ferrix-ventures',
                'https://twitter.com/ferrixventures',
              ],
            },
          }),
        }}
      />
      <AboutPageClient lang="en" content={c} />
    </>
  );
};

export default AboutPage;
