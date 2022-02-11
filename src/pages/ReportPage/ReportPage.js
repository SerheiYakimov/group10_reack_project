import React from 'react';
import Container from '../../components/Container/Container';
import ArrowToGoBack from '../../components/ArrowToGoBack/ArrowToGoBack';
import BalanceReport from '../../components/BalanceReport/BalanceReport';
import DateReport from '../../components/DateReport/DateReport';
import ExpensesIncome from '../../components/ExpensesIncome/ExpensesIncome';

import s from './ReportPage.module.css';

const ReportPage = () => {
  return (
    <section className={s.section}>
      <Container>
        <div className={s.wrapper}>
          <ArrowToGoBack />
          <div className={s.wrap}>
            <DateReport />
            <BalanceReport />
          </div>
        </div>
        <ExpensesIncome />
      </Container>
    </section>
  );
};

export default ReportPage;
