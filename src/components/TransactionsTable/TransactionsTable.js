import Summary from '../Summary/Summary';
import s from './TransactionsTable.module.css';
import Table from '../Table/Table';
import { useSelector } from 'react-redux';
import { getAllTransactions } from '../../redux/transactions/selectors';
import TransactionsForm from '../TransactionForm/TransactionForm';

const TransactionsTable = () => {
  // const tempData = useSelector(getAllTransactions);
  return (
    <>
      <div className={s.container}>
        <TransactionsForm />

        <div className={s.table_wrapper}>
          <div className={s.table}></div>
          <Table></Table>
          <div className={s.table_month}>
            <Summary />
          </div>
        </div>
      </div>
    </>
  );
};

export default TransactionsTable;
