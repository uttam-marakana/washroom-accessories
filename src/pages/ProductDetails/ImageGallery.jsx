import { useState } from 'react';

import Image from '@/components/Image/Image';
import './ProductDetails.css';

/**
 * Product image gallery with thumbnails.
 *
 * @param {object} props
 * @param {Array<string>} props.images
 * @param {string} props.alt
 */
function ImageGallery({ images, alt }) {
  const [active, setActive] = useState(0);
  const gallery =
    images.length > 0 ? images : ['/images/placeholders/no-image.webp'];

  return (
    <div className="product-gallery">
      <div className="product-gallery__main">
        <Image
          src={gallery[active]}
          alt={alt}
          aspectRatio="1 / 1"
          className="product-gallery__main-image"
        />
      </div>
      {gallery.length > 1 && (
        <div className="product-gallery__thumbs">
          {gallery.map((src, index) => (
            <button
              key={index}
              type="button"
              className={`product-gallery__thumb${
                index === active ? ' product-gallery__thumb--active' : ''
              }`}
              onClick={() => setActive(index)}
              aria-label={`View image ${index + 1}`}
            >
              <Image src={src} alt="" aspectRatio="1 / 1" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default ImageGallery;
