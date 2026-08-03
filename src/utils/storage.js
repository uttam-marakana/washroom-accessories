/**
 * Local storage helpers with safe fallbacks.
 */
const storage = typeof window !== 'undefined' ? window.localStorage : null;

export function getItem(key, fallback = null) {
  try {
    const value = storage?.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
}

export function setItem(key, value) {
  try {
    storage?.setItem(key, JSON.stringify(value));
  } catch {
    /* ignore quota / availability errors */
  }
}

export function removeItem(key) {
  try {
    storage?.removeItem(key);
  } catch {
    /* ignore */
  }
}
