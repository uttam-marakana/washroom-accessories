import ProductCard from '@/components/ProductCard/ProductCard';
import EmptyState from '@/components/EmptyState/EmptyState';
import './Products.css';

/**
 * Grid of product cards.
 *
 * @param {object} props
 * @param {Array} props.products
 */
function ProductGrid({ products }) {
  if (products.length === 0) {
    return (
      <EmptyState
        title="No products found"
        description="Try adjusting your filters or search."
      />
    );
  }

  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductGrid;
