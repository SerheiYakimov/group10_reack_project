import React, { useState } from 'react';
import s from '../AddingCost/AddingCost.module.css';
import Media from 'react-media';
// import { useDispatch } from 'react-redux';
import FormDatePicker from '../DatePicker/DatePicker';
import { RateInputSelector } from '../RateInputSelector/RateInputSelector';
import { InputCurrency } from '../InputCurrency/InputCurrency';
import FormButtons from '../Buttons/FormButtons/FormButtons';
import toast from 'react-hot-toast';

const AddingCost = () => {
  const [category, setCategory] = useState('');
  const [subcategory, setSubcategory] = useState({});
  const [sum, setSum] = useState('');
  const [transaction, setTransaction] = useState({});
  const [allTransactions, setAllTransactions] = useState([]);

  // const dispatch = useDispatch();

  const getTransactionName = (category, subCategory) => {
    setCategory(category);
    setSubcategory(subCategory);
  };

  const getTransactionSum = sum => {
    setSum(sum);
  };

  const handleSubmit = e => {
    e.preventDefault();

    const transaction = {
      category,
      subcategory,
      sum,
    };

    setTransaction({ transaction });
    addNewTransaction(transaction);

    resetForm();
    toast.success('Транзакция успешно добавлена!');
  };

  const addNewTransaction = transaction => {
    setAllTransactions(allTransactions => [...allTransactions, transaction]);
  };

  console.log(transaction);

  const resetForm = () => {
    setCategory('');
    setSubcategory([]);
    setSum('');
  };

  return (
    <div className={s.container}>
      <div className={s.outcomes_div}>
        <Media queries={{ small: { maxWidth: 767 } }}>
          {matches => (matches.small ? <></> : <FormDatePicker />)}
        </Media>
        <form className={s.form} onSubmit={handleSubmit}>
          <RateInputSelector getTransactionName={getTransactionName} />

          <Media queries={{ small: { maxWidth: 767 } }}>
            {matches =>
              matches.small ? (
                <InputCurrency getTransactionSum={getTransactionSum}>
                  {' '}
                  00.00 UAH
                </InputCurrency>
              ) : (
                <InputCurrency getTransactionSum={getTransactionSum}>
                  00.00
                </InputCurrency>
              )
            }
          </Media>
        </form>
      </div>
      <FormButtons onClick={handleSubmit} />
    </div>
  );
};

export default AddingCost;
