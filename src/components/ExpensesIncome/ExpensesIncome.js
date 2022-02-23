import { useSelector } from 'react-redux';
import reportSelectors from '../../redux/reports/selectors';
import s from './ExpensesIncome.module.css';
import formatThousands from 'format-thousands';

export default function ExpensesIncome() {
  const data = useSelector(reportSelectors.getSumByMonth);

  let expenses = 0;
  let income = 0;

  const lossIdx = data.findIndex(date => date._id === 'loss');
  const incomIdx = data.findIndex(date => date._id === 'income');

  if (lossIdx !== -1) {
    expenses = data[lossIdx].totalSum;
  }
  if (incomIdx !== -1) {
    income = data[incomIdx].totalSum;
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
            : ` - 00.00 грн`} */}
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
          {/* {income ? ` + ${formatThousands(income, ' ')} грн.` : ` + 00.00 грн`} */}
          {` + ${formatThousands(income, ' ')} грн.`}
        </span>
      </div>
    </section>
  );
}
