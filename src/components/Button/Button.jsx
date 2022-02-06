import React from 'react';
import s from './Button.module.css';

function Button({ type, name }) {
  return (
    <button className={s.button} type={type}>
      {name}
    </button>
  );
}

export default Button;
