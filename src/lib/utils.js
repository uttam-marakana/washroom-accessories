/**
 * Combines and deduplicates truthy class names.
 *
 * A lightweight stand-in for `clsx` / `tailwind-merge` that keeps the
 * dependency tree small. Extend here (or swap for a library) as needed.
 *
 * @param {...(string | false | null | undefined)} classes
 * @returns {string}
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}
