// import React from 'react';
// import sprite from '../../svg/sprite.svg';
// import s from './Table.module.css';
// const TableData = () => {
//     const setActive = () => { };
//     const del_btn = () => (
//         <button type="button" className={s.delete_btn}>
//             <svg onClick={() => setActive(false)} width="18" height="18">
//                 <use href={`${sprite}#delete`}></use>
//             </svg>
//         </button>
//     );

//     const data = React.useMemo(
//         () => [
//             {
//                 date: '05.09.2019',
//                 description: 'Бананы22222222 ',
//                 category: 'Транспорт',
//                 sum: '- 50.00 грн.',
//                 delete: del_btn(),
//             },
//             {
//                 date: '05.09.2019',
//                 description: 'Бананы111122222222',
//                 category: 'Транспорт',
//                 sum: '- 50.00 грн.',
//                 delete: del_btn(),
//             },
//             {
//                 date: '05.09.2019',
//                 description: 'Бананы ',
//                 category: 'Транспорт',
//                 sum: '- 50.00 грн.',
//                 delete: del_btn(),
//             },
//             {
//                 date: '05.09.2019',
//                 description: 'Бананы ',
//                 category: 'Транспорт',
//                 sum: '- 50.00 грн.',
//                 delete: del_btn(),
//             },
//             {
//                 date: '05.09.2019',
//                 description: 'Бананы ',
//                 category: 'Транспорт',
//                 sum: '- 50.00 грн.',
//                 delete: del_btn(),
//             },
//             {
//                 date: '05.09.2019',
//                 description: 'Бананы ',
//                 category: 'Транспорт',
//                 sum: '- 50.00 грн.',
//                 delete: del_btn(),
//             },
//             {
//                 date: '05.09.2019',
//                 description: 'Бананы ',
//                 category: 'Транспорт',
//                 sum: '- 50.00 грн.',
//                 delete: del_btn(),
//             },
//             {
//                 date: '05.09.2019',
//                 description: 'Бананы ',
//                 category: 'Транспорт',
//                 sum: '- 50.00 грн.',
//                 delete: del_btn(),
//             },
//             {
//                 date: '05.09.2019',
//                 description: 'Бананы ',
//                 category: 'Транспорт',
//                 sum: '- 50.00 грн.',
//                 delete: del_btn(),
//             },
//             {
//                 date: '05.09.2019',
//                 description: 'Бананы ',
//                 category: 'Транспорт',
//                 sum: '- 50.00 грн.',
//                 delete: del_btn(),
//             },
//         ],
//         [],
//     );
//     const columns = React.useMemo(
//         () => [
//             {
//                 Header: 'Дата',
//                 accessor: 'date', // accessor is the "key" in the data
//             },
//             {
//                 Header: 'Описание',
//                 accessor: 'description',
//             },
//             {
//                 Header: 'Категория',
//                 accessor: 'category', // accessor is the "key" in the data
//             },
//             {
//                 Header: 'Сумма',
//                 accessor: 'sum',
//             },
//             {
//                 Header: ' ',
//                 accessor: 'delete',
//             },
//         ],
//         [],
//     );
//     return { data, columns }
// }

// export default { data, columns }
