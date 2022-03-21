import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import categories from '../../json/category.json';
import Media from 'react-media';
import s from './TransactionForm.module.css';
import sprite from '../../svg/sprite.svg';
import Table from '../Table/Table';
import Summary from '../Summary/Summary';
import { useDispatch } from 'react-redux';
import {
  getAllUserTransactions,
  addTransactionToStore,
} from '../../redux/transactions/operations';

import Button from '../Buttons/Button';
import DatePicker from '../DatePicker/DatePicker';
import { changeIncomeState } from '../../redux/incomeReducer/slice';

export default function TransactionsForm() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUserTransactions());
  }, [dispatch]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm({ defaultValues: { subcategory: '', category: '' } });

  const onSubmit = async ({ category, subcategory, sum }, e) => {
    const transactionToAdd = {
      category,
      subcategory,
      sum,
    };

    dispatch(addTransactionToStore(transactionToAdd));
  };

  //to reset values after successful submit
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({ subcategory: '', category: '', sum: 0 });
    }
  }, [isSubmitSuccessful, reset]);

  const categoryOptions = categories.map(category => ({
    value: category.id,
    label: category.category,
  }));
  const onHandleChangeState = () => {
    dispatch(changeIncomeState(true));
  };

  return (
    <>
      <form className={s.submit_form} onSubmit={handleSubmit(onSubmit)}>
        <div className={s.inputs_div}>
          <Media queries={{ small: { maxWidth: 767 } }}>
            {matches => (matches.small ? <></> : <DatePicker />)}
          </Media>

          <input
            className={s.input}
            type="text"
            placeholder="Описание категории"
            {...register('subcategory', { required: true })}
          />
          <select
            className={s.control}
            {...register('category', { required: true })}
          >
            {categoryOptions.map(option => (
              <option value={option.label} id={option.id} key={Math.random()}>
                {option.label}
              </option>
            ))}
          </select>
          <div className={s.currency_div}>
            <input
              type="number"
              data-type="currency"
              placeholder="00.00UAH"
              step="0.01"
              min="0,00000001"
              className={s.input_price}
              {...register('sum', { required: true })}
            />
            <div className={s.culc_div}>
              <svg
                className={s.calculator}
                fill=" #52555F"
                width="20"
                height="20"
              >
                <use href={`${sprite}#calculator`}></use>
              </svg>
            </div>
          </div>
        </div>

        <div className={s.button_div}>
          <Button type="submit" name="Ввод" value="Ввод" isPrimary></Button>
          <Button
            type="reset"
            name="Очистить"
            value="Очистить"
            className={s.button_text}
            onClick={onHandleChangeState}
          ></Button>
        </div>
      </form>
      <div className={s.summary_position}>
        <Table />
        <Media queries={{ small: { maxWidth: 767 } }}>
          {matches => (matches.small ? <></> : <Summary />)}
        </Media>
      </div>
    </>
  );
}
