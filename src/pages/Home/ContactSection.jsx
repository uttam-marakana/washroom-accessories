import { company } from '@/data/company';
import ContactForm from '@/components/ContactForm/ContactForm';
import SectionHeading from '@/components/SectionHeading/SectionHeading';
import './Home.css';

/**
 * Contact preview section.
 */
function ContactSection() {
  return (
    <section className="section container">
      <SectionHeading
        eyebrow="Get In Touch"
        title="Contact Us"
        description={company.description}
        align="center"
      />
      <div className="contact-section">
        <ContactForm />
      </div>
    </section>
  );
}

export default ContactSection;
