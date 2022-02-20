import Balance from '../Balance/Balance';
import TransactionsTable from '../TransactionsTable/TransactionsTable';
import TransactionSwitch from '../TransactionSwitch/TransactionSwitch';
import s from './BalancePageTab.module.css';

export default function BalancePageTab() {
  return (
    <section className={s.section}>
      <Balance />
      <TransactionSwitch />
      <TransactionsTable />
    </section>
  );
}
