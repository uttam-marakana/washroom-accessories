import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import MainLayout from '@/layouts/MainLayout';
import Loader from '@/components/Loader/Loader';
import { ROUTES } from '@/constants/routes';

// Lazy-loaded pages for better performance.
const Home = lazy(() => import('@/pages/Home/Home'));
const About = lazy(() => import('@/pages/About/About'));
const Products = lazy(() => import('@/pages/Products/Products'));
const ProductDetails = lazy(
  () => import('@/pages/ProductDetails/ProductDetails'),
);
const Gallery = lazy(() => import('@/pages/Gallery/Gallery'));
const Contact = lazy(() => import('@/pages/Contact/Contact'));
const PrivacyPolicy = lazy(() => import('@/pages/PrivacyPolicy/PrivacyPolicy'));
const Terms = lazy(() => import('@/pages/Terms/Terms'));
const NotFound = lazy(() => import('@/pages/NotFound/NotFound'));

/**
 * Central route configuration.
 */
function AppRoutes() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path={ROUTES.ABOUT} element={<About />} />
          <Route path={ROUTES.PRODUCTS} element={<Products />} />
          <Route path={ROUTES.PRODUCT_DETAILS} element={<ProductDetails />} />
          <Route path={ROUTES.GALLERY} element={<Gallery />} />
          <Route path={ROUTES.CONTACT} element={<Contact />} />
          <Route path={ROUTES.PRIVACY_POLICY} element={<PrivacyPolicy />} />
          <Route path={ROUTES.TERMS} element={<Terms />} />
          <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default AppRoutes;
