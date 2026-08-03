import Image from '@/components/Image/Image';
import './Banner.css';

/**
 * Reusable promotional banner.
 *
 * @param {object} props
 * @param {string} props.title
 * @param {string} [props.subtitle]
 * @param {string} [props.image]
 * @param {React.ReactNode} props.children
 */
function Banner({ title, subtitle, image, children }) {
  return (
    <section className="banner">
      {image && (
        <Image
          src={image}
          alt=""
          aria-hidden="true"
          className="banner__background"
        />
      )}
      <div
        className={`banner__content${image ? ' banner__content--overlay' : ''}`}
      >
        <h2 className="banner__title">{title}</h2>
        {subtitle && <p className="banner__subtitle">{subtitle}</p>}
        {children && <div className="banner__actions">{children}</div>}
      </div>
    </section>
  );
}

export default Banner;
