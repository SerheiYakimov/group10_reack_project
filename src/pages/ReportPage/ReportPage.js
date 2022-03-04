import React from 'react';
import Container from '../../components/Container/Container';
import ArrowToGoBack from '../../components/ArrowToGoBack/ArrowToGoBack';
import BalanceReport from '../../components/BalanceReport/BalanceReport';
import DateReport from '../../components/DateReport/DateReport';
import ReportSwitch from '../../components/ReportSwitch/ReportSwitch';
import ExpensesIncome from '../../components/ExpensesIncome/ExpensesIncome';
import Charts from '../../components/Charts/Charts';
import s from './ReportPage.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import TransactionSelectors from '../../redux/transactions/selectors';
import { getMonth, getYear } from '../../redux/transactions/selectors';
import reportSelectors from '../../redux/reports/selectors';
import reportOperations from '../../redux/reports/operations';

const ReportPage = () => {
  const dispatch = useDispatch();
  const dataNew = useSelector(TransactionSelectors.getSubcategoryData);
  console.log(dataNew, 'DOOOOOOOONE');

  //================== Charts ===============
  const month = useSelector(getMonth);
  const year = useSelector(getYear);
  const reportDataSwitch = year + '-' + month;
  console.log(' ! report data - ', reportDataSwitch);
  const categoryAlias = useSelector(state => state.report.reportCategoryAlias);

  useEffect(() => {
    dispatch(
      reportOperations.getCategoryData({
        date: reportDataSwitch,
        alias: categoryAlias,
      }),
    );
  }, [dispatch, categoryAlias, reportDataSwitch]);

  const chartsData = useSelector(reportSelectors.getCategoryData);
  console.log(' ! Charts Data - ', chartsData);

  //==========================================

  return (
    <section className={s.section}>
      <div className={s.bottomBgWrapper}>
        <Container>
          <div className={s.wrapper}>
            <ArrowToGoBack />
            <div className={s.wrap}>
              <DateReport />
              <BalanceReport />
            </div>
          </div>
          <ExpensesIncome />
          <ReportSwitch />
          <Charts data={chartsData} />
        </Container>
      </div>
    </section>
  );
};

export default ReportPage;
