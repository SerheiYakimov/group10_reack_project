import React from 'react';
import s from './ProductSelection.module.css';
import Media from 'react-media';
import FormDatePicker from '../../components/DatePicker/DatePicker';
import Selector from '../Selector/Selector';
import { InputCurrency, InputCurrencyMobile } from './InputCurrency';
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
          {/* <div className={s.currency_div}> */}
          <Media queries={{ small: { maxWidth: 767 } }}>
            {matches =>
              matches.small ? (
                <InputCurrencyMobile></InputCurrencyMobile>
              ) : (
                <InputCurrency></InputCurrency>
              )
            }
          </Media>
          {/* </div> */}
        </form>
      </div>
      <ProductSelectionButtons></ProductSelectionButtons>
    </div>
  );
};

export default ProductSelection;
