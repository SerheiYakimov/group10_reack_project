import { useSelector, useDispatch } from 'react-redux';
import reportSelectors from '../../redux/reports/selectors';
import reportOperations from '../../redux/reports/operations';
import { useEffect, useState } from 'react';
import s from './ReportList.module.css';
import sprite from '../../svg/sprite.svg';
import formatThousands from 'format-thousands';
import { getMonth, getYear } from '../../redux/transactions/selectors';

// import { useSelector, useDispatch } from 'react-redux';
// import reportSelectors from '../../redux/reports/selectors';
// import reportOperations from '../../redux/reports/operations';
// import { useEffect } from 'react';
// import { getMonth, getYear } from '../../redux/transactions/selectors';

// const getDataForCarts = ({ categoryName }) => {
//   const dispatch = useDispatch();
//   const month = useSelector(getMonth);
//   const reportDataSwitch = year + '-' + month;
//   console.log(' ! report data - ', reportDataSwitch);

//   useEffect(() => {
//     dispatch(
//       reportOperations.getCategoryData({
//         date: reportDataSwitch,
//         type: categoryName,
//       }),
//     );
//   }, [dispatch, categoryName]);

//   const reportChartsData = useSelector(reportSelectors.getCategoryData);
//   console.log(' Charts Data - ', reportChartsData);
// };

// export default getDataForCarts;

const ReportListItem = ({ report }) => {
  const [reportCategoryAlias, setCategoryAlias] = useState(
    report.category_alias,
  );

  const onHandleSelectCategory = () => {
    console.log(' ! select category - ', report.category_alias);
    setCategoryAlias(report.category_alias);
    console.log(reportCategoryAlias);

    //useSelector(setCategoryAlias(report.category_alias));
    //const category = useSelector(setCategoryAlias);
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
