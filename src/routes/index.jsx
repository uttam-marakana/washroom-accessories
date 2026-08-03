import { Route, Routes } from 'react-router-dom';

import MainLayout from '@/components/layout/MainLayout';
import Home from '@/pages/Home';
import NotFound from '@/pages/NotFound';

/**
 * Central route configuration.
 * Add new routes here as features are built.
 */
function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
