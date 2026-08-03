/**
 * Global site configuration.
 *
 * Central source of truth for site-wide metadata and navigation.
 * Add navigation links here as new routes are introduced.
 */
export const siteConfig = {
  name: 'Washroom Accessories',
  description:
    'Premium washroom accessories and fixtures for modern bathrooms.',
  // Only wire up links for routes that exist. Extend as pages are built.
  nav: [{ label: 'Home', path: '/' }],
};
