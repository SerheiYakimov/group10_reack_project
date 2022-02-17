import { useSelector, useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import GoToReports from '../GoToReports';
import Notify from '../Notify/Notify';
import authSelectors from '../../redux/auth/selectors';
import authOperations from '../../redux/auth/operations';

import OutcomesPage from '../../pages/OutcomesPage/OutcomesPage';
import IncomesPage from '../../pages/IncomesPage/IncomesPage';
import s from './Balance.module.css';

export default function Balance() {
  const showIncome = Boolean(false);

  const userBalance = useSelector(authSelectors.getUserBalance);
  console.log(userBalance);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    let balance = e.target.elements.balance.value;
    console.log(balance);
    if (!balance || Number(balance) === 0) {
      return toast.error('Внесите пожалуйста сумму на баланс больше нуля');
    }
    const newBalance = Number(balance);
    dispatch(authOperations.setUserBalance({ balance: newBalance }));
    e.target.elements.balance.value = '';
  };

  return (
    <div className={s.containerBalance}>
      <GoToReports />
      <form className={s.formBalance} onSubmit={handleSubmit}>
        <p className={s.balanceLabel}>Баланс:</p>
        <div className={s.balanceAndBtn}>
          <input
            type="text"
            name="balance"
            maxLength="10"
            placeholder={userBalance ? `${userBalance} UAH` : `00.00 UAH`}
            className={
              userBalance === null ? s.initialBalanceInput : s.balanceInput
            }
            autoComplete="off"
          />
          {userBalance === null && (
            <button type="submit" className={s.confirmButton}>
              ПОДТВЕРДИТЬ
            </button>
          )}
        </div>
      </form>

      <>
        <OutcomesPage />
        {showIncome && <IncomesPage />}
      </>
      {userBalance === null && <Notify />}
    </div>
  );
}

/* <button type="submit" className={s.confirmButton}>
    ПОДТВЕРДИТЬ
  </button> */
