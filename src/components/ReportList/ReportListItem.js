import { useDispatch } from 'react-redux';
import s from './ReportList.module.css';
import sprite from '../../svg/sprite.svg';
import formatThousands from 'format-thousands';
import { setCategoryAlias } from '../../redux/reports/slice';

const ReportListItem = ({ report }) => {
  const dispatch = useDispatch();
  localStorage.setItem('SelectCategoryAlias', 'product');

  const onHandleSelectCategory = () => {
    console.log(' ! select category - ', report.category_alias);
    localStorage.setItem('SelectCategoryAlias', report.category_alias);
    dispatch(setCategoryAlias(report.category_alias));
  };

  return (
    <li className={s.reportListItem}>
      <div onClick={onHandleSelectCategory} className={s.reportListItemCard}>
        <p className={s.reportListItemTextAmount}>
          {formatThousands(report.totalSum, ' ')}{' '}
        </p>
        <div className={s.reportListItemIcon}>
          <svg
            className={s.reportListIcon}
            fill="#071F41"
            width="56"
            height="56"
          >
            <use href={`${sprite}${report.icon}`}></use>
          </svg>
        </div>
        <p className={s.reportListItemTextTitle}> {report.category_name}</p>
      </div>
    </li>
  );
};

export default ReportListItem;
