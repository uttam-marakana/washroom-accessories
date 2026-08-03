import { productService } from '@/services/productService';
import ProductCard from '@/components/ProductCard/ProductCard';
import SectionHeading from '@/components/SectionHeading/SectionHeading';
import './ProductDetails.css';

/**
 * Related products from the same category.
 *
 * @param {object} props
 * @param {string} props.category
 * @param {string} props.currentSlug
 */
function RelatedProducts({ category, currentSlug }) {
  const related = productService
    .getByCategory(category)
    .filter((p) => p.slug !== currentSlug)
    .slice(0, 4);

  if (related.length === 0) return null;

  return (
    <section className="section container">
      <SectionHeading
        eyebrow="You May Also Like"
        title="Related Products"
        align="center"
      />
      <div className="product-grid">
        {related.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default RelatedProducts;
