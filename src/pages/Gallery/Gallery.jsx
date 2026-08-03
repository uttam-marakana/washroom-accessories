import SEO from '@/seo/SEO';
import { pageSEO } from '@/seo/seoConfig';
import PageBanner from '@/components/PageBanner/PageBanner';
import GalleryCard from '@/components/GalleryCard/GalleryCard';
import { gallery } from '@/data/gallery';
import { ROUTES } from '@/constants/routes';
import './Gallery.css';

/**
 * Gallery page.
 */
function Gallery() {
  return (
    <>
      <SEO
        title="Gallery"
        description={pageSEO.gallery.description}
        keywords={pageSEO.gallery.keywords}
      />
      <PageBanner
        title="Our Gallery"
        subtitle="A glimpse into our washroom accessory installations."
        breadcrumb={[
          { label: 'Home', path: ROUTES.HOME },
          { label: 'Gallery' },
        ]}
      />
      <section className="section container">
        <div className="gallery-page-grid">
          {gallery.map((item) => (
            <GalleryCard key={item.id} item={item} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Gallery;
