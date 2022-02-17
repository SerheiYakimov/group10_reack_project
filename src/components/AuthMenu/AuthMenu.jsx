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
      <GoogleBtn href="https://kapusta-api-group10.herokuapp.com/api/auth/google" />

      <p className={s.descriptionSignup}>
        Или зайти с помощью e-mail и пароля, предварительно зарегистрировавшись:
      </p>
      <AccessForm />
    </div>
  );
}
