import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  lang: 'en' | 'es';
  url: string;
  imageUrl?: string;
  author?: string;
  keywords?: string[];
  type?: string;
  logoUrl?: string;
  socials?: { [key: string]: string };
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  lang,
  url,
  imageUrl = '/Ferrix Ventures - 281x132.svg',
  author = 'Ferrix Ventures',
  keywords = [],
  type = 'website',
  logoUrl = '/Ferrix Ventures - 281x132.svg',
  socials = {},
}) => {
  const socialLinks = Object.values(socials);
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: title,
    url: url,
    logo: logoUrl,
    description: description,
    sameAs: socialLinks,
  };

  const keywordsString = keywords.join(', ');

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      meta={[
        // Standard SEO
        {
          name: `description`,
          content: description,
        },
        {
          name: `keywords`,
          content: keywordsString,
        },
        {
          name: `author`,
          content: author,
        },
        // OpenGraph
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: description,
        },
        {
          property: `og:type`,
          content: type,
        },
        {
          property: `og:url`,
          content: url,
        },
        {
          property: `og:site_name`,
          content: title,
        },
        {
          property: `og:locale`,
          content: lang === 'es' ? 'es_ES' : 'en_US',
        },
        // PNG as primary and only og:image
        {
          property: `og:image`,
          content: '/Ferrix Ventures - 281x132 - 3x.png',
        },
        {
          property: `og:image:type`,
          content: 'image/png',
        },
        {
          property: `og:image:width`,
          content: '843',
        },
        {
          property: `og:image:height`,
          content: '396',
        },
        {
          property: `og:image:alt`,
          content: 'Ferrix Ventures Logo',
        },
        // Twitter
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: description,
        },
        // Twitter PNG only
        {
          name: `twitter:image`,
          content: '/Ferrix Ventures - 281x132 - 3x.png',
        },
        {
          name: `twitter:image:alt`,
          content: 'Ferrix Ventures Logo',
        },
        // Twitter handle placeholders
        {
          name: `twitter:site`,
          content: '@ferrixventures', // Replace with actual handle if available
        },
        {
          name: `twitter:creator`,
          content: '@ferrixventures', // Replace with actual handle if available
        },
      ]}
    >
      <link rel="canonical" href={url} />
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default SEO;
