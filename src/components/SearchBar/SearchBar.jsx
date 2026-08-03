import { FiSearch } from 'react-icons/fi';

import { useProducts } from '@/context/ProductContext';
import './SearchBar.css';

/**
 * Search input bound to the product context.
 */
function SearchBar() {
  const { query, setQuery } = useProducts();

  return (
    <div className="search-bar">
      <FiSearch className="search-bar__icon" aria-hidden="true" />
      <input
        type="search"
        className="search-bar__input"
        placeholder="Search products..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        aria-label="Search products"
      />
    </div>
  );
}

export default SearchBar;
