import { categories } from '@/data/categories';
import './Products.css';

/**
 * Product filter controls (category & availability).
 *
 * @param {object} props
 * @param {string} props.category
 * @param {function} props.onCategoryChange
 * @param {string} props.availability
 * @param {function} props.onAvailabilityChange
 */
function ProductFilter({
  category,
  onCategoryChange,
  availability,
  onAvailabilityChange,
}) {
  return (
    <div className="product-filter">
      <div className="product-filter__field">
        <label htmlFor="filter-category">Category</label>
        <select
          id="filter-category"
          value={category}
          onChange={(e) => onCategoryChange(e.target.value)}
        >
          <option value="">All Categories</option>
          {categories.map((c) => (
            <option key={c.id} value={c.slug}>
              {c.name}
            </option>
          ))}
        </select>
      </div>
      <div className="product-filter__field">
        <label htmlFor="filter-availability">Availability</label>
        <select
          id="filter-availability"
          value={availability}
          onChange={(e) => onAvailabilityChange(e.target.value)}
        >
          <option value="">All</option>
          <option value="In Stock">In Stock</option>
          <option value="Out of Stock">Out of Stock</option>
        </select>
      </div>
    </div>
  );
}

export default ProductFilter;
