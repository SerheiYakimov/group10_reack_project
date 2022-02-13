import s from './ReportList.module.css';
import ReportIncomesList from './ReportIncomesList';
import ReportOutcomesList from './ReportOutcomesList';

const ReportListSection = ({ ReportSwitchIncomes }) => {
  return (
    <section className={s.reportListSection}>
      {ReportSwitchIncomes ? <ReportIncomesList /> : <ReportOutcomesList />}
    </section>
  );
};

export default ReportListSection;
