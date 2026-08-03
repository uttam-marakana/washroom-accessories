import { BrowserRouter } from 'react-router-dom';

import ScrollToTop from '@/components/ui/ScrollToTop';
import AppRoutes from '@/routes';

/**
 * App root. Composition order:
 * BrowserRouter -> ScrollToTop -> AppRoutes
 */
function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
