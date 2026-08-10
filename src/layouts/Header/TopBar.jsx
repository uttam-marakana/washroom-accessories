import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

import { APP_CONFIG } from '@/constants/appConfig';
import './Header.css';

/**
 * The top utility bar (contact info).
 */
function TopBar() {
  return (
    <div className="topbar">
      <div className="container topbar__inner">
        <div className="topbar__contact">
          <a href={APP_CONFIG.phoneHref} className="topbar__link">
            <FaPhoneAlt aria-hidden="true" />
            {APP_CONFIG.phone}
          </a>
          <a href={`mailto:${APP_CONFIG.email}`} className="topbar__link">
            <FaEnvelope aria-hidden="true" />
            {APP_CONFIG.email}
          </a>
        </div>
        <div className="topbar__social">
          <span className="topbar__text">
            <a href="/contact">Get a Quote </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
