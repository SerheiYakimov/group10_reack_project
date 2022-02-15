import IncomeSelection from '../IncomeSelection/IncomeSelection';
import s from './Incomes.module.css';
import Table from '../Table/Table';

const Incomes = () => {
  return (
    <>
      <div className={s.container}>
        <IncomeSelection />
        <Table />
      </div>
    </>
  );
};

export default Incomes;
