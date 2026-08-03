import { Navigate, useLocation } from 'react-router-dom';

/**
 * Route guard for protected routes.
 * Currently no auth is implemented; this is a ready-to-use guard.
 * @param {object} props
 * @param {React.ReactNode} props.children
 */
function ProtectedRoute({ children }) {
  const location = useLocation();
  const isAuthenticated = false; // Extend with real auth state when available.

  if (!isAuthenticated) {
    return <Navigate to="/" replace state={{ from: location }} />;
  }

  return children;
}

export default ProtectedRoute;
