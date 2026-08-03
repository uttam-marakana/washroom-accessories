import { gallery } from '@/data/gallery';
import GalleryCard from '@/components/GalleryCard/GalleryCard';
import SectionHeading from '@/components/SectionHeading/SectionHeading';
import Button from '@/components/Button/Button';
import { ROUTES } from '@/constants/routes';
import './Home.css';

/**
 * Applications / gallery preview section.
 */
function GallerySection() {
  const preview = gallery.slice(0, 3);

  return (
    <section className="section section--light bg-light">
      <div className="container">
        <SectionHeading
          eyebrow="Applications"
          title="Our Work in Action"
          description="See how our washroom accessories enhance real spaces."
          align="center"
        />
        <div className="gallery-grid">
          {preview.map((item) => (
            <GalleryCard key={item.id} item={item} />
          ))}
        </div>
        <div className="section__actions text-center">
          <Button as="link" to={ROUTES.GALLERY} variant="outline">
            View Full Gallery
          </Button>
        </div>
      </div>
    </section>
  );
}

export default GallerySection;
