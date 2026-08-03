import './Loader.css';

/**
 * Full-screen loading spinner shown during route lazy loading.
 */
function Loader() {
  return (
    <div className="loader" role="status" aria-live="polite">
      <span className="loader__spinner" aria-hidden="true" />
      <span className="sr-only">Loading...</span>
    </div>
  );
}

export default Loader;
