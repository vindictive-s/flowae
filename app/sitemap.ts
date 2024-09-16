import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://flowae.io',
      lastModified: new Date(),
    },
    {
      url: 'https://flowae.io/services',
      lastModified: new Date(),
    },
    {
      url: 'https://flowae.io/pricing',
      lastModified: new Date(),
    },
    {
      url: 'https://flowae.io/work',
      lastModified: new Date(),
    },
    {
      url: 'https://flowae.io/blog',
      lastModified: new Date(),
    },
    {
      url: 'https://flowae.io/about',
      lastModified: new Date(),
    },
    {
      url: 'https://flowae.io/privacy-policy',
      lastModified: new Date(),
    },
  ];
}