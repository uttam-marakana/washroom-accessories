import { Helmet } from 'react-helmet-async';

import { siteConfig } from '@/config/site';

/**
 * Home placeholder page.
 * Replace this with the real landing page in a future increment.
 */
function Home() {
  return (
    <section className="container page">
      <Helmet>
        <title>{siteConfig.name}</title>
        <meta name="description" content={siteConfig.description} />
      </Helmet>
      <h1 className="page__title">Home</h1>
      <p className="page__lead">
        This is a placeholder home page. The washroom accessories storefront and
        catalog will be built here incrementally.
      </p>
    </section>
  );
}

export default Home;
