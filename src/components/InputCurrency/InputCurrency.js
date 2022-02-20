import s from '../InputCurrency/InputCurrency.module.css';
import sprite from '../../svg/sprite.svg';
import React from 'react';

export const InputCurrency = ({ children }) => {
  return (
    <>
      <div className={s.currency_div}>
        <input
          className={s.input_price}
          type="number"
          data-type="currency"
          placeholder={children}
          step="0.01"
          min="0,00000001"
        />
        <div className={s.culc_div}>
          <svg className={s.calculator} fill=" #52555F" width="20" height="20">
            <use href={`${sprite}#calculator`}></use>
          </svg>
        </div>
      </div>
    </>
  );
};
