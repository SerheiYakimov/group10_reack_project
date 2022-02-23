import {
  useSelector,
  // useDispatch
} from 'react-redux';
import reportSelectors from '../../redux/reports/selectors';
// import {
//   getMonth,
//   getYear,
//   getAllTransactions,
// } from '../../redux/transactions/selectors';
// import { useEffect } from 'react';
// import { getSumByMonth } from '../../redux/reports/operations';
import s from './ExpensesIncome.module.css';
import formatThousands from 'format-thousands';

export default function ExpensesIncome() {
  const data = useSelector(reportSelectors.getSumByMonth);
  console.log('EI', data);

  let expenses = 0;
  let income = 0;

  if (data.length > 0) {
    if (data[0]._id === 'loss') {
      expenses = data[0].totalSum;
      income = data[1].totalSum;
    } else {
      income = data[0].totalSum;
      expenses = data[1].totalSum;
    }
  }

  console.log('expenses', expenses);
  console.log('income', income);

  return (
    <section className={s.section}>
      <div className={s.wrapExp}>
        <p className={s.desc}>Расходы:</p>
        <span className={s.expenses}>
          {/* {expenses
            ? ` - ${formatThousands(expenses, ' ')} грн.`
            : ` 00.00 грн`} */}
          {` - ${formatThousands(expenses, ' ')} грн.`}
        </span>
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
        <p className={s.desc}>Доходы: </p>
        <span className={s.incomes}>
          {/* {income ? ` + ${formatThousands(income, ' ')} грн.` : ` 00.00 грн`} */}
          {` + ${formatThousands(income, ' ')} грн.`}
        </span>
      </div>
    </section>
  );
}
