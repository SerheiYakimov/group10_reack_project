import Media from 'react-media';
import { useSelector, useDispatch } from 'react-redux';
import s from './Summary.module.css';
import SummaryTitle from './SummaryTitle';
import SummaryList from './SummaryList';
// import reportSelectors from '../../redux/reports/selectors';
// import reportOperations from '../../redux/reports/operations';

const summaryData = [
  { id: '1', month: 'Январь', amount: '- 99999999.99' },
  { id: '2', month: 'Февраль', amount: '999.99' },
  { id: '3', month: 'Март ', amount: '999999.99' },
  { id: '4', month: 'Апрель', amount: '99999.99' },
  { id: '5', month: 'Май', amount: '9999.99' },
  { id: '6', month: 'Июнь', amount: '- 9.99' },
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
