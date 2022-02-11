// const BalancePage = () => {
//   return <h1>Balance page</h1>;
// };

// export default BalancePage;

import React from 'react';

import Balance from '../../components/Balance/Balance';

import Container from '../../components/Container/Container';

// import Notify from '../../components/Notify/Notify';

// import s from './HomeView.module.scss';

function HomeView() {
  return (
    <>
      <Container>
        <Balance />
        {/* <Notify /> */}
      </Container>
    </>
  );
}

export default HomeView;
