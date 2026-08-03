import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from 'react-icons/fa';

import SEO from '@/seo/SEO';
import { pageSEO } from '@/seo/seoConfig';
import PageBanner from '@/components/PageBanner/PageBanner';
import ContactForm from '@/components/ContactForm/ContactForm';
import { company } from '@/data/company';
import { ROUTES } from '@/constants/routes';
import './Contact.css';

/**
 * Contact page with form, info, and map.
 */
function Contact() {
  return (
    <>
      <SEO
        title="Contact Us"
        description={pageSEO.contact.description}
        keywords={pageSEO.contact.keywords}
      />
      <PageBanner
        title="Contact Us"
        subtitle="We'd love to hear from you. Reach out for products, quotes, or support."
        breadcrumb={[
          { label: 'Home', path: ROUTES.HOME },
          { label: 'Contact' },
        ]}
      />
      <section className="section container">
        <div className="contact-layout">
          <div className="contact-layout__info">
            <h2 className="contact-layout__heading">Get in Touch</h2>
            <ul className="contact-info">
              <li>
                <FaMapMarkerAlt aria-hidden="true" />
                <div>
                  <h3>Address</h3>
                  <p>{company.address}</p>
                </div>
              </li>
              <li>
                <FaPhoneAlt aria-hidden="true" />
                <div>
                  <h3>Phone</h3>
                  <p>
                    <a href={company.phoneHref}>{company.phone}</a>
                  </p>
                </div>
              </li>
              <li>
                <FaEnvelope aria-hidden="true" />
                <div>
                  <h3>Email</h3>
                  <p>
                    <a href={`mailto:${company.email}`}>{company.email}</a>
                  </p>
                </div>
              </li>
              <li>
                <FaClock aria-hidden="true" />
                <div>
                  <h3>Business Hours</h3>
                  {company.hours.map((h) => (
                    <p key={h.day}>
                      {h.day}: {h.time}
                    </p>
                  ))}
                </div>
              </li>
            </ul>
          </div>
          <div className="contact-layout__form">
            <h2 className="contact-layout__heading">Send a Message</h2>
            <ContactForm />
          </div>
        </div>
      </section>
      <section className="container contact-map">
        <iframe
          title="Company location map"
          src={company.mapEmbedUrl}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="contact-map__frame"
        />
      </section>
    </>
  );
}

export default Contact;
