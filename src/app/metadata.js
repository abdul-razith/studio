import { siteConfig } from '../config/site';

export const metadata = {
  metadataBase: new URL('https://your-domain.com'),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'Portfolio',
    'Web Developer',
    'React Developer',
    'Frontend Developer',
    'Next.js Developer',
  ],
  authors: [
    {
      name: siteConfig.name,
    },
  ],
  creator: siteConfig.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://your-domain.com',
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    creator: '@yourtwitterhandle',
  },
  robots: {
    index: true,
    follow: true,
  },
}; 