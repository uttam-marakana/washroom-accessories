import { Link } from 'react-router-dom';

import Image from '@/components/Image/Image';
import { ROUTES } from '@/constants/routes';
import './CategoryCard.css';

/**
 * Category card linking to a filtered product list.
 *
 * @param {object} props
 * @param {object} props.category - category data object
 */
function CategoryCard({ category }) {
  return (
    <Link
      to={`${ROUTES.PRODUCTS}?category=${category.slug}`}
      className="category-card"
    >
      <div className="category-card__media">
        <Image
          src={category.image}
          alt={category.name}
          aspectRatio="1 / 1"
          className="category-card__image"
        />
      </div>
      <div className="category-card__body">
        <h3 className="category-card__name">{category.name}</h3>
      </div>
    </Link>
  );
}

export default CategoryCard;
