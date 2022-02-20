import Balance from '../Balance/Balance';
import TransactionsTable from '../TransactionsTable/TransactionsTable';
import TransactionSwitch from '../TransactionSwitch/TransactionSwitch';
import Container from '../Container/Container';

import s from './BalancePageMob.module.css';

export default function BalancePageMob() {
  return (
    <Container>
      <Balance />
      <TransactionsTable />
      <div className={s.wrap}>
        <TransactionSwitch />
      </div>
    </Container>
  );
}
