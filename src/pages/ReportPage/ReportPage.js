import React, { useState } from 'react';
import Container from '../../components/Container/Container';
import ArrowToGoBack from '../../components/ArrowToGoBack/ArrowToGoBack';
import BalanceReport from '../../components/BalanceReport/BalanceReport';
import DateReport from '../../components/DateReport/DateReport';
import ReportSwitch from '../../components/ReportSwitch/ReportSwitch';
import ExpensesIncome from '../../components/ExpensesIncome/ExpensesIncome';
import Charts from '../../components/Charts/Charts';
import s from './ReportPage.module.css';
import TransactionSwitch from '../../components/TransactionSwitch/TransactionSwitch';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import TransactionSelectors from '../../redux/transactions/selectors';
import { getMonth, getYear } from '../../redux/transactions/selectors';
import reportSelectors from '../../redux/reports/selectors';
import { getChartCategoryAlias } from '../../redux/reports/selectors';
import reportOperations from '../../redux/reports/operations';

const ReportPage = () => {
  const dispatch = useDispatch();
  const dataNew = useSelector(TransactionSelectors.getSubcategoryData);
  console.log(dataNew, 'DOOOOOOOONE');

  // const date = '2022-2';
  // const alias = 'alcohol';
  // const data = dispatch(SubcategoryMonthReport({ date, alias }));
  // console.log(data, 'CHARTS DATA');
  // useEffect(() => {
  //   dispatch(SubcategoryMonthReport({ date, alias }));
  // }, [dispatch]);

  //================== Charts ===============
  const month = useSelector(getMonth);
  const year = useSelector(getYear);
  const reportDataSwitch = year + '-' + month;
  console.log(' ! report data - ', reportDataSwitch);
  const categoryAlias = 'products';
  //const categoryAlias = useSelector(reportSelectors.getChartCategoryAlias);

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

  // const chartsData = [
  //   { subcategory: 'Cвинина', totalSum: 5000 },
  //   { subcategory: 'Говядина', totalSum: 6500 },
  //   { subcategory: 'Курица', totalSum: 3200 },
  //   { subcategory: 'Рыба', totalSum: 2100 },
  //   { subcategory: 'Панини', totalSum: 1200 },
  //   { subcategory: 'Кофе', totalSum: 867 },
  //   { subcategory: 'Спагетти', totalSum: 1345 },
  //   { subcategory: 'Молоко', totalSum: 400 },
  //   { subcategory: 'Сыр', totalSum: 250 },
  //   { subcategory: 'Чай', totalSum: 1147 },
  // ];

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
