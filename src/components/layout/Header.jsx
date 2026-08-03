import { Link, NavLink } from 'react-router-dom';

import { siteConfig } from '@/config/site';

/**
 * Site header. Renders the brand and primary navigation.
 * Navigation automatically updates when `siteConfig.nav` changes.
 */
function Header() {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link to="/" className="site-header__brand">
          {siteConfig.name}
        </Link>
        <nav className="site-header__nav" aria-label="Primary">
          {siteConfig.nav.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end
              className={({ isActive }) =>
                `site-header__link${isActive ? ' site-header__link--active' : ''}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
