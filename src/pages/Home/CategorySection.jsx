import { categories } from '@/data/categories';
import CategoryCard from '@/components/CategoryCard/CategoryCard';
import SectionHeading from '@/components/SectionHeading/SectionHeading';
import './Home.css';

/**
 * Featured categories section.
 */
function CategorySection() {
  const featured = categories.slice(0, 8);

  return (
    <section className="section container">
      <SectionHeading
        eyebrow="Our Categories"
        title="Explore Washroom Accessories"
        description="Browse our curated collection of premium washroom accessories."
        align="center"
      />
      <div className="category-grid">
        {featured.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </section>
  );
}

export default CategorySection;
