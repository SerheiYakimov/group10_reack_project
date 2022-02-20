import React, { useState } from 'react';
import s from '../AddingCost/AddingCost.module.css';
import Media from 'react-media';
import { useDispatch } from 'react-redux';
import FormDatePicker from '../DatePicker/DatePicker';
import { RateInputSelector } from '../RateInputSelector/RateInputSelector';
import { InputCurrency } from '../InputCurrency/InputCurrency';
import FormButtons from '../Buttons/FormButtons/FormButtons';
// import toast from 'react-hot-toast';

const AddingCost = () => {
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
          <RateInputSelector></RateInputSelector>

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

export default AddingCost;
