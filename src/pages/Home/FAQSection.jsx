import FAQ from '@/components/FAQ/FAQ';
import SectionHeading from '@/components/SectionHeading/SectionHeading';
import './Home.css';

/**
 * FAQ section.
 */
function FAQSection() {
  return (
    <section className="section section--light bg-light">
      <div className="container">
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently Asked Questions"
          description="Answers to common questions about our products."
          align="center"
        />
        <div className="faq-container">
          <FAQ />
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
