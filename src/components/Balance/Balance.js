import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import GoToReports from '../GoToReports';
import Notify from '../Notify/Notify';
import authSelectors from '../../redux/auth/selectors';
import authOperations from '../../redux/auth/operations';
import reportOperations from '../../redux/reports/operations';
import s from './Balance.module.css';

export default function Balance() {
  const userBalance = useSelector(authSelectors.getUserBalance);
  const isRefreshingBalance = useSelector(authSelectors.getIsRefreshingBalance);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(authOperations.getUserBalance());
  // }, [dispatch]);

  const handleSubmit = e => {
    e.preventDefault();
    let balance = e.target.elements.balance.value;
    if (!balance || Number(balance) === 0) {
      return toast.error('Внесите пожалуйста сумму на баланс больше нуля');
    }
    const newBalance = Number(balance);
    e.target.elements.balance.value = '';
    dispatch(reportOperations.setUserBalance({ balance: newBalance }));
  };

  return (
    <div className={s.containerBalance}>
      <GoToReports />
      <form className={s.formBalance} onSubmit={handleSubmit}>
        <p className={s.balanceLabel}>Баланс:</p>
        <div className={s.balanceAndBtn}>
          {isRefreshingBalance ? (
            <input
              type="text"
              name="balance"
              maxLength="10"
              // placeholder={userBalance ? `${userBalance} UAH` : `00.00 UAH`}
              className={
                userBalance === null ? s.initialBalanceInput : s.balanceInput
              }
              autoComplete="off"
            />
          ) : (
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
          )}

          {userBalance === null && (
            <button type="submit" className={s.confirmButton}>
              ПОДТВЕРДИТЬ
            </button>
          )}
        </div>
      </form>

      <>{/* {showIncome && <IncomesPage />} */}</>
      {!isRefreshingBalance && userBalance === null && <Notify />}
    </div>
  );
}

// <button type="submit" className={s.confirmButton}>
//   ПОДТВЕРДИТЬ
// </button>;
