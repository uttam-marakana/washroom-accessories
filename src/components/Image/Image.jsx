import { cn } from '@/utils/helpers';
import './Image.css';

/**
 * Image component with lazy loading, onError fallback, and aspect box.
 *
 * @param {object} props
 * @param {string} props.src
 * @param {string} props.alt
 * @param {string} [props.fallbackSrc] - fallback when src fails
 * @param {string} [props.aspectRatio] - CSS aspect-ratio value
 */
function Image({
  src,
  alt,
  fallbackSrc = '/images/placeholders/no-image.svg',
  aspectRatio,
  className,
  ...rest
}) {
  const handleError = (e) => {
    e.currentTarget.src = fallbackSrc;
  };

  return (
    <div
      className={cn('image-wrapper', aspectRatio && 'image-wrapper--fixed')}
      style={aspectRatio ? { aspectRatio } : undefined}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onError={handleError}
        className={cn('image-wrapper__img', className)}
        {...rest}
      />
    </div>
  );
}

export default Image;
