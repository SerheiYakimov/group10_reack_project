import React, { useState } from 'react';
import ReportListSection from '../ReportList/ReportListSection';
import s from './ReportSwitch.module.css';

const ReportSwitch = () => {
  const [ReportSwitchIncomes, setReportSwitchIncomes] = useState(false);

  const onHandleClick = () => {
    setReportSwitchIncomes(!ReportSwitchIncomes);
  };

  return (
    <div className={s.reportSwitchWrapper}>
      <div className={s.reportSwitch}>
        <div className={s.reportButtonWrapper}>
          <button
            type="button"
            className={s.reportButtonLeft}
            onClick={onHandleClick}
          ></button>
          <span className={s.reportSwitchTitle}>
            {ReportSwitchIncomes ? 'ДОХОДЫ' : 'РАСХОДЫ'}
          </span>
          <button
            type="button"
            className={s.reportButtonRight}
            onClick={onHandleClick}
          ></button>
        </div>
      </div>
      <ReportListSection ReportSwitchIncomes={ReportSwitchIncomes} />
    </div>
  );
};

export default ReportSwitch;
