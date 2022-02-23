import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import categories from '../../json/category.json';
import transactionsAPI from '../../services/transactions-api';
import Media from 'react-media';
import FormDatePicker from '../DatePicker/DatePicker';
import s from './TransactionForm.module.css';
import sprite from '../../svg/sprite.svg';
import Table from '../Table/Table';
import Summary from '../Summary/Summary';
import { useSelector, useDispatch } from 'react-redux';
import { getAllTransactions } from '../../redux/transactions/selectors';
import {
  getAllUserTransactions,
  addTransactionToStore,
} from '../../redux/transactions/operations';
import getUserBalance from '../../redux/auth/selectors';

import Button from '../Buttons/Button';
import DatePicker from '../DatePicker/DatePicker';

// import "./styles.css";

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
  } = useForm({ defaultValues: { subcategory: '', category: '', sum: 0 } });

  let transactions = useSelector(getAllTransactions);
  // console.log('transactions', transactions);
  // let sixMonthsReport = useSelector()
  // нужно дописать селектор и вытягивать из стейта данные, чтобы потом прокинуть их в summary
  let sixMonthsReport = null;

  const onSubmit = async ({ category, subcategory, sum }, e) => {
    // console.log('data', data)
    // console.log('e', e)
    const transactionToAdd = {
      category,
      subcategory,
      sum,
    };
    // console.log('transactionToAdd', transactionToAdd);
    // const status = await transactionsAPI.addTransaction(transactionToAdd);
    const status = dispatch(addTransactionToStore(transactionToAdd));
    console.log('status', status);
    // if (status.code === 200) {
    // const tempBal = getUserBalance()
    // console.log('tempBal', tempBal)
    // dispatch(addTransactionToStore(transactionToAdd))
    let updatedTransactions = await transactionsAPI.getApiTransactions();
    updatedTransactions = updatedTransactions.data;
    console.log('updatedTransactions', updatedTransactions);
    // const temp = getAllUserTransactions()
    // console.log('temp', temp)
    transactions = updatedTransactions.data;
    const tempSixMonthsReport = await transactionsAPI.getApiSixMonthsReport(
      'loss',
    );
    sixMonthsReport = tempSixMonthsReport.data.result;
    console.log('sixMonthsReport', sixMonthsReport);
    // }
  };

  //to reset values after successful submit
  useEffect(() => {
    if (isSubmitSuccessful) {
      console.log('inside isSubmitSuccessful');
      reset({ subcategory: '', category: '', sum: 0 });
    }
  }, [isSubmitSuccessful, reset]);

  console.log(errors);

  const categoryOptions = categories.map(category => ({
    value: category.id,
    label: category.category,
  }));
  // console.log('categoryOptions', categoryOptions)

  return (
    <>
      <form className={s.submit_form} onSubmit={handleSubmit(onSubmit)}>
        {/* <label>First name</label>
            <input type="text" {...register("firstName", { required: true })} />
            {errors.firstName && <p>This is required</p>} */}

        {/* <label>Last name</label>
            <input type="text" {...register("lastName")} /> */}
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
              <option value={option.label} id={option.id}>
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
          ></Button>
        </div>

        {/* <input type="submit" value="Ввод" className={s.submit_button} />
        <input
          // style={{ display: 'block', marginTop: 20 }}
          type="reset"
          value="Очистить"
          className={s.submit_button}
        /> */}
      </form>
      <div className={s.summary_position}>
        <Table transactions={transactions} />
        <Media queries={{ small: { maxWidth: 767 } }}>
          {matches =>
            matches.small ? (
              <></>
            ) : (
              <Summary sixMonthsReport={sixMonthsReport} />
            )
          }
        </Media>
      </div>
    </>
  );
}
