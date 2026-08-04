import { BrowserRouter } from 'react-router-dom';

import { AppProvider } from '@/context/AppContext';
import { ProductProvider } from '@/context/ProductContext';
import { ThemeProvider } from '@/context/ThemeContext';
import AppRoutes from '@/router/AppRoutes';
import ErrorBoundary from '@/components/ErrorBoundary/ErrorBoundary';
import ScrollToTop from '@/components/ScrollToTop/ScrollToTop';

/**
 * App root. Composition order:
 * ErrorBoundary -> Providers -> BrowserRouter -> ScrollToTop -> Routes
 */
function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <AppProvider>
          <ProductProvider>
            <BrowserRouter>
              <ScrollToTop />
              <AppRoutes />
            </BrowserRouter>
          </ProductProvider>
        </AppProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
