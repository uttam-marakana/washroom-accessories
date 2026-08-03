/**
 * Central route path constants.
 * Reference these instead of hardcoding paths across the app.
 */
export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  PRODUCTS: '/products',
  PRODUCT_DETAILS: '/products/:slug',
  GALLERY: '/gallery',
  CONTACT: '/contact',
  PRIVACY_POLICY: '/privacy-policy',
  TERMS: '/terms',
  NOT_FOUND: '*',
};

export const routeToSlug = (slug) => `/products/${slug}`;
