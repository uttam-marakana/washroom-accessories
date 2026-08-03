import { useEffect } from 'react';

/**
 * Sets the document title.
 * @param {string} title - page title
 */
export function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title;
  }, [title]);
}
