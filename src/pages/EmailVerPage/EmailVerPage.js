import { useNavigate } from 'react-router-dom';
import Container from '../../components/Container/Container';
import Button from '../../components/Buttons/Button';
import s from './EmailVerPage.module.css';

const EmailVerPage = () => {
  const history = useNavigate();

  const handleClick = () => {
    history('/');
  };

  return (
    <Container>
      <div className={s.wrapper}>
        <p className={s.invitation}>Регистрация подтверждена!</p>
        <p className={s.invitation}>
          Для работы с приложением, пожалуйста, авторизируйтесь
        </p>
        <div className={s.btnWrapper}>
          <Button
            type="button"
            name="Авторизация"
            isPrimary
            onClick={handleClick}
          />
        </div>
      </div>
    </Container>
  );
};
export default EmailVerPage;
