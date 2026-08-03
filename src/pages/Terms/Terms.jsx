import SEO from '@/seo/SEO';
import { pageSEO } from '@/seo/seoConfig';
import PageBanner from '@/components/PageBanner/PageBanner';
import { ROUTES } from '@/constants/routes';
import './Terms.css';

const sections = [
  {
    title: 'Acceptance of Terms',
    body: 'By accessing and using this website, you accept and agree to be bound by these Terms and Conditions. If you do not agree, please do not use our website.',
  },
  {
    title: 'Use of Website',
    body: 'You agree to use this website for lawful purposes only and in a manner that does not infringe the rights of or restrict the use of this website by any third party.',
  },
  {
    title: 'Intellectual Property',
    body: 'All content on this website, including text, graphics, logos, and images, is the property of our company and is protected by applicable intellectual property laws.',
  },
  {
    title: 'Product Information',
    body: 'We strive to display accurate product information, but we do not warrant that the descriptions, colors, or other content are error-free. Prices are subject to change without notice.',
  },
  {
    title: 'Limitation of Liability',
    body: 'We shall not be liable for any damages arising from the use of or inability to use this website, or any products purchased through it.',
  },
  {
    title: 'Governing Law',
    body: 'These Terms and Conditions shall be governed by and construed in accordance with the laws of the jurisdiction in which our company operates.',
  },
];

/**
 * Terms & Conditions page.
 */
function Terms() {
  return (
    <>
      <SEO
        title="Terms & Conditions"
        description={pageSEO.terms.description}
        keywords={pageSEO.terms.keywords}
      />
      <PageBanner
        title="Terms & Conditions"
        breadcrumb={[
          { label: 'Home', path: ROUTES.HOME },
          { label: 'Terms & Conditions' },
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

export default Terms;
