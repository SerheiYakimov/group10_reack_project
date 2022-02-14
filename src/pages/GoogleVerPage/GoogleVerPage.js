import { useDispatch } from 'react-redux';
import authOperations from '../../redux/auth/operations';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const GoogleVerPage = () => {
  const location = useLocation();
  console.log('location :>> ', location.search);
  const { accessToken } = queryString.parse(location.search);
  console.log('queryParams :>> ', accessToken);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.userFromGoogleAuth(accessToken));
  }, [accessToken, dispatch]);

  return <p>Подождите, пожалуйста, выполняется вход...</p>;
};
export default GoogleVerPage;
