import React from 'react';
import s from './Button.module.css';

function Button({ type, name, isPrimary, onClick }) {
  let classes = `${s.button} `;
  if (isPrimary) {
    classes += s.primary;
  }
  return (
    <button className={classes} type={type} onClick={onClick}>
      {name}
    </button>
  );
}

export default Button;
