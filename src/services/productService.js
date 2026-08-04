import {
  getPopularProducts,
  getProductBySlug,
  getProductsByCategory,
  products,
} from '@/data/products';
import { categories } from '@/data/categories';

/**
 * Normalizes a query string for search:
 * trims, collapses whitespace, converts to lowercase, and escapes
 * regex-special characters so user input is treated as a literal.
 *
 * @param {string} query
 * @returns {string}
 */
function normalizeQuery(query = '') {
  const trimmed = query.trim().replace(/\s+/g, ' ').toLowerCase();
  return trimmed.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/**
 * Labels used for display + searchable synonyms.
 * Keeps search flexible (e.g. "stainless" matches "304 Stainless Steel").
 */
function productSearchFields(product) {
  const category = categories.find((c) => c.slug === product.category);
  return [
    product.name,
    product.description,
    product.category,
    category?.name ?? '',
    product.material,
    product.finish,
    product.color,
    product.sku,
    product.availability,
    ...(product.tags ?? []),
  ].filter(Boolean);
}

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

  /**
   * Searches all products by name, description, category (slug + name),
   * material, finish, color, sku, availability, and tags.
   *
   * @param {string} query
   * @returns {Array}
   */
  search: (query) => {
    const term = normalizeQuery(query);
    if (!term) return products;
    return products.filter((product) =>
      productSearchFields(product).some((field) =>
        field.toLowerCase().includes(term),
      ),
    );
  },

  /**
   * Returns grouped instant-search results.
   * Useful for a search dropdown that shows matching products,
   * categories, and tags separately.
   *
   * @param {string} query
   * @returns {{ products: Array, categories: Array, tags: Array }}
   */
  searchAll: (query) => {
    const term = normalizeQuery(query);
    if (!term) {
      return { products: [], categories: [], tags: [] };
    }

    const matchedProducts = products.filter((product) =>
      productSearchFields(product).some((field) =>
        field.toLowerCase().includes(term),
      ),
    );

    const matchedCategories = categories.filter(
      (category) =>
        category.name.toLowerCase().includes(term) ||
        category.slug.toLowerCase().includes(term) ||
        category.description.toLowerCase().includes(term),
    );

    const matchedTags = [
      ...new Set(matchedProducts.flatMap((product) => product.tags ?? [])),
    ]
      .filter((tag) => tag.toLowerCase().includes(term))
      .slice(0, 8);

    return {
      products: matchedProducts.slice(0, 5),
      categories: matchedCategories.slice(0, 3),
      tags: matchedTags.slice(0, 5),
    };
  },
};

