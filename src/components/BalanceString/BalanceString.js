import React, { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import balanceOperetion from '../../redux/balance/balance-operations';
// import balanceSelector from '../../redux/balance/balance-selectors';
import styles from './BalanceString.module.scss';

export default function BalanceString() {
  // const currentBalance = useSelector(balanceSelector.getBalance);
  // const dispatch = useDispatch();
  const [balance, setBalance] = useState('');

  const handleChange = evt => {
    const balance = evt.target.value;
    setBalance(balance);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    console.log(`получен баланс ${balance}`);
    // dispatch(balanceOperetion.addBalance(+balance));
    setBalance('');
  };

  return (
    <form className={styles.balance_string} onSubmit={handleSubmit}>
      <label className={styles.form_label}>
        <span className={styles.form_title}>Баланс:</span>
        <span className={styles.input_box}>
          <input
            className={styles.input}
            type="text"
            // placeholder={`${currentBalance} ГРН`}
            value={balance}
            name="balance"
            onChange={handleChange}
            pattern="\d+(\.\d{2})"
            title="Баланс должен состоять из цифр, разделителя 'точка' и не более двух цифр после точки"
            required
          />
        </span>
      </label>
    </form>
  );
}
