import { NavLink } from 'react-router-dom';
import { FiX } from 'react-icons/fi';

import { navigation } from '@/data/navigation';
import { useApp } from '@/context/AppContext';
import './Header.css';

/**
 * Mobile slide-in navigation menu.
 */
function MobileMenu() {
  const { isMobileMenuOpen, setIsMobileMenuOpen } = useApp();

  return (
    <div
      className={`mobile-menu${isMobileMenuOpen ? ' mobile-menu--open' : ''}`}
    >
      <div className="mobile-menu__header">
        <button
          type="button"
          className="mobile-menu__close"
          aria-label="Close menu"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <FiX aria-hidden="true" />
        </button>
      </div>
      <nav className="mobile-menu__nav" aria-label="Mobile">
        <ul className="mobile-menu__list">
          {navigation.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                end
                className={({ isActive }) =>
                  `mobile-menu__link${isActive ? ' mobile-menu__link--active' : ''}`
                }
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default MobileMenu;
