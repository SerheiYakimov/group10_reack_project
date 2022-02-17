import React from 'react';
import s from './IncomeSelection.module.css';
import Media from 'react-media';
import FormDatePicker from '../../components/DatePicker/DatePicker';
import { InputCurrency } from '../ProductSelection/InputCurrency';
import ProductSelectionButtons from '../ProductSelection/ProductSelectionButtons';
import { IncomesSelector } from '../Selector/Selector';

const IncomeSelection = () => {
  return (
    <div className={s.container}>
      <div className={s.outcomes_div}>
        <Media queries={{ small: { maxWidth: 767 } }}>
          {matches => (matches.small ? <></> : <FormDatePicker />)}
        </Media>
        <form className={s.form}>
          <IncomesSelector></IncomesSelector>

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

      <ProductSelectionButtons />
    </div>
  );
};

export default IncomeSelection;
