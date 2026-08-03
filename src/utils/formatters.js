/**
 * Formatting helpers.
 */
import { formatCurrency, truncate } from './helpers';

export { formatCurrency, truncate };

/** Formats a date string into a readable date. */
export function formatDate(dateStr, options = {}) {
  const date = new Date(dateStr);
  if (Number.isNaN(date.getTime())) return dateStr;
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    ...options,
  });
}

/** Formats a number with thousands separators. */
export function formatNumber(value) {
  return new Intl.NumberFormat('en-US').format(value);
}

/** Formats a phone number for display. */
export function formatPhone(phone) {
  return String(phone).replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
}
