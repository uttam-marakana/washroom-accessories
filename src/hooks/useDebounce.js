import { useEffect, useState } from 'react';

/**
 * Returns a debounced version of `value` that only updates after `delay` ms.
 * @param {*} value
 * @param {number} delay - delay in milliseconds
 * @returns {*}
 */
export function useDebounce(value, delay = 300) {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);

  return debounced;
}
