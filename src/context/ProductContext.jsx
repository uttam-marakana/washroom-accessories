/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useMemo, useState } from 'react';

import { productService } from '@/services/productService';

const ProductContext = createContext(null);

/**
 * Product context to share catalog data and search across the app.
 */
export function ProductProvider({ children }) {
  const [query, setQuery] = useState('');

  const products = useMemo(() => productService.getAll(), []);
  const searchResults = useMemo(
    () => (query ? productService.search(query) : products),
    [query, products],
  );

  const value = useMemo(
    () => ({
      products,
      searchResults,
      query,
      setQuery,
      getBySlug: productService.getBySlug,
      getByCategory: productService.getByCategory,
      getPopular: productService.getPopular,
      getLatest: productService.getLatest,
    }),
    [products, searchResults, query],
  );

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
}

export function useProducts() {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProducts must be used within a ProductProvider');
  }
  return context;
}
