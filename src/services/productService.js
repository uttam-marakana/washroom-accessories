import {
  getPopularProducts,
  getProductBySlug,
  getProductsByCategory,
  products,
} from '@/data/products';

/**
 * Product service layer.
 * Currently reads from static data; swap internals for a real API later
 * without changing component call sites.
 */
export const productService = {
  getAll: () => products,
  getBySlug: (slug) => getProductBySlug(slug),
  getByCategory: (category) => getProductsByCategory(category),
  getPopular: () => getPopularProducts(),
  getLatest: () => products.filter((p) => p.isNew),
  search: (query) => {
    const term = query.toLowerCase().trim();
    if (!term) return products;
    return products.filter(
      (p) =>
        p.name.toLowerCase().includes(term) ||
        p.category.toLowerCase().includes(term) ||
        p.description.toLowerCase().includes(term),
    );
  },
};
