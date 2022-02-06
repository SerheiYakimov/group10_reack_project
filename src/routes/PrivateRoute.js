import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ component: Component }) => {
  const isAuth = true;
  return <>{isAuth ? <Component /> : <Navigate to="/" />}</>;
};
