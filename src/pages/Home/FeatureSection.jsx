import { FaShieldAlt, FaGem, FaHandshake, FaAward } from 'react-icons/fa';

import { company } from '@/data/company';
import FeatureCard from '@/components/FeatureCard/FeatureCard';
import SectionHeading from '@/components/SectionHeading/SectionHeading';
import './Home.css';

const icons = [FaShieldAlt, FaGem, FaHandshake, FaAward];

/**
 * Why choose us / features section.
 */
function FeatureSection() {
  return (
    <section className="section container">
      <SectionHeading
        eyebrow="Why Choose Us"
        title="Built for Quality and Durability"
        description="We combine premium materials with expert craftsmanship."
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
    </section>
  );
}

export default FeatureSection;
