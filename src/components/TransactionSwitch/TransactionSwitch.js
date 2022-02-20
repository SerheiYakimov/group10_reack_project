import s from './TransactionSwitch.module.css';

const TransactionSwitch = () => {
  const onHandleClickIncomes = () => {};
  const onHandleClickOutcomes = () => {};

  return (
    <nav className={s.transactionSwitchNavigation}>
      <ul className={s.transactionSwitcList}>
        <li className={s.transactionSwitcItem}>
          <button
            className={s.transactionSwitchButton}
            activeClassName={s.transactionSwitchActiveButton}
            onClick={onHandleClickOutcomes}
          >
            <span>РАСХОД</span>
          </button>
        </li>
        <li className={s.transactionSwitcItem}>
          <button
            className={s.transactionSwitchButton}
            activeClassName={s.transactionSwitchActiveButton}
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
