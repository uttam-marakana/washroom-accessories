import Button from '@/components/Button/Button';
import { ROUTES } from '@/constants/routes';
import './Hero.css';

/**
 * Home page hero section.
 *
 * @param {object} props
 * @param {string} props.title
 * @param {string} props.subtitle
 */
function Hero({ title, subtitle }) {
  return (
    <section className="hero">
      <div className="container hero__inner">
        <div className="hero__content">
          <h1 className="hero__title">{title}</h1>
          <p className="hero__subtitle">{subtitle}</p>
          <div className="hero__actions">
            <Button as="link" to={ROUTES.PRODUCTS} variant="accent" size="lg">
              Shop Products
            </Button>
            <Button as="link" to={ROUTES.CONTACT} variant="outline" size="lg">
              Get a Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
