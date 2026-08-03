import SEO from '@/seo/SEO';
import { pageSEO } from '@/seo/seoConfig';
import PageBanner from '@/components/PageBanner/PageBanner';
import { ROUTES } from '@/constants/routes';
import './PrivacyPolicy.css';

const sections = [
  {
    title: 'Information We Collect',
    body: 'We collect information you provide directly, such as your name, email address, phone number, and any message content when you submit a contact form or newsletter subscription.',
  },
  {
    title: 'How We Use Your Information',
    body: 'We use the information we collect to respond to your inquiries, provide customer support, send newsletters you have opted into, and improve our website and services.',
  },
  {
    title: 'Cookies',
    body: 'Our website may use cookies to enhance your browsing experience and analyze site traffic. You can disable cookies in your browser settings at any time.',
  },
  {
    title: 'Data Sharing',
    body: 'We do not sell, trade, or rent your personal information to third parties. We may share data with service providers who assist us in operating our website, subject to confidentiality obligations.',
  },
  {
    title: 'Your Rights',
    body: 'You have the right to access, correct, or delete your personal information. To exercise these rights, please contact us using the information on our Contact page.',
  },
  {
    title: 'Contact',
    body: 'If you have any questions about this Privacy Policy, please contact us through our Contact page.',
  },
];

/**
 * Privacy Policy page.
 */
function PrivacyPolicy() {
  return (
    <>
      <SEO
        title="Privacy Policy"
        description={pageSEO.privacy.description}
        keywords={pageSEO.privacy.keywords}
      />
      <PageBanner
        title="Privacy Policy"
        breadcrumb={[
          { label: 'Home', path: ROUTES.HOME },
          { label: 'Privacy Policy' },
        ]}
      />
      <section className="section container">
        <div className="legal-content">
          {sections.map((section) => (
            <div key={section.title} className="legal-content__section">
              <h2>{section.title}</h2>
              <p>{section.body}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default PrivacyPolicy;
