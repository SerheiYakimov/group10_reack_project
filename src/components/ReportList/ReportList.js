import s from './ReportList.module.css';
import ReportListItem from './ReportListItem';

export default function ReportList({ reportData }) {
  return (
    <div>
      {reportData && (
        <ul className={s.reportList}>
          {reportData.map(report => (
            <ReportListItem report={report} key={Math.random()} />
          ))}
        </ul>
      )}
    </div>
  );
}
