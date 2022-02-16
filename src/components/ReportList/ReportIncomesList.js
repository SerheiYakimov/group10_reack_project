import ReportIncomesListItem from './ReportIncomesListItem';
import s from './ReportList.module.css';

const reportIncomesData = [
  { id: '1', category: 'зп', icon: 'icon-salary', amount: '9999999.99' },
  {
    id: '2',
    category: 'доп. доход',
    icon: 'icon-additionalIncome',
    amount: '999999.99',
  },
];

export default function ReportIncomesList() {
  return (
    <div>
      {reportIncomesData && (
        <ul className={s.reportList}>
          {reportIncomesData.map(report => (
            <ReportIncomesListItem key={Math.random()} report={report} />
          ))}
        </ul>
      )}
    </div>
  );
}
