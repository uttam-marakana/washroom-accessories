import { useEffect, useState } from 'react';
import { FiArrowUp } from 'react-icons/fi';

import { cn } from '@/utils/helpers';
import './BackToTop.css';

/**
 * Back-to-top button that appears after scrolling down.
 */
function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      type="button"
      className={cn('back-to-top', visible && 'back-to-top--visible')}
      onClick={scrollToTop}
      aria-label="Back to top"
    >
      <FiArrowUp aria-hidden="true" />
    </button>
  );
}

export default BackToTop;
