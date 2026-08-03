import { Link } from 'react-router-dom';

import { categories } from '@/data/categories';
import { ROUTES } from '@/constants/routes';
import './Header.css';

/**
 * Mega menu shown when hovering the Products nav item.
 */
function MegaMenu() {
  return (
    <div className="mega-menu">
      <div className="container mega-menu__inner">
        <div className="mega-menu__col">
          <h4 className="mega-menu__title">Product Categories</h4>
          <ul className="mega-menu__list">
            {categories.slice(0, 10).map((category) => (
              <li key={category.id}>
                <Link
                  to={`${ROUTES.PRODUCTS}?category=${category.slug}`}
                  className="mega-menu__link"
                >
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="mega-menu__col">
          <h4 className="mega-menu__title">Collections</h4>
          <ul className="mega-menu__list">
            {categories.slice(10).map((category) => (
              <li key={category.id}>
                <Link
                  to={`${ROUTES.PRODUCTS}?category=${category.slug}`}
                  className="mega-menu__link"
                >
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MegaMenu;
