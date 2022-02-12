import Media from 'react-media';
import s from './Summary.module.css';
import SummaryTitle from './SummaryTitle';
import SummaryList from './SummaryList';

const Summary = () => {
  return (
    <section className={s.summarySection}>
      <SummaryTitle />
      <SummaryList />
    </section>
  );
};

export default Summary;
