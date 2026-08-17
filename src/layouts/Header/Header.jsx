import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiSearch, FiPhone } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

import { APP_CONFIG } from '@/constants/appConfig';
import { useApp } from '@/context/AppContext';
import TopBar from './TopBar';
import Navigation from './Navigation';
import MegaMenu from './MegaMenu';
import MobileMenu from './MobileMenu';
import './Header.css';

import logo from '../../../public/images/storeImages/logo.png';

/**
 * Sticky site header with top bar, navigation, mega menu, and mobile menu.
 */
function Header() {
  const { isMobileMenuOpen, setIsMobileMenuOpen, setIsSearchOpen } = useApp();
  const [isMegaOpen, setIsMegaOpen] = useState(false);

  return (
    <>
      <TopBar />
      <header className="site-header">
        <div className="container site-header__inner">
          <Link to="/" className="site-header__brand">
            <img
              src={logo}
              alt="Washroom Accents"
              className="site-header__brand-logo"
            />
          </Link>

          <Navigation
            onMegaEnter={() => setIsMegaOpen(true)}
            onMegaLeave={() => setIsMegaOpen(false)}
          />

          <div className="site-header__actions">
            <button
              type="button"
              className="site-header__icon-btn"
              aria-label="Search"
              onClick={() => setIsSearchOpen(true)}
            >
              <FiSearch aria-hidden="true" />
            </button>
            <a
              href={APP_CONFIG.phoneHref}
              className="site-header__icon-btn"
              aria-label="Call us"
            >
              <FiPhone aria-hidden="true" />
            </a>
            <a
              href={`https://wa.me/${APP_CONFIG.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="site-header__icon-btn"
              aria-label="WhatsApp"
            >
              <FaWhatsapp aria-hidden="true" />
            </a>
            <button
              type="button"
              className="site-header__mobile-toggle"
              aria-label="Open menu"
              aria-expanded={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <FiMenu aria-hidden="true" />
            </button>
          </div>
        </div>

        {isMegaOpen && <MegaMenu />}
      </header>

      <MobileMenu />
    </>
  );
}

export default Header;
