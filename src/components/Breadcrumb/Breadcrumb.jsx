import { Link } from 'react-router-dom';
import { MdChevronRight } from 'react-icons/md';

import './Breadcrumb.css';

/**
 * Breadcrumb navigation.
 *
 * @param {object} props
 * @param {Array<{label: string, path?: string}>} props.items
 */
function Breadcrumb({ items }) {
  return (
    <nav className="breadcrumb" aria-label="Breadcrumb">
      <ol className="breadcrumb__list">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="breadcrumb__item">
              {item.path && !isLast ? (
                <Link to={item.path} className="breadcrumb__link">
                  {item.label}
                </Link>
              ) : (
                <span className="breadcrumb__link" aria-current="page">
                  {item.label}
                </span>
              )}
              {!isLast && (
                <MdChevronRight
                  className="breadcrumb__separator"
                  aria-hidden="true"
                />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export default Breadcrumb;
