import { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiSearch, FiX, FiArrowRight } from 'react-icons/fi';

import { productService } from '@/services/productService';
import { useDebounce } from '@/hooks/useDebounce';
import { routeToSlug } from '@/constants/routes';
import { cn } from '@/utils/helpers';
import './SearchBar.css';

/**
 * Reusable, accessible search bar with:
 * - live debounced filtering (products, categories, tags)
 * - keyboard support (Enter to submit, Escape to close/clear, arrows to navigate)
 * - search-icon click
 * - clear button
 * - loading & no-results states
 * - special-character / empty-input sanitization
 *
 * Works standalone (static data) or via an async `searchFn`.
 *
 * @param {object} props
 * @param {(query: string) => Promise<{products: Array, categories: Array, tags: Array}>} [props.searchFn]
 * @param {(result: object, type: string) => void} [props.onSelect]
 * @param {(query: string) => void} [props.onSearch]
 * @param {string} [props.placeholder]
 * @param {boolean} [props.showResults]
 * @param {string} [props.initialQuery]
 * @param {string} [props.className]
 * @param {object} [props.inputProps]
 */
function SearchBar({
  searchFn,
  onSelect,
  onSearch,
  placeholder = 'Search products...',
  showResults = true,
  initialQuery = '',
  className,
  inputProps,
}) {
  const navigate = useNavigate();
  const inputRef = useRef(null);
  const containerRef = useRef(null);

  const [query, setQuery] = useState(initialQuery);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState({
    products: [],
    categories: [],
    tags: [],
  });
  const [activeIndex, setActiveIndex] = useState(-1);

  const debouncedQuery = useDebounce(query, 300);
  // Keep a ref to the latest onSelect/onSearch so the debounced effect
  // and key handlers always see the current props.
  const handlersRef = useRef({ onSelect, onSearch });
  useEffect(() => {
    handlersRef.current = { onSelect, onSearch };
  }, [onSelect, onSearch]);

  const hasQuery = query.trim().length > 0;

  // --- Live search (debounced) ---
  useEffect(() => {
    if (!showResults || !hasQuery) {
      return;
    }

    let cancelled = false;

    const run = async () => {
      const next = searchFn
        ? await searchFn(debouncedQuery)
        : productService.searchAll(debouncedQuery);
      if (!cancelled) {
        setResults(next);
        setActiveIndex(-1);
        setIsLoading(false);
      }
    };

    run().catch(() => {
      if (!cancelled) {
        setResults({ products: [], categories: [], tags: [] });
        setActiveIndex(-1);
        setIsLoading(false);
      }
    });

    return () => {
      cancelled = true;
    };
  }, [debouncedQuery, hasQuery, searchFn, showResults]);

  // --- Flattened list for keyboard navigation ---
  const flatResults = useMemo(() => {
    const items = [];
    results.products.forEach((p) => items.push({ type: 'product', data: p }));
    results.categories.forEach((c) =>
      items.push({ type: 'category', data: c }),
    );
    results.tags.forEach((t) => items.push({ type: 'tag', data: t }));
    return items;
  }, [results]);

  const totalResults = flatResults.length;

  // Close dropdown on outside click
  useEffect(() => {
    const handleClick = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    setActiveIndex(-1);
    setIsLoading(true);

    // Special-character / empty handling:
    // A query with only whitespace or punctuation is treated as empty.
    const meaningful = value.replace(/[\s.*+?^${}()|[\]\\]/g, '');
    setIsOpen(meaningful.length > 0);
  };

  const submitSearch = (raw = query) => {
    const value = raw.trim();
    if (!value) return;
    setIsOpen(false);
    handlersRef.current.onSearch?.(value);
    navigate(`/products?q=${encodeURIComponent(value)}`);
  };

  const handleSelect = (item) => {
    setIsOpen(false);
    setQuery('');
    setResults({ products: [], categories: [], tags: [] });
    handlersRef.current.onSelect?.(item.data, item.type);
    if (item.type === 'product') {
      navigate(routeToSlug(item.data.slug));
    } else if (item.type === 'category') {
      navigate(`/products?category=${item.data.slug}`);
    } else {
      navigate(`/products?q=${encodeURIComponent(item.data)}`);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (activeIndex >= 0 && flatResults[activeIndex]) {
        handleSelect(flatResults[activeIndex]);
      } else {
        submitSearch();
      }
    } else if (e.key === 'Escape') {
      setIsOpen(false);
      setActiveIndex(-1);
      if (query) {
        e.preventDefault();
        setQuery('');
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (totalResults > 0) {
        setIsOpen(true);
        setActiveIndex((i) => Math.min(i + 1, totalResults - 1));
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, -1));
    }
  };

  const clearSearch = () => {
    setQuery('');
    setResults({ products: [], categories: [], tags: [] });
    setIsOpen(false);
    setActiveIndex(-1);
    inputRef.current?.focus();
  };

  const renderGroup = (label, items, type, getLabel, getMeta) => {
    if (items.length === 0) return null;
    return (
      <div className="search-bar__group" role="group" aria-label={label}>
        <p className="search-bar__group-label">{label}</p>
        <ul className="search-bar__list">
          {items.map((item) => {
            const flatIndex = flatResults.findIndex(
              (r) => r.type === type && r.data === item,
            );
            const isActive = flatIndex === activeIndex;
            return (
              <li key={item.id ?? item.slug ?? item}>
                <button
                  type="button"
                  className={cn(
                    'search-bar__result',
                    isActive && 'search-bar__result--active',
                  )}
                  onMouseEnter={() => setActiveIndex(flatIndex)}
                  onClick={() => handleSelect({ type, data: item })}
                >
                  <span className="search-bar__result-label">
                    {getLabel(item)}
                  </span>
                  {getMeta && (
                    <span className="search-bar__result-meta">
                      {getMeta(item)}
                    </span>
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  };

  const hasAnyResults =
    results.products.length > 0 ||
    results.categories.length > 0 ||
    results.tags.length > 0;

  const showDropdown = showResults && isOpen && hasQuery;

  return (
    <div
      ref={containerRef}
      className={cn('search-bar', className)}
      role="search"
    >
      <FiSearch
        className="search-bar__icon"
        aria-hidden="true"
        onClick={() => {
          if (hasQuery) submitSearch();
          else inputRef.current?.focus();
        }}
      />
      <input
        ref={inputRef}
        type="search"
        className="search-bar__input"
        placeholder={placeholder}
        value={query}
        onChange={handleInputChange}
        onFocus={() => {
          if (hasQuery) setIsOpen(true);
        }}
        onKeyDown={handleKeyDown}
        aria-label="Search products, categories, and tags"
        aria-expanded={showDropdown}
        aria-controls="search-bar-results"
        autoComplete="off"
        {...inputProps}
      />
      {hasQuery && (
        <button
          type="button"
          className="search-bar__clear"
          aria-label="Clear search"
          onClick={clearSearch}
        >
          <FiX aria-hidden="true" />
        </button>
      )}

      {showDropdown && (
        <div id="search-bar-results" className="search-bar__dropdown">
          {isLoading && (
            <div className="search-bar__status" role="status">
              <span className="search-bar__spinner" aria-hidden="true" />
              <span>Searching…</span>
            </div>
          )}

          {!isLoading && hasAnyResults && (
            <>
              {renderGroup(
                'Products',
                results.products,
                'product',
                (p) => p.name,
                (p) => p.category,
              )}
              {renderGroup(
                'Categories',
                results.categories,
                'category',
                (c) => c.name,
              )}
              {renderGroup('Tags', results.tags, 'tag', (t) => t)}
            </>
          )}

          {!isLoading && !hasAnyResults && (
            <div className="search-bar__empty">
              <p className="search-bar__empty-title">No results found</p>
              <p className="search-bar__empty-text">
                Try a different keyword, like &ldquo;towel&rdquo; or
                &ldquo;stainless&rdquo;.
              </p>
            </div>
          )}

          {!isLoading && hasAnyResults && (
            <button
              type="button"
              className="search-bar__submit"
              onClick={() => submitSearch()}
            >
              <span>See all results</span>
              <FiArrowRight aria-hidden="true" />
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
