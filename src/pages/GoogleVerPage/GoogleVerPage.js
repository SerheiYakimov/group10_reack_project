import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/auth';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';

const GoogleVerPage = () => {
  const location = useLocation();
  // console.log('location :>> ', location.search)
  const { email } = queryString.parse(location.search);
  // console.log('queryParams :>> ', email)

  const dispatch = useDispatch();
  dispatch(authOperations.userFromGoogleAuth(email));

  return <p>Подождите, пожалуйста, выполняется вход...</p>;
};
export default GoogleVerPage;
