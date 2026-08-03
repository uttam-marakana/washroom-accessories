/**
 * Validation helpers.
 */

/** Validates an email address. */
export function isValidEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}

/** Validates a non-empty required field. */
export function isRequired(value) {
  return value !== undefined && value !== null && String(value).trim() !== '';
}

/** Validates a US phone number format (loose). */
export function isValidPhone(phone) {
  const re = /^[+]?[\d\s()-]{7,15}$/;
  return re.test(String(phone).trim());
}

/** Validates a URL. */
export function isValidUrl(url) {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}
