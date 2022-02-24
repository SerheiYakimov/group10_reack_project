import { useSelector, useDispatch } from 'react-redux';
import reportSelectors from '../../redux/reports/selectors';
import reportOperations from '../../redux/reports/operations';
import s from './ReportList.module.css';
import { useEffect } from 'react';
import ReportList from './ReportList';
import { getMonth, getYear } from '../../redux/transactions/selectors';

const ReportListSection = ({ ReportSwitchIncomes }) => {
  const dispatch = useDispatch();

  const month = useSelector(getMonth);
  const year = useSelector(getYear);
  const reportDataSwitch = year + '-' + month;

  useEffect(() => {
    ReportSwitchIncomes
      ? dispatch(
          reportOperations.getIncomesData({
            date: reportDataSwitch,
            type: 'income',
          }),
        )
      : dispatch(
          reportOperations.getOutcomesData({
            date: reportDataSwitch,
            type: 'loss',
          }),
        );
  }, [dispatch, ReportSwitchIncomes, reportDataSwitch]);

  const reportIncomesData = useSelector(reportSelectors.getIncomesData);
  console.log('- incomes', reportIncomesData);
  const reportOutcomesData = useSelector(reportSelectors.getOutcomesData);
  console.log('- outcomes ', reportOutcomesData);

  return (
    <section className={s.reportListSection}>
      {ReportSwitchIncomes ? (
        <ReportList reportData={reportIncomesData} />
      ) : (
        <ReportList reportData={reportOutcomesData} />
      )}
    </section>
  );
};

export default ReportListSection;
