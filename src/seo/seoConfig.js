import { APP_CONFIG } from '@/constants/appConfig';

/**
 * Default SEO configuration used when a page doesn't override values.
 */
export const defaultSEO = {
  title: APP_CONFIG.name,
  description: APP_CONFIG.tagline,
  url: APP_CONFIG.url,
  image: `${APP_CONFIG.url}/images/placeholders/og-image.svg`,
  type: 'website',
  locale: 'en_US',
  siteName: APP_CONFIG.companyName,
  twitterHandle: '@washroomaccessories',
};

/**
 * Per-page SEO metadata.
 */
export const pageSEO = {
  home: {
    title: 'Home | Washroom Accessories',
    description:
      'Premium washroom accessories and fixtures for modern bathrooms.',
    keywords:
      'washroom accessories, bathroom fixtures, soap holders, grab bars',
  },
  about: {
    title: 'About Us | Washroom Accessories',
    description:
      'Learn about our company, craftsmanship, and commitment to premium washroom accessories.',
    keywords:
      'about washroom accessories, bathroom manufacturer, stainless steel',
  },
  products: {
    title: 'Products | Washroom Accessories',
    description:
      'Browse our full catalog of washroom accessories including soap holders, towel rods, grab bars, and more.',
    keywords:
      'bathroom products, washroom accessories, towel rods, soap dispensers',
  },
  gallery: {
    title: 'Gallery | Washroom Accessories',
    description:
      'Explore our gallery of washroom accessory installations and designs.',
    keywords: 'bathroom gallery, washroom designs, accessory installations',
  },
  contact: {
    title: 'Contact Us | Washroom Accessories',
    description:
      'Get in touch with our team for products, quotes, and support.',
    keywords: 'contact washroom accessories, bathroom quote, support',
  },
  privacy: {
    title: 'Privacy Policy | Washroom Accessories',
    description:
      'Read our privacy policy to understand how we handle your data.',
    keywords: 'privacy policy, data protection',
  },
  terms: {
    title: 'Terms & Conditions | Washroom Accessories',
    description:
      'Review the terms and conditions for using our website and services.',
    keywords: 'terms and conditions, use of service',
  },
  notFound: {
    title: 'Page Not Found | Washroom Accessories',
    description: 'The page you are looking for could not be found.',
    keywords: '404, page not found',
  },
};
