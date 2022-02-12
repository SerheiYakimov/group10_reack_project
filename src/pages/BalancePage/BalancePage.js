// const BalancePage = () => {
//   return <h1>Balance page</h1>;
// };

// export default BalancePage;

import React from 'react';

import Balance from '../../components/Balance/Balance';

import Container from '../../components/Container/Container';

function HomeView() {
  return (
    <>
      <Container>
        <Balance />
      </Container>
    </>
  );
}

export default HomeView;
