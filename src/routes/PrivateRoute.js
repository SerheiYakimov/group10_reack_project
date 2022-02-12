// import { Navigate } from 'react-router-dom';

// const isAuth = false;

// export const PrivateRoute = ({ component: Component }) => {
//   return <>{isAuth ? <Component /> : <Navigate to="/" />}</>;
// };

import { Navigate } from 'react-router-dom';

export function PrivateRoute({ isAuth, component: Component }) {
  return <>{isAuth ? <Component /> : <Navigate to="/" />}</>;
}
