import SummaryListItem from './SummaryListItem';
import s from './Summary.module.css';
import { logDOM } from '@testing-library/react';

const summaryData = [
  { id: '1', month: 'Январь', amount: '999999.99' },
  { id: '2', month: 'Февраль', amount: '999999.99' },
  { id: '3', month: 'Март ', amount: '999999.99' },
  { id: '4', month: 'Апрель', amount: '999999.99' },
  { id: '5', month: 'Май', amount: '999999.99' },
  { id: '6', month: 'Июнь', amount: '999999.99' },
];

export default function SummaryList() {
  return (
    <div>
      {summaryData && (
        <ul className={s.summaryList}>
          {summaryData.map(summary => (
            <SummaryListItem summary={summary} />
          ))}
        </ul>
      )}
    </div>
  );
}
