import ProductSelection from '../../components/ProductSelection/ProductSelection';
import Summary from '../../components/Summary/Summary';
import s from './OutcomesPage.module.css';
import Table from '../../components/Table/Table';

const OutcomesPage = () => {
  return (
    <>
      <div className={s.container}>
        <ProductSelection></ProductSelection>
        <Table></Table>
      </div>
    </>
  );
};

export default OutcomesPage;
