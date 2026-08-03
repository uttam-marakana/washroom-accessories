import { NavLink } from 'react-router-dom';

import { navigation } from '@/data/navigation';
import './Header.css';

/**
 * Desktop primary navigation.
 *
 * @param {object} props
 * @param {function} [props.onMegaEnter] - callback when Products is hovered
 * @param {function} [props.onMegaLeave]
 */
function Navigation({ onMegaEnter, onMegaLeave }) {
  return (
    <nav className="navigation" aria-label="Primary">
      <ul className="navigation__list">
        {navigation.map((item) => (
          <li
            key={item.path}
            className="navigation__item"
            onMouseEnter={item.mega ? onMegaEnter : undefined}
            onMouseLeave={item.mega ? onMegaLeave : undefined}
          >
            <NavLink
              to={item.path}
              end
              className={({ isActive }) =>
                `navigation__link${isActive ? ' navigation__link--active' : ''}`
              }
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
