import SEO from '@/seo/SEO';
import { pageSEO } from '@/seo/seoConfig';
import HeroSection from './HeroSection';
import CategorySection from './CategorySection';
import ProductSection from './ProductSection';
import LatestSection from './LatestSection';
import FeatureSection from './FeatureSection';
import GallerySection from './GallerySection';
import StatsSection from './StatsSection';
import TestimonialSection from './TestimonialSection';
import FAQSection from './FAQSection';
import ContactSection from './ContactSection';
import CTA from '@/components/CTA/CTA';
import './Home.css';

/**
 * Home page.
 */
function Home() {
  return (
    <>
      <SEO
        title="Home"
        description={pageSEO.home.description}
        keywords={pageSEO.home.keywords}
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'Washroom Accessories',
          url: 'https://washroomaccessories.example.com',
        }}
      />
      <HeroSection />
      <CategorySection />
      <ProductSection />
      <LatestSection />
      <FeatureSection />
      <GallerySection />
      <StatsSection />
      <TestimonialSection />
      <FAQSection />
      <CTA
        title="Ready to upgrade your space?"
        description="Get a free quote for our premium washroom accessories today."
      />
      <ContactSection />
    </>
  );
}

export default Home;
