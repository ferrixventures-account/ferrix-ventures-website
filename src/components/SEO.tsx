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
  imageUrl = 'https://ferrixventures.com/og-image.jpg',
  author = 'Ferrix Ventures',
  keywords = [],
  type = 'website',
  logoUrl = 'https://ferrixventures.com/logo.png', // Assuming a logo path
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
          property: `og:image`,
          content: imageUrl,
        },
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
        {
          name: `twitter:image`,
          content: imageUrl,
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
