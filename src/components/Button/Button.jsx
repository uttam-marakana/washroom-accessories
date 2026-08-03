import { Link } from 'react-router-dom';

import { cn } from '@/utils/helpers';
import './Button.css';

/**
 * Reusable button that renders as a <button>, <a>, or router <Link>.
 *
 * @param {object} props
 * @param {string} [props.variant] - primary | secondary | accent | outline | ghost
 * @param {string} [props.size] - sm | md | lg
 * @param {string} [props.as] - 'button' | 'a' | 'link'
 * @param {string} [props.to] - route path when as === 'link'
 * @param {string} [props.href] - external URL when as === 'a'
 */
function Button({
  variant = 'primary',
  size = 'md',
  as = 'button',
  to,
  href,
  className,
  children,
  ...rest
}) {
  const classes = cn('btn', `btn--${variant}`, `btn--${size}`, className);

  if (as === 'link' && to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  if (as === 'a' && href) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...rest}>
      {children}
    </button>
  );
}

export default Button;
