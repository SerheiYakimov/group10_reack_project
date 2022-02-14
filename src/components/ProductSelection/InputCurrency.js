import s from './ProductSelection.module.css';
import sprite from '../../svg/sprite.svg';
import { useSelector, useDispatch } from 'react-redux';
import React, { useState } from 'react';

import { addExpenses } from '../../redux/transactions/operations';
export const InputCurrencyMobile = () => {
  // const [number, setNumber] = useState("");
  // const [active] = useState(false);
  // const dispatch = useDispatch();

  // const handleChange = (e) => {
  //     const { number, value } = e.target;
  //     switch (number) {

  //         case "number":
  //             setNumber(value);
  //             break;
  //         default:
  //             console.warn(`Field - ${number} is under constraction`);
  //     }
  // };

  // const handleSubmit = (e) => {
  //     e.preventDefault();
  //     const cont = {

  //         number: number,
  //         id: "123",
  //     };
  //     dispatch(addExpenses(cont));
  //     resetForm();
  // };
  // console.log(number)

  // const resetForm = () => {

  //     setNumber("");
  // };

  // console.log(number)

  return (
    <>
      <div
        className={s.currency_div}
        // onSubmit={handleSubmit}
      >
        <input
          className={s.input_price}
          type="number"
          data-type="currency"
          placeholder="00.00 UAH"
          step="0.01"
          min="0,01"
          // onChange={handleChange}
          // value={number}
        />
        <div className={s.culc_div}>
          <svg className={s.culculator} fill=" #52555F" width="20" height="20">
            <use href={`${sprite}#calculator`}></use>
          </svg>
        </div>
      </div>
    </>
  );
};
export const InputCurrency = () => {
  return (
    <>
      <div className={s.currency_div}>
        <input
          className={s.input_price}
          type="number"
          data-type="currency"
          placeholder="00.00"
          step="0.01"
          min="0,00000001"
        />
        <svg className={s.culculator} fill=" #52555F" width="20" height="20">
          <use href={`${sprite}#calculator`}></use>
        </svg>
      </div>
    </>
  );
};
