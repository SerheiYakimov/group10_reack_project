import s from './ReportList.module.css';
import sprite from '../../svg/sprite.svg';
import formatThousands from 'format-thousands';

const ReportIncomesListItem = ({ report }) => {
  return (
    <li className={s.reportListItem}>
      <div className={s.reportListItemCard}>
        <p className={s.reportListItemTextAmount}>
          {formatThousands(report.amount, ' ')}
        </p>
        <svg className={s.reportListIcon} fill="red" width="56" height="56">
          <use href={`${sprite}#${report.icon}`}></use>
        </svg>
        <p> {report.category}</p>
      </div>
    </li>
  );
};

export default ReportIncomesListItem;
