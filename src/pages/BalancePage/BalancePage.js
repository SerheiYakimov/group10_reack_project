import React from 'react';
import BalancePageMob from '../../components/BalancePageMob/BalancePageMob';
import BalancePageTab from '../../components/BalancePageTab/BalancePageTab';

import useWindowDimensions from '../../hooks/useWindowDimensions';
import s from './BalancePage.module.css';

const BalancePage = () => {
  const viewPort = useWindowDimensions();

  return (
    <section className={s.section}>
      {viewPort.width < 768 && <BalancePageMob />}
      {viewPort.width >= 768 && <BalancePageTab />}
    </section>
  );
};

export default BalancePage;
