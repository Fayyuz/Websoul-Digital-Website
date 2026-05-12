import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://websoul.com.au';
  const lastModified = new Date();

  return [
    { url: baseUrl, lastModified, changeFrequency: 'monthly', priority: 1, },
    { url: `${baseUrl}/trust-services`, lastModified, changeFrequency: 'monthly', priority: 0.8, },
    { url: `${baseUrl}/digital-consultancy`, lastModified, changeFrequency: 'monthly', priority: 0.8, },
    { url: `${baseUrl}/disp-advisory`, lastModified, changeFrequency: 'monthly', priority: 0.8, },
    { url: `${baseUrl}/disp-advisory/essential-eight-ml2`, lastModified, changeFrequency: 'monthly', priority: 0.85, },
    { url: `${baseUrl}/about`, lastModified, changeFrequency: 'monthly', priority: 0.5, },
    { url: `${baseUrl}/contact`, lastModified, changeFrequency: 'monthly', priority: 0.5, },
    { url: `${baseUrl}/careers`, lastModified, changeFrequency: 'monthly', priority: 0.5, },
    { url: `${baseUrl}/security`, lastModified, changeFrequency: 'monthly', priority: 0.5, },
    { url: `${baseUrl}/capability-statement`, lastModified, changeFrequency: 'monthly', priority: 0.5, },
    { url: `${baseUrl}/case-studies`, lastModified, changeFrequency: 'monthly', priority: 0.5, },
    { url: `${baseUrl}/insights`, lastModified, changeFrequency: 'monthly', priority: 0.5, },
  ];
}
