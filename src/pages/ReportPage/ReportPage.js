import React from 'react';
import Container from '../../components/Container/Container';
import ArrowToGoBack from '../../components/ArrowToGoBack/ArrowToGoBack';
import BalanceReport from '../../components/BalanceReport/BalanceReport';
import DateReport from '../../components/DateReport/DateReport';
import ReportSwitch from '../../components/ReportSwitch/ReportSwitch';
import ExpensesIncome from '../../components/ExpensesIncome/ExpensesIncome';
import Charts from '../../components/Charts/Charts';

import s from './ReportPage.module.css';
import TransactionSwitch from '../../components/TransactionSwitch/TransactionSwitch';

import { SubcategoryMonthReport } from '../../redux/transactions/operations';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCategoryData } from '../../redux/reports/operations';
import TransactionSelectors from '../../redux/transactions/selectors';

const ReportPage = () => {
  const dispatch = useDispatch();
  const dataNew = useSelector(TransactionSelectors.getSubcategoryData);
  console.log(dataNew, 'DOOOOOOOONE');

  const date = '2022-2';
  const alias = 'alcohol';

  // useEffect(() => {
  //   dispatch(SubcategoryMonthReport({ date, alias }));
  // }, [dispatch]);

  // const data = dispatch(SubcategoryMonthReport({ date, alias }));

  // console.log(data, 'CHARTS DATA');

  const chartsData = [
    { subcategory: 'Cвинина', totalSum: 5000 },
    { subcategory: 'Говядина', totalSum: 6500 },
    { subcategory: 'Курица', totalSum: 3200 },
    { subcategory: 'Рыба', totalSum: 2100 },
    { subcategory: 'Панини', totalSum: 1200 },
    { subcategory: 'Кофе', totalSum: 867 },
    { subcategory: 'Спагетти', totalSum: 1345 },
    { subcategory: 'Молоко', totalSum: 400 },
    { subcategory: 'Сыр', totalSum: 250 },
    { subcategory: 'Чай', totalSum: 1147 },
  ];

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
