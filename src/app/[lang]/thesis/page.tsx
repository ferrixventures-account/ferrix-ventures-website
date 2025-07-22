import React from 'react';
import { content } from '@/content';
import ThesisPageClient from '@/components/pages/ThesisPageClient';
import { Metadata } from 'next';



export async function generateMetadata({ params }: { params: Promise<{ lang: 'en' | 'es' }> }): Promise<Metadata> {
  const { lang } = await params;
  // Ensure we have a valid language, fallback to 'en' if not found
  const validLang = (lang && content[lang]) ? lang : 'en';
  const c = content[validLang];
  
  if (!c || !c.thesis || !c.thesis.meta) {
    console.error('Thesis content not found for language:', lang, 'Available languages:', Object.keys(content));
    throw new Error('No valid thesis content found');
  }
  
  const baseUrl = 'https://ferrixventures.com';
  const currentUrl = validLang === 'en' ? `${baseUrl}/thesis` : `${baseUrl}/es/thesis`;
  
  return {
    title: c.thesis.meta.title,
    description: c.thesis.meta.description,
    keywords: ['venture capital', 'investment thesis', 'AI acceleration', 'business transformation', 'startup funding'],
    authors: [{ name: 'Ferrix Ventures' }],
    creator: 'Ferrix Ventures',
    publisher: 'Ferrix Ventures',
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: currentUrl,
      languages: {
        'en': `${baseUrl}/thesis`,
        'es': `${baseUrl}/es/thesis`,
        'x-default': `${baseUrl}/thesis`,
      },
    },
    openGraph: {
      title: c.thesis.meta.title,
      description: c.thesis.meta.description,
      url: currentUrl,
      siteName: 'Ferrix Ventures',
      locale: lang === 'en' ? 'en_US' : 'es_ES',
      type: 'article',
      images: [
        {
          url: '/og-thesis.jpg',
          width: 1200,
          height: 630,
          alt: c.thesis.meta.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: c.thesis.meta.title,
      description: c.thesis.meta.description,
      images: ['/og-thesis.jpg'],
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

const ThesisPage = async ({ params }: { params: Promise<{ lang: 'en' | 'es' }> }) => {
  const { lang } = await params;
  // Ensure we have a valid language, fallback to 'en' if not found
  const validLang = (lang && content[lang]) ? lang : 'en';
  const c = content[validLang];

  if (!c || !c.thesis) {
    console.error('Thesis content not found for language:', lang, 'Available languages:', Object.keys(content));
    return <div>Content not found</div>;
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: c.thesis.meta.title,
            description: c.thesis.meta.description,
            author: {
              '@type': 'Organization',
              name: 'Ferrix Ventures',
              url: 'https://ferrixventures.com',
            },
            publisher: {
              '@type': 'Organization',
              name: 'Ferrix Ventures',
              logo: {
                '@type': 'ImageObject',
                url: 'https://ferrixventures.com/Ferrix Ventures - 281x132.svg',
              },
            },
            datePublished: '2024-01-01',
            dateModified: new Date().toISOString().split('T')[0],
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': `https://ferrixventures.com${lang === 'es' ? '/es' : ''}/thesis`,
            },
          }),
        }}
      />
      <ThesisPageClient 
        lang={validLang}
        content={c.thesis}
        navContent={c.nav}
        footerContent={c.footer}
      />
    </>
  );
};

export default ThesisPage;
