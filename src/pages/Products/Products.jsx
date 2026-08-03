import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import SEO from '@/seo/SEO';
import { pageSEO } from '@/seo/seoConfig';
import PageBanner from '@/components/PageBanner/PageBanner';
import SearchBar from '@/components/SearchBar/SearchBar';
import { productService } from '@/services/productService';
import { ROUTES } from '@/constants/routes';
import ProductGrid from './ProductGrid';
import ProductFilter from './ProductFilter';
import ProductSidebar from './ProductSidebar';
import './Products.css';

/**
 * Products listing page with filtering and search.
 */
function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get('category') || '';
  const [availability, setAvailability] = useState('');

  const allProducts = useMemo(() => productService.getAll(), []);

  const filtered = useMemo(() => {
    let result = allProducts;
    if (category) result = result.filter((p) => p.category === category);
    if (availability)
      result = result.filter((p) => p.availability === availability);
    return result;
  }, [allProducts, category, availability]);

  const handleCategoryChange = (value) => {
    if (value) setSearchParams({ category: value });
    else setSearchParams({});
  };

  return (
    <>
      <SEO
        title="Products"
        description={pageSEO.products.description}
        keywords={pageSEO.products.keywords}
      />
      <PageBanner
        title="Our Products"
        subtitle="Explore our full range of premium washroom accessories."
        breadcrumb={[
          { label: 'Home', path: ROUTES.HOME },
          { label: 'Products' },
        ]}
      />
      <section className="section container products-layout">
        <aside className="products-layout__sidebar">
          <ProductSidebar />
        </aside>
        <div className="products-layout__main">
          <div className="products-layout__toolbar">
            <SearchBar />
            <ProductFilter
              category={category}
              onCategoryChange={handleCategoryChange}
              availability={availability}
              onAvailabilityChange={setAvailability}
            />
          </div>
          <ProductGrid products={filtered} />
        </div>
      </section>
    </>
  );
}

export default Products;
