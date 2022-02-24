import { useSelector, useDispatch } from 'react-redux';
import s from './Summary.module.css';
import SummaryTitle from './SummaryTitle';
import SummaryList from './SummaryList';
import reportSelectors from '../../redux/reports/selectors';
import reportOperations from '../../redux/reports/operations';
import { getIncomeState } from '../../redux/incomeReducer/selectors';
import { useEffect } from 'react';

const Summary = () => {
  const dispatch = useDispatch();
  const switchIncomes = useSelector(getIncomeState);

  useEffect(() => {
    switchIncomes
      ? dispatch(reportOperations.getSummaryData('income'))
      : dispatch(reportOperations.getSummaryData('loss'));
  }, [dispatch, switchIncomes]);

  const summaryData = useSelector(reportSelectors.getSummaryData);

  return (
    <section className={s.summarySection}>
      <SummaryTitle />
      <SummaryList summaryData={summaryData} />
    </section>
  );
};

export default Summary;
