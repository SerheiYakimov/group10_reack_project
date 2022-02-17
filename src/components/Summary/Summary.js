import Media from 'react-media';
import { useSelector, useDispatch } from 'react-redux';
import s from './Summary.module.css';
import SummaryTitle from './SummaryTitle';
import SummaryList from './SummaryList';
import reportSelectors from '../../redux/reports/selectors';
import reportOperations from '../../redux/reports/operations';
import getSummaryData from '../../redux/reports/operations';

const summaryData = [
  { id: '1', month: 'Январь', amount: ' 15000.00' },
  { id: '2', month: 'Февраль', amount: '20000.00' },
  { id: '3', month: 'Март ', amount: '4000.00' },
  { id: '4', month: 'Апрель', amount: '12000.00' },
  { id: '5', month: 'Май', amount: '20000.00' },
  { id: '6', month: 'Июнь', amount: '8000.00' },
];

// const summaryData = useSelector(reportSelectors.getSummaryData);
// console.log(summaryData);
// const dispatch = useDispatch();
// dispatch(reportOperations.getSummaryData({ date: '2022-01' }));

const Summary = () => {
  return (
    <section className={s.summarySection}>
      <SummaryTitle />
      <SummaryList summaryData={summaryData} />
    </section>
  );
};

export default Summary;
