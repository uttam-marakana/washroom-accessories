import { siteConfig } from '@/config/site';

/**
 * Site footer. Renders the copyright line with the current year.
 */
function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <p className="site-footer__text">
          &copy; {year} {siteConfig.name}. All rights reserved.
        </p>
        <p className="site-footer__text">Built with love and React.</p>
      </div>
    </footer>
  );
}

export default Footer;
