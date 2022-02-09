import React from 'react';
import AccessForm from '../AccessForm/AccessForm';
import GoogleBtn from '../GoogleBtn/GoogleBtn';
import s from './AuthMenu.module.css';

export default function AuthMenu() {
  return (
    <div className={s.container}>
      <p className={s.descriptionGoogle}>
        Вы можете авторизоваться с помощью Google Account:
      </p>
      <GoogleBtn href="http://localhost:3001/api/auth/google" />

      <p className={s.descriptionSignup}>
        Или зайти с помощью e-mail и пароля, предварительно зарегистрировавшись:
      </p>
      <AccessForm />
    </div>
  );
}
