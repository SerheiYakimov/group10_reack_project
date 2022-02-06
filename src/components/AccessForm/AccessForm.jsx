import React from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';
import s from './AccessForm.module.css';

export default function AccessForm() {
  return (
    <form className={s.accessForm}>
      <div className={s.inputWrapper}>
        <Input
          label="Электронная почта:"
          type="email"
          name="email"
          value=""
          placeholder="your@email.com"
          required
        />
        <Input
          label="Пароль:"
          type="password"
          name="password"
          value=""
          placeholder="Пароль"
          required
        />
      </div>
      <div className={s.btnWrapper}>
        <Button type="submit" name="Войти" isPrimary />
        <Button type="button" name="Регистрация" />
      </div>
    </form>
  );
}
