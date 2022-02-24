import s from './Summary.module.css';
import formatThousands from 'format-thousands';
import monthArray from '../../json/month.json';
import React from 'react';

const SummaryListItem = ({ summary }) => {
  const summaryPeriod =
    monthArray[Number(summary.period.toString().substr(4, 2)) - 1].name;
  return (
    <li className={s.summaryListItem}>
      <div className={s.summaryListItemText}>
        <p className={s.summaryListItemTextMonth}>{summaryPeriod}</p>
        <p className={s.summaryListItemTextAmount}>
          {formatThousands(summary.totalSum, ' ')}
        </p>
      </div>
    </li>
  );
};

export default SummaryListItem;
