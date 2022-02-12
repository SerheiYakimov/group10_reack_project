import { useSelector } from 'react-redux';
import { getMonth, getYear } from '../../redux/transactions/selectors';
import s from './ExpensesIncome.module.css';

export default function ExpensesIncome() {
  const month = useSelector(getMonth);
  const year = useSelector(getYear);

  return (
    <section className={s.section}>
      <div className={s.wrapExp}>
        <p className={s.desc}> Расходы:</p>
        <span className={s.expenses}>- 18 000.00 грн</span>
      </div>
      <svg
        className={s.strip}
        width="1"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1 0V70.5" stroke="#E0E5EB" />
      </svg>

      <div className={s.wrapInc}>
        <p className={s.desc}>Доходы:</p>
        <span className={s.incomes}>+ 45 000.00 грн</span>
      </div>
    </section>
  );
}
