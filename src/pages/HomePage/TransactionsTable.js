import ProductSelection from '../../components/ProductSelection/ProductSelection';
import Summary from '../../components/Summary/Summary';
import s from './TransactionsTable.module.css';
import Table from '../../components/Table/Table';
import { useSelector } from 'react-redux';
import { getAllTransactions } from '../../redux/transactions/selectors';

const TransactionsTable = () => {
  const tempData = useSelector(getAllTransactions);
  return (
    <>
      <div className={s.container}>
        <ProductSelection />

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
