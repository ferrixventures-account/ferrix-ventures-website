import React from 'react';
import { content } from '@/content';
import HomePageClient from '@/components/pages/HomePageClient';
import { Metadata } from 'next';

type Props = {
  params: { lang: 'en' | 'es' };
};

export async function generateMetadata({ params: { lang } }: Props): Promise<Metadata> {
  // Ensure we have a valid language, fallback to 'en' if not found
  const validLang = (lang && content[lang]) ? lang : 'en';
  const c = content[validLang];
  
  if (!c || !c.meta) {
    console.error('Content not found for language:', lang, 'Available languages:', Object.keys(content));
    // Fallback to English content
    const fallbackContent = content['en'];
    if (!fallbackContent || !fallbackContent.meta) {
      throw new Error('No valid content found');
    }
  }
  
  const baseUrl = 'https://ferrixventures.com';
  const currentUrl = validLang === 'en' ? baseUrl : `${baseUrl}/es`;
  const alternateUrl = validLang === 'en' ? `${baseUrl}/es` : baseUrl;
  
  return {
    title: c.meta.title,
    description: c.meta.description,
    keywords: c.meta.keywords,
    authors: [{ name: 'Ferrix Ventures' }],
    creator: 'Ferrix Ventures',
    publisher: 'Ferrix Ventures',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: currentUrl,
      languages: {
        'en': baseUrl,
        'es': `${baseUrl}/es`,
        'x-default': baseUrl,
      },
    },
    openGraph: {
      title: c.meta.title,
      description: c.meta.description,
      url: currentUrl,
      siteName: 'Ferrix Ventures',
      locale: lang === 'en' ? 'en_US' : 'es_ES',
      type: 'website',
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: c.meta.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: c.meta.title,
      description: c.meta.description,
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
    verification: {
      google: 'your-google-verification-code',
    },
  };
}

const HomePage: React.FC<Props> = ({ params }) => {
  // Ensure we have a valid language, fallback to 'en' if not found
  const validLang = (params.lang && content[params.lang]) ? params.lang : 'en';
  const c = content[validLang];
  
  if (!c) {
    console.error('Content not found for language:', params.lang, 'Available languages:', Object.keys(content));
    return <div>Content not found</div>;
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Ferrix Ventures',
            description: c.meta.description,
            url: 'https://ferrixventures.com',
            logo: 'https://ferrixventures.com/Ferrix Ventures - 281x132.svg',
            sameAs: [
              'https://linkedin.com/company/ferrix-ventures',
              'https://twitter.com/ferrixventures',
            ],
            contactPoint: {
              '@type': 'ContactPoint',
              contactType: 'Business',
              email: 'hello@ferrixventures.com',
            },
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Miami',
              addressRegion: 'FL',
              addressCountry: 'US',
            },
          }),
        }}
      />
      <HomePageClient 
        lang={validLang}
        content={c}
      />
    </>
  );
};

export default HomePage;