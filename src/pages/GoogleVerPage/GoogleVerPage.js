import { useDispatch } from 'react-redux';
import authOperations from '../../redux/auth/operations';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Oval } from 'react-loader-spinner';
import s from './GoogleVerPage.module.css';

const GoogleVerPage = () => {
  const location = useLocation();
  const { accessToken } = queryString.parse(location.search);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.userFromGoogleAuth(accessToken));
  }, [accessToken, dispatch]);

  return (
    <div className={s.container}>
      <Oval
        ariaLabel="loading-indicator"
        height={100}
        width={100}
        strokeWidth={5}
        color="#ff751d"
        secondaryColor="#52555f"
      />
    </div>
  );
};
export default GoogleVerPage;
