import s from './Summary.module.css';

const SummaryListItem = ({ summary }) => {
  return (
    <li className={s.summaryListItem}>
      <div className={s.summaryListItemText}>
        <p className={s.summaryListItemTextMonth}>{summary.month}</p>
        <p className={s.summaryListItemTextAmount}>{summary.amount}</p>
      </div>
    </li>
  );
};

export default SummaryListItem;
