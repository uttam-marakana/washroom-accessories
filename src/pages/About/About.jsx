import { FaShieldAlt, FaGem, FaHandshake, FaAward } from 'react-icons/fa';

import SEO from '@/seo/SEO';
import { pageSEO } from '@/seo/seoConfig';
import PageBanner from '@/components/PageBanner/PageBanner';
import SectionHeading from '@/components/SectionHeading/SectionHeading';
import FeatureCard from '@/components/FeatureCard/FeatureCard';
import CTA from '@/components/CTA/CTA';
import { company } from '@/data/company';
import { ROUTES } from '@/constants/routes';
import './About.css';

const icons = [FaShieldAlt, FaGem, FaHandshake, FaAward];

/**
 * About Us page.
 */
function About() {
  return (
    <>
      <SEO
        title="About Us"
        description={pageSEO.about.description}
        keywords={pageSEO.about.keywords}
      />
      <PageBanner
        title="About Us"
        subtitle="Committed to quality washroom accessories since 2005."
        breadcrumb={[
          { label: 'Home', path: ROUTES.HOME },
          { label: 'About Us' },
        ]}
      />
      <section className="section container">
        <SectionHeading
          eyebrow="Our Story"
          title="About Washroom Accessories"
          description={company.description}
        />
        <div className="about__content">
          <p>
            For over {company.foundedYear - 2000} years, we have been a leading
            manufacturer and supplier of premium washroom accessories. Our
            mission is to deliver products that combine functionality, safety,
            and modern aesthetics.
          </p>
          <p>
            We serve residential, commercial, and hospitality clients with a
            growing catalog of over 500 products. Every item is crafted with
            attention to detail and built to last.
          </p>
        </div>
      </section>

      <section className="section section--light bg-light">
        <div className="container">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="What Sets Us Apart"
            align="center"
          />
          <div className="feature-grid">
            {company.whyChooseUs.map((feature, index) => {
              const Icon = icons[index % icons.length];
              return (
                <FeatureCard
                  key={feature.title}
                  icon={<Icon aria-hidden="true" />}
                  title={feature.title}
                  description={feature.description}
                />
              );
            })}
          </div>
        </div>
      </section>

      <CTA
        title="Partner with us for your next project"
        description="Get in touch to discuss bulk orders, custom finishes, or distribution."
      />
    </>
  );
}

export default About;
