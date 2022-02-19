import React, { useState } from 'react';
import s from './ProductSelection.module.css';
import Media from 'react-media';
import { useDispatch } from 'react-redux';
import FormDatePicker from './DatePicker/DatePicker';
import { OutcomesSelector } from '../Selector/Selector';
import { InputCurrency } from './InputCurrency';
import ProductSelectionButtons from './ProductSelectionButtons';
// import toast from 'react-hot-toast';

const ProductSelection = () => {
  const [category, setCategory] = useState('');
  const [id, setId] = useState('');
  const [decription, setDecription] = useState('');
  const [sum, setSum] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    // const transaction = {
    //     category,
    //     subcategory,
    //     sum,
    //     date,
    //     transactionType,
    // }

    // dispatch(addThunkTransaction(transaction));
    // resetForm();
    // toast.success('Транзакция успешно добавлена!')
  };

  return (
    <div className={s.container}>
      <div className={s.outcomes_div}>
        <Media queries={{ small: { maxWidth: 767 } }}>
          {matches => (matches.small ? <></> : <FormDatePicker />)}
        </Media>
        <form className={s.form} onSubmit={handleSubmit}>
          <OutcomesSelector></OutcomesSelector>

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
