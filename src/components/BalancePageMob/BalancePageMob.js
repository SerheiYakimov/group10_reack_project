import Balance from '../Balance/Balance';
import TransactionsTable from '../TransactionsTable/TransactionsTable';
import TransactionSwitch from '../TransactionSwitch/TransactionSwitch';

import s from './BalancePageMob.module.css';

export default function BalancePageMob() {
  return (
    <section className={s.section}>
      <Balance />
      <TransactionsTable />
      <TransactionSwitch />
    </section>
  );
}
