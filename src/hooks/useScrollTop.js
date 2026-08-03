import { useEffect } from 'react';

/**
 * Scrolls the window to the top when `pathname` changes.
 * @param {string} pathname - current route pathname
 */
export function useScrollTop(pathname) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
}
