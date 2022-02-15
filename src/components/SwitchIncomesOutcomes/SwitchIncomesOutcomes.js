// import React, { useState } from 'react';
// import Incomes from '../Incomes/Incomes';
// import Outcomes from '../Outcomes/Outcomes';

// export default function SwitchIncomesOutcomes() {
//   let showExpenses = true;
//   let showIncomes = false;

//   return (
//     <div>
//       {showExpenses && <Incomes />}
//       {showIncomes && <Outcomes />}
//     </div>
//   );
// }

// const SwitchIncomesOutcomes = () => {
//   const [SwitchIncomes, setSwitchIncomes] = useState(false);

//   const onHandleClick = () => {
//     setSwitchIncomes(!SwitchIncomes);
//   };

//   return (
//     <div className={s.reportSwitchWrapper}>
//       <div className={s.reportSwitch}>
//         <div className={s.reportButtonWrapper}>
//           <button
//             type="button"
//             className={s.reportButtonLeft}
//             onClick={onHandleClickLeft}
//           ></button>
//           <span className={s.reportSwitchTitle}>
//             {SwitchIncomes ? 'ДОХОДЫ' : 'РАСХОДЫ'}
//           </span>
//           <button
//             type="button"
//             className={s.reportButtonRight}
//             onClick={onHandleClickRight}
//           ></button>
//         </div>
//       </div>
//       <ReportListSection ReportSwitchIncomes={ReportSwitchIncomes} />
//     </div>
//   );
// };

// export default ReportSwitch;
