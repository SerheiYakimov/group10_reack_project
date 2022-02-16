import { useSelector } from 'react-redux';
// import { getUserBalance } from '../../redux/auth/selectors';
import authSelectors from '../../redux/auth/selectors';
import s from './BalanceReport.module.css';

export default function BalanceReport() {
  // const Balance = useSelector(getUserBalance);
  const Balance = useSelector(authSelectors.getUserBalance);

  return (
    <div className={s.wrapper}>
      <p className={s.balans}>Баланс:</p>

      <input
        type="text"
        name="balance"
        maxLength="10"
        placeholder={Balance ? `${Balance} UAH` : `00.00 UAH`}
        className={s.balanceInput}
        autoComplete="off"
        disabled
      />
    </div>
  );
}
