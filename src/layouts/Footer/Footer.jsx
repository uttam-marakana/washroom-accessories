import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaChevronDown } from 'react-icons/fa';

import { company } from '@/data/company';
import { navigation } from '@/data/navigation';
import { categories } from '@/data/categories';
import { socialLinks } from '@/data/socialLinks';
import { ROUTES } from '@/constants/routes';
import Newsletter from '@/components/Newsletter/Newsletter';
import './Footer.css';

const socialIconMap = {
  facebook: 'FB',
  instagram: 'IG',
  twitter: 'X',
  linkedin: 'IN',
  youtube: 'YT',
};

/**
 * Footer accordion section.
 * Renders as a normal block on desktop and an accordion on mobile.
 */
function FooterSection({ id, title, children, isOpen, onToggle }) {
  return (
    <div className={`site-footer__section${isOpen ? ' is-open' : ''}`}>
      <h4 className="site-footer__heading">
        <button
          type="button"
          className="site-footer__accordion"
          aria-expanded={isOpen}
          aria-controls={`footer-${id}-content`}
          onClick={onToggle}
        >
          <span>{title}</span>
          <FaChevronDown
            className="site-footer__accordion-icon"
            aria-hidden="true"
          />
        </button>
      </h4>
      <div id={`footer-${id}-content`} className="site-footer__content">
        {children}
      </div>
    </div>
  );
}

/**
 * Site footer with company info, quick links, products, contact, newsletter,
 * map, social links, and copyright. On mobile, the menu columns become an
 * accordion (only one section open at a time).
 */
function Footer() {
  const year = new Date().getFullYear();
  const [openIndex, setOpenIndex] = useState(null);

  // Sections are data-driven so the accordion stays in sync with the grid.
  const sections = [
    {
      id: 'quick-links',
      title: 'Quick Links',
      content: (
        <ul className="site-footer__list">
          {navigation.map((item) => (
            <li key={item.path}>
              <Link to={item.path} className="site-footer__link">
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <Link to={ROUTES.PRIVACY_POLICY} className="site-footer__link">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link to={ROUTES.TERMS} className="site-footer__link">
              Terms &amp; Conditions
            </Link>
          </li>
        </ul>
      ),
    },
    {
      id: 'products',
      title: 'Products',
      content: (
        <ul className="site-footer__list">
          {categories.slice(0, 6).map((category) => (
            <li key={category.id}>
              <Link
                to={`${ROUTES.PRODUCTS}?category=${category.slug}`}
                className="site-footer__link"
              >
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      ),
    },
    {
      id: 'contact',
      title: 'Contact',
      content: (
        <ul className="site-footer__contact">
          <li>
            <FaMapMarkerAlt aria-hidden="true" />
            <span>{company.address}</span>
          </li>
          <li>
            <FaPhoneAlt aria-hidden="true" />
            <a href={company.phoneHref}>{company.phone}</a>
          </li>
          <li>
            <FaEnvelope aria-hidden="true" />
            <a href={`mailto:${company.email}`}>{company.email}</a>
          </li>
        </ul>
      ),
    },
  ];

  const handleToggle = (index) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div className="site-footer__col">
          <h3 className="site-footer__brand">{company.name}</h3>
          <p className="site-footer__text">{company.description}</p>
          <div className="site-footer__social">
            {socialLinks.map((social) => (
              <a
                key={social.id}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="site-footer__social-link"
                aria-label={social.label}
              >
                {socialIconMap[social.id] || social.label[0]}
              </a>
            ))}
          </div>
        </div>

        {sections.map((section, index) => (
          <div className="site-footer__col" key={section.id}>
            <FooterSection
              id={section.id}
              title={section.title}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            >
              {section.content}
            </FooterSection>
          </div>
        ))}
      </div>

      <div className="container site-footer__newsletter">
        <Newsletter />
      </div>

      <div className="container site-footer__map">
        <iframe
          title="Company location map"
          src={company.mapEmbedUrl}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="site-footer__map-frame"
        />
      </div>

      <div className="site-footer__bottom">
        <div className="container site-footer__bottom-inner">
          <p className="site-footer__copyright">
            &copy; {year} {company.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
