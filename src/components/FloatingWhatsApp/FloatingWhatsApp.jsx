import { FaWhatsapp } from 'react-icons/fa';

import { APP_CONFIG } from '@/constants/appConfig';
import './FloatingWhatsApp.css';

/**
 * Floating WhatsApp button.
 */
function FloatingWhatsApp() {
  const message = encodeURIComponent(
    'Hello, I would like to know more about your washroom accessories.',
  );
  const href = `https://wa.me/${APP_CONFIG.whatsapp}?text=${message}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp"
      aria-label="Chat with us on WhatsApp"
    >
      <FaWhatsapp aria-hidden="true" />
    </a>
  );
}

export default FloatingWhatsApp;
