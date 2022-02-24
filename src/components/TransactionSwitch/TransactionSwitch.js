import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeIncomeState } from '../../redux/incomeReducer/slice';
import s from './TransactionSwitch.module.css';

const TransactionSwitch = () => {
  const dispatch = useDispatch();
  const [TransactionSwitchIncomes, setTransactionSwitchIncomes] =
    useState(false);
  localStorage.setItem('SwitchIncomes', false);
  const onHandleClickIncomes = () => {
    dispatch(changeIncomeState(true));
    setTransactionSwitchIncomes(true);
    localStorage.setItem('SwitchIncomes', TransactionSwitchIncomes);
  };
  const onHandleClickOutcomes = () => {
    dispatch(changeIncomeState(false));
    setTransactionSwitchIncomes(false);
    localStorage.setItem('SwitchIncomes', TransactionSwitchIncomes);
  };

  return (
    <nav className={s.transactionSwitchNavigation}>
      <ul className={s.transactionSwitcList}>
        <li className={s.transactionSwitcItem}>
          <button
            className={
              TransactionSwitchIncomes
                ? `${s.transactionSwitchButton}`
                : `${s.transactionSwitchActiveButton}`
            }
            onClick={onHandleClickOutcomes}
          >
            <span>РАСХОД</span>
          </button>
        </li>
        <li className={s.transactionSwitcItem}>
          <button
            className={
              TransactionSwitchIncomes
                ? `${s.transactionSwitchActiveButton}`
                : `${s.transactionSwitchButton}`
            }
            onClick={onHandleClickIncomes}
          >
            <span>ДОХОД</span>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default TransactionSwitch;
