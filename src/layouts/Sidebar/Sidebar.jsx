import { NavLink } from 'react-router-dom';

import { categories } from '@/data/categories';
import { ROUTES } from '@/constants/routes';
import './Sidebar.css';

/**
 * Sidebar listing product categories.
 */
function Sidebar() {
  return (
    <aside className="sidebar">
      <h3 className="sidebar__title">Categories</h3>
      <ul className="sidebar__list">
        <li>
          <NavLink
            to={ROUTES.PRODUCTS}
            end
            className={({ isActive }) =>
              `sidebar__link${isActive ? ' sidebar__link--active' : ''}`
            }
          >
            All Products
          </NavLink>
        </li>
        {categories.map((category) => (
          <li key={category.id}>
            <NavLink
              to={`${ROUTES.PRODUCTS}?category=${category.slug}`}
              className={({ isActive }) =>
                `sidebar__link${isActive ? ' sidebar__link--active' : ''}`
              }
            >
              {category.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
