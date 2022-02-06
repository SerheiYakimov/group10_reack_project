import React from 'react';
import Container from '../../components/Container/Container';
import ArrowToGoBack from '../../components/ArrowToGoBack/ArrowToGoBack';

import s from './ReportPage.module.css';

const ReportPage = () => {
  return (
    <section className={s.section}>
      <Container>
        <ArrowToGoBack />
      </Container>
    </section>
  );
};

export default ReportPage;
