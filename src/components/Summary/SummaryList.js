import SummaryListItem from './SummaryListItem';
import s from './Summary.module.css';
import { logDOM } from '@testing-library/react';

export default function SummaryList({ summaryData }) {
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
