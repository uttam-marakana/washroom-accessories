import Hero from '@/components/Hero/Hero';

/**
 * Home hero section wrapper — auto-sliding hero carousel.
 */
const heroSlides = [
  {
    image:
      '/images/storeImages/heroBanners/Home-hero-banner1.png',
    title: 'Premium Washroom Accessories for Modern Living',
    subtitle:
      'Discover durable, elegant, and beautifully crafted washroom fixtures for your home and business.',
  },
  {
    image:
      '/images/storeImages/heroBanners/Home-hero-banner2.png',
    title: 'Elevate Your Bathroom Experience',
    subtitle:
      'Explore our curated collection of premium fixtures designed to blend style with functionality.',
  },
  {
    image:
      '/images/storeImages/heroBanners/Home-hero-banner3.png',
    title: 'Style Meets Durability',
    subtitle:
      'From grab bars to towel rods, find the perfect accessories to complete your space.',
  },
];

function HeroSection() {
  return <Hero slides={heroSlides} interval={5000} />;
}

export default HeroSection;
