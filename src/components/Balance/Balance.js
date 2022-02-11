import ToReportsButton from '../Buttons/ToReportsButton';
import BalanceString from '../BalanceString';
import Button from '../Buttons/Button';
import Notify from '../../components/Notify/Notify';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import styles from './Balance.module.scss';

//delete before poolrequest
// import { createReducer } from '@reduxjs/toolkit';

// export const balanceReducer = createReducer(0, {});
///
export default function Balance() {
  const balance = useSelector(state => state.balance);

  const [isModal, setIsModal] = useState(true);

  useEffect(() => {
    if (balance > 0) {
      setIsModal(false);
    }
  }, [balance]);

  return (
    <div className={styles.BalanceHome}>
      <BalanceString styles={styles}></BalanceString>
      {isModal && <Notify />}
      <Button />
      <ToReportsButton />
    </div>
  );
}
