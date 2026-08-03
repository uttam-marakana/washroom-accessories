import Button from '@/components/Button/Button';
import { ROUTES } from '@/constants/routes';
import './CTA.css';

/**
 * Call-to-action banner.
 *
 * @param {object} props
 * @param {string} props.title
 * @param {string} [props.description]
 * @param {string} [props.primaryLabel]
 * @param {string} [props.primaryTo]
 * @param {string} [props.secondaryLabel]
 * @param {string} [props.secondaryTo]
 */
function CTA({
  title,
  description,
  primaryLabel = 'Get a Quote',
  primaryTo = ROUTES.CONTACT,
  secondaryLabel = 'View Products',
  secondaryTo = ROUTES.PRODUCTS,
}) {
  return (
    <section className="cta">
      <div className="container cta__inner">
        <h2 className="cta__title">{title}</h2>
        {description && <p className="cta__description">{description}</p>}
        <div className="cta__actions">
          <Button as="link" to={primaryTo} variant="accent" size="lg">
            {primaryLabel}
          </Button>
          <Button as="link" to={secondaryTo} variant="outline" size="lg">
            {secondaryLabel}
          </Button>
        </div>
      </div>
    </section>
  );
}

export default CTA;
