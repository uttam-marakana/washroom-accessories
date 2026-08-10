import { useEffect, useState } from 'react';
import Button from '@/components/Button/Button';
import { ROUTES } from '@/constants/routes';
import './Hero.css';

/**
 * Hero auto-sliding carousel.
 *
 * @param {object} props
 * @param {Array<{image, title, subtitle}>} props.slides - array of slides
 * @param {number} [props.interval] - auto-slide interval in ms
 */
function Hero({ slides = [], interval = 5000 }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || slides.length <= 1) return undefined;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, interval);

    return () => clearInterval(timer);
  }, [paused, slides.length, interval]);

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  return (
    <section
      className="hero"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="hero__slides">
        {slides.map((slide, index) => (
          <div
            className={`hero__slide ${
              index === activeIndex ? 'hero__slide--active' : ''
            }`}
            style={{ backgroundImage: `url(${slide.image})` }}
            key={index}
          >
            <div className="hero__overlay" />
            <div className="container hero__inner">
              <div className="hero__content">
                <h1 className="hero__title">{slide.title}</h1>
                <p className="hero__subtitle">{slide.subtitle}</p>
                <div className="hero__actions">
                  <Button
                    as="link"
                    to={ROUTES.PRODUCTS}
                    variant="accent"
                    size="lg"
                  >
                    Shop Products
                  </Button>
                  <Button
                    as="link"
                    to={ROUTES.CONTACT}
                    variant="outline"
                    size="lg"
                  >
                    Get a Quote
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {slides.length > 1 && (
        <div className="hero__dots">
          {slides.map((_, index) => (
            <button
              type="button"
              key={index}
              className={`hero__dot ${
                index === activeIndex ? 'hero__dot--active' : ''
              }`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default Hero;
