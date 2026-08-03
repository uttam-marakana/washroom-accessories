import { Outlet, useLocation } from 'react-router-dom';

import Header from '@/layouts/Header/Header';
import Footer from '@/layouts/Footer/Footer';
import BackToTop from '@/components/BackToTop/BackToTop';
import FloatingWhatsApp from '@/components/FloatingWhatsApp/FloatingWhatsApp';
import { useScrollTop } from '@/hooks/useScrollTop';

/**
 * Shared layout for all routed pages.
 * Includes header, footer, and floating widgets.
 */
function MainLayout() {
  const { pathname } = useLocation();
  useScrollTop(pathname);

  return (
    <>
      <Header />
      <main className="site-main">
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
      <FloatingWhatsApp />
    </>
  );
}

export default MainLayout;
