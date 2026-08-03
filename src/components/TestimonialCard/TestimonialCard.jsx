import { FaQuoteLeft, FaStar } from 'react-icons/fa';

import Image from '@/components/Image/Image';
import './TestimonialCard.css';

/**
 * Testimonial card.
 *
 * @param {object} props
 * @param {object} props.testimonial - { name, role, company, rating, quote, avatar }
 */
function TestimonialCard({ testimonial }) {
  const { name, role, company, rating, quote, avatar } = testimonial;

  return (
    <figure className="testimonial-card">
      <FaQuoteLeft
        className="testimonial-card__quote-icon"
        aria-hidden="true"
      />
      <div
        className="testimonial-card__stars"
        role="img"
        aria-label={`${rating} out of 5 stars`}
      >
        {Array.from({ length: 5 }, (_, i) => (
          <FaStar
            key={i}
            className={
              i < rating
                ? 'testimonial-card__star--filled'
                : 'testimonial-card__star--empty'
            }
            aria-hidden="true"
          />
        ))}
      </div>
      <blockquote className="testimonial-card__quote">{quote}</blockquote>
      <figcaption className="testimonial-card__author">
        <Image
          src={avatar}
          alt={name}
          className="testimonial-card__avatar"
          aspectRatio="1 / 1"
        />
        <div>
          <span className="testimonial-card__name">{name}</span>
          <span className="testimonial-card__role">
            {role} — {company}
          </span>
        </div>
      </figcaption>
    </figure>
  );
}

export default TestimonialCard;
