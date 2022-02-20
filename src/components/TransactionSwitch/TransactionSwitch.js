import React, { useState } from 'react';
import s from './TransactionSwitch.module.css';

const TransactionSwitch = () => {
  const [TransactionSwitchIncomes, setTransactionSwitchIncomes] =
    useState(false);

  const onHandleClickIncomes = () => {
    setTransactionSwitchIncomes(true);
  };
  const onHandleClickOutcomes = () => {
    setTransactionSwitchIncomes(false);
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
