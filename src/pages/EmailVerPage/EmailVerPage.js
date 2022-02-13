import { useDispatch } from 'react-redux';
import authOperations from '../../redux/auth/operations';

const EmailVerPage = () => {
  const dispatch = useDispatch();
  dispatch(authOperations.compliteRegistration());

  return <p>Подождите, пожалуйста, выполняется вход...</p>;
};
export default EmailVerPage;
