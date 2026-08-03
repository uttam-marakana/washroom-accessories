import { Link, useParams } from 'react-router-dom';
import { FaCheckCircle, FaWhatsapp } from 'react-icons/fa';
import { FiShoppingCart } from 'react-icons/fi';

import SEO from '@/seo/SEO';
import { productService } from '@/services/productService';
import { APP_CONFIG } from '@/constants/appConfig';
import { ROUTES } from '@/constants/routes';
import { formatCurrency } from '@/utils/helpers';
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import Button from '@/components/Button/Button';
import EmptyState from '@/components/EmptyState/EmptyState';
import ImageGallery from './ImageGallery';
import ProductTabs from './ProductTabs';
import RelatedProducts from './RelatedProducts';
import './ProductDetails.css';

/**
 * Product details page.
 */
function ProductDetails() {
  const { slug } = useParams();
  const product = productService.getBySlug(slug);

  if (!product) {
    return (
      <section className="container page">
        <EmptyState
          title="Product not found"
          description="The product you are looking for doesn't exist."
          action={
            <Button as="link" to={ROUTES.PRODUCTS}>
              Back to Products
            </Button>
          }
        />
      </section>
    );
  }

  const isAvailable = product.availability === 'In Stock';

  return (
    <>
      <SEO
        title={product.name}
        description={product.description}
        canonical={`${APP_CONFIG.url}${ROUTES.PRODUCT_DETAILS.replace(':slug', product.slug)}`}
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'Product',
          name: product.name,
          description: product.description,
          sku: product.sku,
          image: product.image,
          brand: { '@type': 'Brand', name: 'Washroom Accessories' },
        }}
      />
      <section className="container page">
        <Breadcrumb
          items={[
            { label: 'Home', path: ROUTES.HOME },
            { label: 'Products', path: ROUTES.PRODUCTS },
            { label: product.name },
          ]}
        />
        <div className="product-details">
          <div className="product-details__gallery">
            <ImageGallery images={product.gallery} alt={product.name} />
          </div>
          <div className="product-details__info">
            <p className="product-details__category">{product.category}</p>
            <h1 className="product-details__name">{product.name}</h1>
            <p className="product-details__sku">SKU: {product.sku}</p>
            <p className="product-details__price">
              {formatCurrency(product.price)}
            </p>
            <p className="product-details__description">
              {product.description}
            </p>
            <p className="product-details__availability">
              {isAvailable ? (
                <span className="product-details__in-stock">
                  <FaCheckCircle aria-hidden="true" /> In Stock
                </span>
              ) : (
                <span className="product-details__out-of-stock">
                  Out of Stock
                </span>
              )}
            </p>
            <div className="product-details__actions">
              <Button
                variant="primary"
                size="lg"
                disabled={!isAvailable}
                onClick={() => {}}
              >
                <FiShoppingCart aria-hidden="true" /> Add to Cart
              </Button>
              <a
                href={`https://wa.me/${APP_CONFIG.whatsapp}?text=${encodeURIComponent(
                  `Hello, I'm interested in the ${product.name} (${product.sku}).`,
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--secondary btn--lg"
              >
                <FaWhatsapp aria-hidden="true" /> Enquire on WhatsApp
              </a>
            </div>
            <div className="product-details__meta">
              <p>
                <Link to={ROUTES.PRODUCTS}>View all products</Link>
              </p>
            </div>
          </div>
        </div>
        <div className="product-details__tabs">
          <ProductTabs product={product} />
        </div>
      </section>
      <RelatedProducts category={product.category} currentSlug={product.slug} />
    </>
  );
}

export default ProductDetails;
