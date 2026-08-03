import './FeatureCard.css';

/**
 * Feature/benefit card.
 *
 * @param {object} props
 * @param {React.ReactNode} props.icon
 * @param {string} props.title
 * @param {string} props.description
 */
function FeatureCard({ icon, title, description }) {
  return (
    <article className="feature-card">
      <div className="feature-card__icon">{icon}</div>
      <h3 className="feature-card__title">{title}</h3>
      <p className="feature-card__description">{description}</p>
    </article>
  );
}

export default FeatureCard;
