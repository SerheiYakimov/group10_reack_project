import ProductSelection from '../ProductSelection/ProductSelection';
import Summary from '../Summary/Summary';
import s from './Outcomes.module.css';
import Table from '../Table/Table';

const Outcomes = () => {
  return (
    <>
      <div className={s.container}>
        <ProductSelection />

        <Table></Table>

        <Summary />
      </div>
    </>
  );
};

export default Outcomes;
