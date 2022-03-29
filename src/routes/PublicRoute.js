import { Navigate } from 'react-router-dom';

export function PublicRoute({
  isAuth,
  restricted = false,
  navigateTo = '/balance',
  component: Component,
}) {
  const shouldNavigate = isAuth && restricted;

  return <>{shouldNavigate ? <Navigate to={navigateTo} /> : <Component />}</>;
}
