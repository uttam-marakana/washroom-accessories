import { Helmet } from 'react-helmet-async';

import { APP_CONFIG } from '@/constants/appConfig';
import { defaultSEO } from './seoConfig';

/**
 * SEO component that renders Helmet tags for each page.
 *
 * @param {object} props
 * @param {string} props.title - page title
 * @param {string} props.description - page description
 * @param {string} [props.keywords] - meta keywords
 * @param {string} [props.canonical] - canonical URL
 * @param {string} [props.image] - social share image
 * @param {string} [props.type] - og:type
 * @param {object} [props.structuredData] - JSON-LD structured data
 */
function SEO({
  title,
  description,
  keywords,
  canonical,
  image,
  type = defaultSEO.type,
  structuredData,
}) {
  const fullTitle = title
    ? `${title} | ${APP_CONFIG.companyName}`
    : defaultSEO.title;
  const metaDescription = description || defaultSEO.description;
  const canonicalUrl = canonical || `${APP_CONFIG.url}${canonical || ''}`;
  const shareImage = image || defaultSEO.image;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={shareImage} />
      <meta property="og:site_name" content={defaultSEO.siteName} />
      <meta property="og:locale" content={defaultSEO.locale} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={shareImage} />
      <meta name="twitter:site" content={defaultSEO.twitterHandle} />

      {/* Structured data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
}

export default SEO;
