import IncomeSelection from '../../components/IncomeSelection/IncomeSelection';
import s from './IncomesPage.module.css';

const IncomesPage = () => {
  return (
    <>
      <div className={s.container}>
        <IncomeSelection />
      </div>
    </>
  );
};

export default IncomesPage;
