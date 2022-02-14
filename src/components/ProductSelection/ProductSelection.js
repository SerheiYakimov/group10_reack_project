import React from 'react';
import s from './ProductSelection.module.css';
import Media from 'react-media';
import FormDatePicker from '../../components/DatePicker/DatePicker';
import Selector from '../Selector/Selector';
import { InputCurrency } from './InputCurrency';
import ProductSelectionButtons from './ProductSelectionButtons';

const ProductSelection = () => {
  return (
    <div className={s.container}>
      <div className={s.outcomes_div}>
        <Media queries={{ small: { maxWidth: 767 } }}>
          {matches => (matches.small ? <></> : <FormDatePicker />)}
        </Media>
        <form className={s.form}>
          <Selector>Категория товара</Selector>

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

export default ProductSelection;
