import { useDispatch, useSelector } from 'react-redux';
import { goBackMonth, goForwardMonth } from '../../redux/transactions/slice';
import { getMonth, getYear } from '../../redux/transactions/selectors';
import months from '../../json/month.json';
import s from './DateReport.module.css';
import { useEffect } from 'react';
import { getSumByMonth } from '../../redux/reports/operations';

const DateReport = () => {
  const dispatch = useDispatch();

  let month = useSelector(getMonth);
  if (month.length === 1) {
    month = 0 + month;
  }
  const year = useSelector(getYear);

  const date = year + '-' + month;

  const selectedMonth = months.find(el => Number(el.id) === Number(month));

  useEffect(() => {
    dispatch(getSumByMonth(date));
  }, [dispatch, date]);

  const onHandleClickLeft = () => {
    dispatch(goBackMonth());
  };

  const onHandleClickRight = () => {
    dispatch(goForwardMonth());
  };

  return (
    <div className={s.navigationWrapper}>
      <div className={s.reportMonth}>
        <p className={s.title}>Текущий период:</p>
        <div className={s.btnWrapper}>
          <button
            type="button"
            className={s.btnL}
            onClick={onHandleClickLeft}
          ></button>
          <span className={s.reportMonthTitle}>
            {selectedMonth.name} {year}
          </span>
          <button
            type="button"
            className={s.btnR}
            onClick={onHandleClickRight}
          ></button>
        </div>
      </div>
    </div>
  );
};

export default DateReport;
