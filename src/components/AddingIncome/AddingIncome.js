import React from 'react';
import s from './AddingIncome.module.css';
import Media from 'react-media';
import FormDatePicker from '../DatePicker/DatePicker';
import { InputCurrency } from '../InputCurrency/InputCurrency';
import FormButtons from '../Buttons/FormButtons/FormButtons';
import { IncomeInputSelector } from '../IncomeInputSelector/IncomeInputSelector';

const AddingIncome = () => {
  return (
    <div className={s.container}>
      <div className={s.outcomes_div}>
        <Media queries={{ small: { maxWidth: 767 } }}>
          {matches => (matches.small ? <></> : <FormDatePicker />)}
        </Media>
        <form className={s.form}>
          <IncomeInputSelector></IncomeInputSelector>

          <Media queries={{ small: { maxWidth: 767 } }}>
            {matches =>
              matches.small ? (
                <InputCurrency> 00.00 UAH</InputCurrency>
              ) : (
                <InputCurrency>00.00</InputCurrency>
              )
            }
          </Media>
        </form>
      </div>

      <FormButtons />
    </div>
  );
};

export default AddingIncome;
