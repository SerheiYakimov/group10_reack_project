import { useSelector, useDispatch } from 'react-redux';
import reportSelectors from '../../redux/reports/selectors';
import reportOperations from '../../redux/reports/operations';
import s from './ReportList.module.css';

import ReportList from './ReportList';

// const reportOutcomesData = [
//   {
//     id: '1',
//     category: 'продукты',
//     icon: 'icon-products',
//     amount: '3000.00',
//   },
//   { id: '2', category: 'алкоголь', icon: 'icon-alcohol', amount: '100.00' },
//   {
//     id: '3',
//     category: 'развлечения',
//     icon: 'icon-entertainment',
//     amount: '3000.00',
//   },
//   { id: '4', category: 'здоровье', icon: 'icon-health', amount: '300.00' },
//   {
//     id: '5',
//     category: 'транспорт',
//     icon: 'icon-transport',
//     amount: '2000.00',
//   },
//   {
//     id: '6',
//     category: 'все для дома',
//     icon: 'icon-homeware',
//     amount: '4000.00',
//   },
//   { id: '7', category: 'техника', icon: 'icon-technics', amount: '500.00' },
//   {
//     id: '8',
//     category: 'коммуналка',
//     icon: 'icon-invoices',
//     amount: '2000.00',
//   },
//   {
//     id: '9',
//     category: 'спорт, хобби',
//     icon: 'icon-hobbies',
//     amount: '5000.00',
//   },
//   {
//     id: '10',
//     category: 'образование',
//     icon: 'icon-education',
//     amount: '1000.00',
//   },
//   { id: '11', category: 'прочее', icon: 'icon-other', amount: '400.00' },
// ];

// const reportIncomesData = [
//   { id: '1', category: 'зп', icon: 'icon-salary', amount: '25000.00' },
//   {
//     id: '2',
//     category: 'доп. доход',
//     icon: 'icon-additionalIncome',
//     amount: '10000.00',
//   },
// ];

const ReportListSection = ({ ReportSwitchIncomes }) => {
  const dispatch = useDispatch();

  console.log('report sw - ', ReportSwitchIncomes);

  if (!ReportSwitchIncomes) {
    dispatch(
      reportOperations.getIncomesData({ date: '2022-2', type: 'income' }),
    );
    console.log('incomes start ....');
  } else {
    dispatch(
      reportOperations.getOutcomesData({ date: '2022-2', type: 'outcome' }),
    );
    console.log('outcomes start ....');
  }

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
