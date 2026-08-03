import { cn } from '@/utils/helpers';
import './SectionHeading.css';

/**
 * Section heading with eyebrow label, title, and optional description.
 *
 * @param {object} props
 * @param {string} [props.eyebrow] - small label above title
 * @param {string} props.title
 * @param {string} [props.description]
 * @param {string} [props.align] - left | center
 */
function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  return (
    <div className={cn('section-heading', `section-heading--${align}`)}>
      {eyebrow && <span className="section-heading__eyebrow">{eyebrow}</span>}
      <h2 className="section-heading__title">{title}</h2>
      {description && (
        <p className="section-heading__description">{description}</p>
      )}
    </div>
  );
}

export default SectionHeading;
