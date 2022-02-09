import { useDispatch, useSelector } from 'react-redux';
import { goBackMonth, goForwardMonth } from '../../redux/transactions/slice';
import { getMonth, getYear } from '../../redux/transactions/selectors';
import months from '../../json/month.json';
import s from './DateReport.module.css';

const DateReport = () => {
  const dispatch = useDispatch();

  const month = useSelector(getMonth);
  const year = useSelector(getYear);

  const selectedMonth = months.find(el => Number(el.id) === Number(month));

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
