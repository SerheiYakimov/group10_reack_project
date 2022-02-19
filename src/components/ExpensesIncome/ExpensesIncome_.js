import { useSelector, useDispatch } from 'react-redux';
import {
  getMonth,
  getYear,
  getAllTransactions,
} from '../../redux/transactions/selectors';
import { useEffect } from 'react';
import { getAllSum } from '../../redux/transactions/operations';
import s from './ExpensesIncome.module.css';

export default function ExpensesIncome() {
  // const month = useSelector(getMonth);
  // const year = useSelector(getYear);
  // let normalizeMonth;

  // if (month.length === 1) {
  //   normalizeMonth = '0' + month;
  // }

  // const currentDate = `${year}-${normalizeMonth}`;

  // const data = useSelector(getAllTransactions);

  // const expenses = data.find(el => el.id === 'расход');
  // const income = data.find(el => el.id === 'доход');

  const expenses = 0.0;
  const income = 0.0;

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getAllSum({ date: currentDate }));
  // }, [currentDate, dispatch]);

  return (
    <section className={s.section}>
      <div className={s.wrapExp}>
        <p className={s.desc}> Расходы:</p>
        <span className={s.expenses}>{`- ${expenses.totalSum}.00 грн.`}</span>
      </div>
      {/* <svg
        className={s.strip}
        width="1"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1 0V70.5" stroke="#E0E5EB" />
      </svg> */}

      <div className={s.wrapInc}>
        <p className={s.desc}>Доходы:</p>
        <span className={s.incomes}>{`+ ${income.totalSum}.00 грн.`}</span>
      </div>
    </section>
  );
}
