import { productService } from '@/services/productService';
import ProductCard from '@/components/ProductCard/ProductCard';
import SectionHeading from '@/components/SectionHeading/SectionHeading';
import './Home.css';

/**
 * Popular products section.
 */
function ProductSection() {
  const products = productService.getPopular();

  return (
    <section className="section section--light bg-light">
      <div className="container">
        <SectionHeading
          eyebrow="Best Sellers"
          title="Popular Products"
          description="Our most-loved washroom accessories, trusted by customers worldwide."
          align="center"
        />
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductSection;
