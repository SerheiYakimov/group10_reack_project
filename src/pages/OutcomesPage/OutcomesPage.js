import ProductSelection from '../../components/ProductSelection/ProductSelection';
import s from './OutcomesPage.module.css';

const OutcomesPage = () => {
  return (
    <>
      <div className={s.container}>
        <ProductSelection></ProductSelection>
      </div>
    </>
  );
};

export default OutcomesPage;
