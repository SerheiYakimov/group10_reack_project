// import s from '../InputCurrency/InputCurrency.module.css';
// import sprite from '../../svg/sprite.svg';
// import React from 'react';
// import { useState } from 'react';

// export const InputCurrency = ({ handleChangeSum, children }) => {
//   const [sum, setSum] = useState('');

//   const handleChangeSumLocal = e => {
//     setSum(e.target.value);
//     handleChangeSum(e.target.value);
//   };

//   return (
//     <>
//       <div className={s.currency_div}>
//         <input
//           className={s.input_price}
//           type="number"
//           data-type="currency"
//           name="name"
//           value={sum}
//           onChange={handleChangeSumLocal}
//           placeholder={children}
//           step="0.01"
//           min="0,00000001"
//         />
//         <div className={s.culc_div}>
//           <svg className={s.calculator} fill=" #52555F" width="20" height="20">
//             <use href={`${sprite}#calculator`}></use>
//           </svg>
//         </div>
//       </div>
//     </>
//   );
// };
