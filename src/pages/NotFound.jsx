import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

/**
 * 404 page for unmatched routes.
 */
function NotFound() {
  return (
    <section className="container page text-center">
      <Helmet>
        <title>Page Not Found</title>
      </Helmet>
      <h1 className="page__title">404</h1>
      <p className="page__lead">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <p>
        <Link to="/">Back to home</Link>
      </p>
    </section>
  );
}

export default NotFound;
