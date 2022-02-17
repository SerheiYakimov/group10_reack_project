import IncomeSelection from '../../components/IncomeSelection/IncomeSelection';
import s from './IncomesPage.module.css';
import Table from '../../components/Table/Table';

const IncomesPage = () => {
  return (
    <>
      <div className={s.container}>
        <IncomeSelection />
        <Table />
      </div>
    </>
  );
};

export default IncomesPage;
