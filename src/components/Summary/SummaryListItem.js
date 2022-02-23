import s from './Summary.module.css';
import formatThousands from 'format-thousands';

const SummaryListItem = ({ summary }) => {
  return (
    <li className={s.summaryListItem}>
      <div className={s.summaryListItemText}>
        <p className={s.summaryListItemTextMonth}>{summary.period}</p>
        <p className={s.summaryListItemTextAmount}>
          {formatThousands(summary.totalSum, ' ')}
        </p>
      </div>
    </li>
  );
};

export default SummaryListItem;
