import Balance from '../../components/Balance/Balance';
import Media from 'react-media';
import TransactionSwitch from '../../components/TransactionSwitch/TransactionSwitch';
import s from '../BalancePage/BalancePage.module.css';
import DatePicker from '../../components/DatePicker/DatePicker';
import TransactionsForm from '../../components/TransactionForm/TransactionForm';

export default function BalancePage() {
  return (
    <section className={s.section}>
      <Balance />

      <Media queries={{ small: { maxWidth: 767 } }}>
        {matches => (matches.small ? <DatePicker /> : <></>)}
      </Media>

      <div className={s.pageContainer}>
        <Media queries={{ small: { maxWidth: 767 } }}>
          {matches => (matches.small ? <></> : <TransactionSwitch />)}
        </Media>

        <div className={s.container}>
          <TransactionsForm />
        </div>
      </div>
      <Media queries={{ small: { maxWidth: 767 } }}>
        {matches => (matches.small ? <TransactionSwitch /> : <></>)}
      </Media>
    </section>
  );
}

// const BalancePage = () => {
//   const viewPort = useWindowDimensions();

//   return (
//     <section className={s.section}>
//       {viewPort.width < 768 && <BalancePageMob />}
//       {viewPort.width >= 768 && <BalancePageTab />}
//     </section>
//   );
// };
