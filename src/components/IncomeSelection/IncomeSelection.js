import React, { useState } from 'react';
import s from './IncomeSelection.module.css';
import Media from 'react-media';
import FormDatePicker from '../../components/DatePicker/DatePicker';
import {
  InputCurrency,
  InputCurrencyMobile,
} from '../ProductSelection/InputCurrency';
import ProductSelectionButtons from '../ProductSelection/ProductSelectionButtons';
import incomes from '../../json/incomes.json';

const IncomeSelection = () => {
  const [value, setValue] = useState('');
  const types = incomes.map(({ id, category }) => {
    return (
      <option className={s.option} key={id} value={category}>
        {category}
      </option>
    );
  });

  return (
    <div className={s.container}>
      <div className={s.outcomes_div}>
        <Media queries={{ small: { maxWidth: 767 } }}>
          {matches => (matches.small ? <></> : <FormDatePicker />)}
        </Media>
        <form className={s.form}>
          <>
            <input
              className={s.input}
              id="js-keyword-input"
              type="text"
              name="name"
              placeholder="Описание дохода"
            />
            <select
              name="select-category"
              id=""
              className={s.select}
              value={value}
              onChange={event => setValue(event.target.value)}
            >
              <option className={s.option}>Категория дохода</option>
              {types}
            </select>
          </>
          {/* <Selector>Категория дохода</Selector> */}

          <Media queries={{ small: { maxWidth: 767 } }}>
            {matches =>
              matches.small ? <InputCurrencyMobile /> : <InputCurrency />
            }
          </Media>
        </form>
      </div>

      <ProductSelectionButtons />
    </div>
  );
};

export default IncomeSelection;
