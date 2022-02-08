import { useSelector } from 'react-redux';
import styles from './BalanceForReports.module.scss';
import authSelector from '../../redux/auth/auth-selector';

function BalanceForReports() {
  const balance = useSelector(authSelector.getBalance);

  return (
    <div className={styles['container']}>
      <div className={styles['balance-case']}>
        <p className={styles['balance-name']}>Баланс:</p>
        <div className={styles['balance-case2']}>
          <span className={styles['balance-sum']}>{`${balance}  UAH.`}</span>
        </div>
      </div>
    </div>
  );
}

export default BalanceForReports;
