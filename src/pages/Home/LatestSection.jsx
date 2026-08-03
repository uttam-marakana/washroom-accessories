import { productService } from '@/services/productService';
import ProductCard from '@/components/ProductCard/ProductCard';
import SectionHeading from '@/components/SectionHeading/SectionHeading';
import './Home.css';

/**
 * Latest products section.
 */
function LatestSection() {
  const products = productService.getLatest();

  if (products.length === 0) return null;

  return (
    <section className="section container">
      <SectionHeading
        eyebrow="New Arrivals"
        title="Latest Products"
        description="Fresh from our workshop — the latest additions to the collection."
        align="center"
      />
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default LatestSection;
