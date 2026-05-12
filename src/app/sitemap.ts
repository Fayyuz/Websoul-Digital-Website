import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://websoul.digital';
  const lastModified = new Date();

  return [
    { url: baseUrl, lastModified, changeFrequency: 'monthly', priority: 1, },
    { url: `${baseUrl}/capabilities`, lastModified, changeFrequency: 'monthly', priority: 0.8, },
    { url: `${baseUrl}/trust-status`, lastModified, changeFrequency: 'monthly', priority: 0.8, },
    { url: `${baseUrl}/about`, lastModified, changeFrequency: 'monthly', priority: 0.5, },
    { url: `${baseUrl}/contact`, lastModified, changeFrequency: 'monthly', priority: 0.5, },
  ];
}
