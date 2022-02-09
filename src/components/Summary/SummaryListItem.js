import s from './Summary.module.css';

const SummaryListItem = ({ summary }) => {
  return (
    <li>
      <div>
        {summary.month} {summary.amount}
      </div>
    </li>
  );
};

export default SummaryListItem;
