import Balance from '../Balance/Balance';
import TransactionsTableMob from '../TransactionsTable/TransactionsTableMob';
import TransactionSwitch from '../TransactionSwitch/TransactionSwitch';
import Container from '../Container/Container';

import s from './BalancePageMob.module.css';

export default function BalancePageMob() {
  return (
    <Container>
      <div className={s.wrapper}>
        <Balance />
        <TransactionsTableMob />
      </div>
      <div className={s.wrap}>
        <TransactionSwitch />
      </div>
    </Container>
  );
}
