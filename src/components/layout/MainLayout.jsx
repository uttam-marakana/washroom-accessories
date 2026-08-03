import { Outlet } from 'react-router-dom';

import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';

/**
 * Shared layout for all routed pages.
 * Use `ScrollToTop` once at the app root so it applies to every navigation.
 */
function MainLayout() {
  return (
    <>
      <Header />
      <main className="site-main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default MainLayout;
