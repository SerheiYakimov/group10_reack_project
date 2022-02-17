import React from 'react';
import s from './Notify.module.css';

function Notify() {
  const text = 'Ты не можешь тратить деньги пока их у тебя нет 🙂';
  return (
    <div className={s.container}>
      <strong className={s.invitation}>
        Привет! Для начала работы внеси текущий баланс своего счета!
      </strong>
      <p className={s.warning}>{text}</p>
    </div>
  );
}

export default Notify;
