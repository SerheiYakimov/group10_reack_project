import ProductSelection from '../../components/ProductSelection/ProductSelection';
import Summary from '../../components/Summary/Summary';
import s from './OutcomesPage.module.css';
const OutcomesPage = () => {
  return (
    <>
      <div className={s.container}>
        <ProductSelection />
        <Summary />
      </div>
    </>
  );
};

export default OutcomesPage;
