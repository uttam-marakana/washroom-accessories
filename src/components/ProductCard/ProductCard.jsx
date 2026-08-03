import { Link } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';

import Image from '@/components/Image/Image';
import { routeToSlug } from '@/constants/routes';
import { formatCurrency } from '@/utils/helpers';
import './ProductCard.css';

/**
 * Product card for grids.
 *
 * @param {object} props
 * @param {object} props.product - product data object
 */
function ProductCard({ product }) {
  const { name, category, price, availability, image } = product;
  const isAvailable = availability === 'In Stock';

  return (
    <article className="product-card">
      <Link to={routeToSlug(product.slug)} className="product-card__media">
        <Image
          src={image}
          alt={name}
          aspectRatio="1 / 1"
          className="product-card__image"
        />
        {product.isNew && <span className="product-card__badge">New</span>}
      </Link>
      <div className="product-card__body">
        <p className="product-card__category">{category}</p>
        <h3 className="product-card__title">
          <Link to={routeToSlug(product.slug)}>{name}</Link>
        </h3>
        <div className="product-card__footer">
          <span className="product-card__price">{formatCurrency(price)}</span>
          <button
            type="button"
            className="product-card__cart"
            aria-label={`Add ${name} to cart`}
            disabled={!isAvailable}
          >
            <FiShoppingCart aria-hidden="true" />
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
