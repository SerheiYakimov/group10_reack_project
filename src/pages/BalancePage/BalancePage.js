// const BalancePage = () => {
//   return <h1>Balance page</h1>;
// };

// export default BalancePage;

import React from 'react';

import Balance from '../../components/Balance/Balance';

import Container from '../../components/Container/Container';

import s from './BalancePage.module.css';

function HomeView() {
  return (
    <div className={s.bottomBgWrapper}>
      <Container>
        <Balance />
      </Container>
    </div>
  );
}

export default HomeView;
