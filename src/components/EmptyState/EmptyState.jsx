import { FiInbox } from 'react-icons/fi';

import './EmptyState.css';

/**
 * Empty state placeholder.
 *
 * @param {object} props
 * @param {string} [props.title]
 * @param {string} [props.description]
 * @param {React.ReactNode} [props.action]
 */
function EmptyState({ title = 'Nothing here yet', description, action }) {
  return (
    <div className="empty-state">
      <FiInbox className="empty-state__icon" aria-hidden="true" />
      <h3 className="empty-state__title">{title}</h3>
      {description && <p className="empty-state__description">{description}</p>}
      {action && <div className="empty-state__action">{action}</div>}
    </div>
  );
}

export default EmptyState;
