import { cn } from '@/utils/helpers';
import './Skeleton.css';

/**
 * Skeleton loading placeholder.
 * @param {object} props
 * @param {string} [props.width] - e.g. '100%' | '200px'
 * @param {string} [props.height] - e.g. '20px' | '300px'
 * @param {string} [props.borderRadius]
 */
function Skeleton({
  width = '100%',
  height = '20px',
  borderRadius,
  className,
}) {
  return (
    <div
      className={cn('skeleton', className)}
      style={{ width, height, borderRadius }}
    />
  );
}

export default Skeleton;
