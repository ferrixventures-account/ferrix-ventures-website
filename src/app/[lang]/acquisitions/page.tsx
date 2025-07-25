import React from 'react';
import { Metadata } from 'next';
import { content } from '@/content';
import AcquisitionsPageClient from '@/components/pages/AcquisitionsPageClient';

export async function generateMetadata({ params }: { params: Promise<{ lang: 'en' | 'es' }> }): Promise<Metadata> {
  const { lang } = await params;
  const c = content[lang]?.acquisitions.meta || content.en.acquisitions.meta;
  const baseUrl = 'https://ferrixventures.com';

  return {
    title: c.title,
    description: c.description,
    keywords: c.keywords,
    alternates: {
      canonical: `${baseUrl}/${lang}/acquisitions`,
      languages: {
        'en': `${baseUrl}/en/acquisitions`,
        'es': `${baseUrl}/es/acquisitions`,
        'x-default': `${baseUrl}/en/acquisitions`,
      },
    },
    openGraph: {
      title: c.title,
      description: c.description,
      url: `${baseUrl}/${lang}/acquisitions`,
      siteName: 'Ferrix Ventures',
      images: [
        {
          url: `${baseUrl}/og-acquisitions.jpg`, // Specific OG image for acquisitions
          width: 1200,
          height: 630,
        },
      ],
      locale: lang === 'es' ? 'es_ES' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: c.title,
      description: c.description,
      images: [`${baseUrl}/og-acquisitions.jpg`], // Specific OG image for acquisitions
    },
  };
}

export default async function AcquisitionsPage({ params }: { params: Promise<{ lang: 'en' | 'es' }> }) {
  const { lang } = await params;
  const pageContent = content[lang] || content.en;

  return <AcquisitionsPageClient lang={lang} content={pageContent} />;
}
