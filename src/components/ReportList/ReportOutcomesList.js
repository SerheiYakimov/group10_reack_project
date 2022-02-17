import ReportOutcomesListItem from './ReportOutcomesListItem';
import s from './ReportList.module.css';

const reportOutcomesData = [
  {
    id: '1',
    category: 'продукты',
    icon: 'icon-products',
    amount: '99999.99',
  },
  { id: '2', category: 'алкоголь', icon: 'icon-alcohol', amount: '99999.99' },
  {
    id: '3',
    category: 'развлечения',
    icon: 'icon-entertainment',
    amount: '99999.99',
  },
  { id: '4', category: 'здоровье', icon: 'icon-health', amount: '99999.99' },
  {
    id: '5',
    category: 'транспорт',
    icon: 'icon-transport',
    amount: '9999.99',
  },
  {
    id: '6',
    category: 'все для дома',
    icon: 'icon-homeware',
    amount: '99999.99',
  },
  { id: '7', category: 'техника', icon: 'icon-technics', amount: '999.99' },
  {
    id: '8',
    category: 'коммуналка',
    icon: 'icon-invoices',
    amount: '9999.99',
  },
  {
    id: '9',
    category: 'спорт, хобби',
    icon: 'icon-hobbies',
    amount: '99999.99',
  },
  {
    id: '10',
    category: 'образование',
    icon: 'icon-education',
    amount: '999.99',
  },
  { id: '11', category: 'прочее', icon: 'icon-other', amount: '99.99' },
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
