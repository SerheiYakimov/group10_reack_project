import s from './Summary.module.css';
import formatThousands from 'format-thousands';
import monthArray from '../../json/month.json';
import { number } from 'yup';
import React from 'react';

const SummaryListItem = ({ summary }) => {
  const summaryPeriod = summary.period;

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
