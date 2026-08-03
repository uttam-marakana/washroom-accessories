import { ROUTES } from '@/constants/routes';

/**
 * Primary navigation configuration.
 * Each item may include a `mega` list rendered in the mega menu.
 */
export const navigation = [
  { label: 'Home', path: ROUTES.HOME },
  {
    label: 'Products',
    path: ROUTES.PRODUCTS,
    mega: true,
  },
  { label: 'About Us', path: ROUTES.ABOUT },
  { label: 'Gallery', path: ROUTES.GALLERY },
  { label: 'Contact', path: ROUTES.CONTACT },
];
