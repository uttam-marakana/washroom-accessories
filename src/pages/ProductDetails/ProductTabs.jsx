import { useState } from 'react';

import './ProductDetails.css';

/**
 * Product information tabs (description, features, specs).
 *
 * Renders as a horizontal tab bar on desktop and as an accordion on
 * tablet/mobile via CSS.
 *
 * @param {object} props
 * @param {object} props.product
 */
function ProductTabs({ product }) {
  const [activeTab, setActiveTab] = useState('description');
  const tabs = [
    { id: 'description', label: 'Description' },
    { id: 'features', label: 'Features' },
    { id: 'specs', label: 'Specifications' },
  ];

  const handleToggle = (id) => {
    setActiveTab((current) => (current === id ? null : id));
  };

  const renderPanel = (tab) => {
    if (tab.id === 'description') {
      return <p>{product.description}</p>;
    }
    if (tab.id === 'features') {
      return (
        <ul className="product-tabs__list">
          {product.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      );
    }
    return (
      <dl className="product-tabs__specs">
        <div>
          <dt>Material</dt>
          <dd>{product.material}</dd>
        </div>
        <div>
          <dt>Finish</dt>
          <dd>{product.finish}</dd>
        </div>
        <div>
          <dt>Color</dt>
          <dd>{product.color}</dd>
        </div>
        <div>
          <dt>Size</dt>
          <dd>{product.size}</dd>
        </div>
        <div>
          <dt>SKU</dt>
          <dd>{product.sku}</dd>
        </div>
      </dl>
    );
  };

  return (
    <div className="product-tabs">
      <div className="product-tabs__items">
        {tabs.map((tab) => {
          const isOpen = activeTab === tab.id;
          return (
            <div
              key={tab.id}
              className={`product-tabs__item${
                isOpen ? ' product-tabs__item--open' : ''
              }`}
            >
              <button
                type="button"
                className="product-tabs__tab"
                aria-expanded={isOpen}
                aria-controls={`panel-${tab.id}`}
                onClick={() => handleToggle(tab.id)}
              >
                <span>{tab.label}</span>
                <span className="product-tabs__icon" aria-hidden="true">
                  +
                </span>
              </button>
              <div
                id={`panel-${tab.id}`}
                className="product-tabs__panel"
                role="tabpanel"
              >
                {renderPanel(tab)}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductTabs;
