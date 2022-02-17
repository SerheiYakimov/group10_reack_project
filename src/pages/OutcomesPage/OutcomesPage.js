import ProductSelection from '../../components/ProductSelection/ProductSelection';
import Summary from '../../components/Summary/Summary';
import s from './OutcomesPage.module.css';
import Table from '../../components/Table/Table';

const OutcomesPage = () => {
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

export default OutcomesPage;
