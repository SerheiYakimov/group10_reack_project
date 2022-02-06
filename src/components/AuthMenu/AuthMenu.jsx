import React from 'react';
import AccessForm from '../AccessForm/AccessForm';
import GoogleBtn from '../GoogleBtn/GoogleBtn';
import s from './AuthMenu.module.css';

export default function AuthMenu() {
  //   const [email, setEmail] = useState('');
  //   const [password, setPassword] = useState('');

  return (
    <div className={s.container}>
      <p className={s.descriptionGoogle}>
        Вы можете авторизоваться с помощью Google Account:
      </p>
      <GoogleBtn />

      <p className={s.descriptionSignup}>
        Или зайти с помощью e-mail и пароля, предварительно зарегистрировавшись:
      </p>
      <AccessForm />
    </div>
  );
}
