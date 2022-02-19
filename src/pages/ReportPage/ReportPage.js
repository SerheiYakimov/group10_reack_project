import React from 'react';
import Container from '../../components/Container/Container';
import ArrowToGoBack from '../../components/ArrowToGoBack/ArrowToGoBack';
import BalanceReport from '../../components/BalanceReport/BalanceReport';
import DateReport from '../../components/DateReport/DateReport';
import ReportSwitch from '../../components/ReportSwitch/ReportSwitch';
import ExpensesIncome from '../../components/ExpensesIncome/ExpensesIncome';
import Charts from '../../components/Charts/Charts';

import s from './ReportPage.module.css';

const ReportPage = () => {
  const chartsData = [
    { quarter: 'Cвинина', earnings: 5000 },
    { quarter: 'Говядина', earnings: 6500 },
    { quarter: 'Курица', earnings: 3200 },
    { quarter: 'Рыба', earnings: 2100 },
    { quarter: 'Панини', earnings: 1200 },
    { quarter: 'Кофе', earnings: 867 },
    { quarter: 'Спагетти', earnings: 1345 },
    { quarter: 'Молоко', earnings: 400 },
    { quarter: 'Сыр', earnings: 250 },
    { quarter: 'Чай', earnings: 1147 },
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
