import Image from '@/components/Image/Image';
import './GalleryCard.css';

/**
 * Gallery image card.
 *
 * @param {object} props
 * @param {object} props.item - gallery item { src, alt, category }
 */
function GalleryCard({ item }) {
  return (
    <figure className="gallery-card">
      <Image
        src={item.src}
        alt={item.alt}
        aspectRatio="4 / 3"
        className="gallery-card__image"
      />
      <figcaption className="gallery-card__caption">
        <span className="gallery-card__category">{item.category}</span>
      </figcaption>
    </figure>
  );
}

export default GalleryCard;
