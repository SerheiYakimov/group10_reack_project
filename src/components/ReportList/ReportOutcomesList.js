import ReportOutcomesListItem from './ReportOutcomesListItem';
import s from './ReportList.module.css';

const reportOutcomesData = [
  {
    id: '1',
    category: 'продукты',
    icon: 'icon-products',
    amount: '3000.00',
  },
  { id: '2', category: 'алкоголь', icon: 'icon-alcohol', amount: '100.00' },
  {
    id: '3',
    category: 'развлечения',
    icon: 'icon-entertainment',
    amount: '3000.00',
  },
  { id: '4', category: 'здоровье', icon: 'icon-health', amount: '300.00' },
  {
    id: '5',
    category: 'транспорт',
    icon: 'icon-transport',
    amount: '2000.00',
  },
  {
    id: '6',
    category: 'все для дома',
    icon: 'icon-homeware',
    amount: '4000.00',
  },
  { id: '7', category: 'техника', icon: 'icon-technics', amount: '500.00' },
  {
    id: '8',
    category: 'коммуналка',
    icon: 'icon-invoices',
    amount: '2000.00',
  },
  {
    id: '9',
    category: 'спорт, хобби',
    icon: 'icon-hobbies',
    amount: '5000.00',
  },
  {
    id: '10',
    category: 'образование',
    icon: 'icon-education',
    amount: '1000.00',
  },
  { id: '11', category: 'прочее', icon: 'icon-other', amount: '400.00' },
];

export default function ReportOutcomesList() {
  return (
    <div>
      {reportOutcomesData && (
        <ul className={s.reportList}>
          {reportOutcomesData.map(report => (
            <ReportOutcomesListItem key={Math.random()} report={report} />
          ))}
        </ul>
      )}
    </div>
  );
}
