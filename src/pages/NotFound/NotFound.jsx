import SEO from '@/seo/SEO';
import { pageSEO } from '@/seo/seoConfig';
import Button from '@/components/Button/Button';
import { ROUTES } from '@/constants/routes';
import './NotFound.css';

/**
 * 404 page.
 */
function NotFound() {
  return (
    <>
      <SEO
        title="Page Not Found"
        description={pageSEO.notFound.description}
        keywords={pageSEO.notFound.keywords}
      />
      <section className="not-found container">
        <div className="not-found__code">404</div>
        <h1 className="not-found__title">Page Not Found</h1>
        <p className="not-found__text">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Button as="link" to={ROUTES.HOME} variant="primary" size="lg">
          Back to Home
        </Button>
      </section>
    </>
  );
}

export default NotFound;
