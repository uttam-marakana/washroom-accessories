import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import './PageBanner.css';

/**
 * Hero banner for inner pages.
 *
 * @param {object} props
 * @param {string} props.title
 * @param {string} [props.subtitle]
 * @param {Array<{label: string, path?: string}>} props.breadcrumb
 */
function PageBanner({ title, subtitle, breadcrumb }) {
  return (
    <section className="page-banner">
      <div className="container page-banner__inner">
        <h1 className="page-banner__title">{title}</h1>
        {subtitle && <p className="page-banner__subtitle">{subtitle}</p>}
        {breadcrumb && <Breadcrumb items={breadcrumb} />}
      </div>
    </section>
  );
}

export default PageBanner;
