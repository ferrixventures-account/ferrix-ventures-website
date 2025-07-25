import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ferrixventures.com'
  const lastModified = new Date()

  const pages = ['', '/about', '/thesis', '/acquisitions', '/acceleration'];
  const languages = ['en', 'es'];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  pages.forEach(page => {
    const alternates = languages.reduce((acc, lang) => {
      acc[lang] = `${baseUrl}/${lang}${page}`;
      return acc;
    }, {} as { [key: string]: string });

    languages.forEach(lang => {
      sitemapEntries.push({
        url: `${baseUrl}/${lang}${page}`,
        lastModified,
        changeFrequency: 'monthly',
        priority: page === '' ? 1 : 0.8,
        alternates: {
          languages: alternates,
        },
      });
    });
  });

  return sitemapEntries
}
