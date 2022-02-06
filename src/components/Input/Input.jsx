import React from 'react';
import s from './Input.module.css';

function Input({ label, type, name, value, placeholder }) {
  return (
    <label className={s.authLabel}>
      {label}
      <input
        className={s.authInput}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
      />
    </label>
  );
}

export default Input;
