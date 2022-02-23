// import React, { useState } from 'react';
// import s from '../AddingCost/AddingCost.module.css';
// import Media from 'react-media';
// // import { useDispatch } from 'react-redux';
// import FormDatePicker from '../DatePicker/DatePicker';
// import { RateInputSelector } from '../RateInputSelector/RateInputSelector';
// import { InputCurrency } from '../InputCurrency/InputCurrency';
// import FormButtons from '../Buttons/FormButtons/FormButtons';
// import toast from 'react-hot-toast';

// const AddingCost = () => {
//   const [category, setCategory] = useState('');
//   const [subcategory, setSubcategory] = useState({});
//   const [sum, setSum] = useState('');
//   const [transaction, setTransaction] = useState({});
//   const [allTransactions, setAllTransactions] = useState([]);

//   // const dispatch = useDispatch();

//   const handleChangeCategory = category => {
//     setCategory(category);
//   };

//   const handleChangeSubCategory = subcategory => {
//     setSubcategory(subcategory);
//   };

//   const handleChangeSum = sum => {
//     setSum(sum);
//   };

//   const handleSubmit = e => {
//     e.preventDefault();

//     const transaction = {
//       category,
//       subcategory,
//       sum,
//     };

//     setTransaction({ transaction });
//     addNewTransaction({ transaction });

//     toast.success('Транзакция успешно добавлена!');
//   };

//   const addNewTransaction = transaction => {
//     setAllTransactions(allTransactions => [...allTransactions, transaction]);
//   };

//   // console.log(transaction);

//   // const resetInput = () => {
//   //   setCategory('');
//   //   setSubcategory({});
//   // };

//   return (
//     <div className={s.container}>
//       <div className={s.outcomes_div}>
//         <Media queries={{ small: { maxWidth: 767 } }}>
//           {matches => (matches.small ? <></> : <FormDatePicker />)}
//         </Media>
//         <form className={s.form} onSubmit={handleSubmit}>
//           <div className={s.formWrapper}>
//             <RateInputSelector
//               handleChangeCategory={handleChangeCategory}
//               handleChangeSubCategory={handleChangeSubCategory}
//             />

//             <Media queries={{ small: { maxWidth: 767 } }}>
//               {matches =>
//                 matches.small ? (
//                   <InputCurrency handleChangeSum={handleChangeSum}>
//                     {' '}
//                     00.00 UAH
//                   </InputCurrency>
//                 ) : (
//                   <InputCurrency handleChangeSum={handleChangeSum}>
//                     00.00
//                   </InputCurrency>
//                 )
//               }
//             </Media>
//           </div>
//           <FormButtons onClick={handleSubmit} />
//         </form>
//       </div>
//       {/* <FormButtons onClick={handleSubmit} /> */}
//     </div>
//   );
// };

// export default AddingCost;
