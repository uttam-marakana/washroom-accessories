import { APP_CONFIG } from '@/constants/appConfig';

/**
 * Company information used across the site.
 */
export const company = {
  name: APP_CONFIG.companyName,
  tagline: APP_CONFIG.tagline,
  description:
    'We manufacture premium stainless steel washroom accessories for residential and commercial spaces. From soap holders to grab bars, our products combine durability, modern design, and superior craftsmanship.',
  foundedYear: 2019,
  phone: APP_CONFIG.phone,
  phoneHref: APP_CONFIG.phoneHref,
  whatsapp: APP_CONFIG.whatsapp,
  email: APP_CONFIG.email,
  address: APP_CONFIG.address,
  mapEmbedUrl: APP_CONFIG.mapEmbedUrl,
  hours: [
    { day: 'Monday – Friday', time: '9:00 AM – 6:00 PM' },
    { day: 'Saturday', time: '10:00 AM – 4:00 PM' },
    { day: 'Sunday', time: 'Closed' },
  ],
  whyChooseUs: [
    {
      title: 'Premium Materials',
      description:
        'We use high-grade stainless steel and brass for long-lasting durability and corrosion resistance.',
    },
    {
      title: 'Modern Design',
      description:
        'Our products feature clean, contemporary aesthetics that complement any bathroom style.',
    },
    {
      title: 'Expert Craftsmanship',
      description:
        'Every product is precision-engineered and quality-checked to meet international standards.',
    },
    {
      title: 'Trusted Worldwide',
      description:
        'Hundreds of hotels, offices, and homes trust our washroom accessories for daily use.',
    },
  ],
  statistics: [
    { label: 'Years in Business', value: 7.5 },
    { label: 'Products', value: 500 },
    { label: 'Happy Clients', value: 10000 },
    { label: 'Countries Served', value: 20 },
  ],
};
