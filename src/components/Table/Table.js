import sprite from '../../svg/sprite.svg';

import React from 'react';
import {
  useTable,
  // useResizeColumns,
  // useFlexLayout,
  // useRowSelect,
} from 'react-table';
import s from './Table.module.css';
import Media from 'react-media';
// import styled from 'styled-components'

const Table = () => {
  const del_btn = () => (
    <button type="button" className={s.delete_btn}>
      <svg onClick={() => setActive(false)} width="18" height="18">
        <use href={`${sprite}#delete`}></use>
      </svg>
    </button>
  );

  const setActive = () => {};

  const data = React.useMemo(
    () => [
      {
        date: '05.09.2019',
        description: 'Бананы ',
        category: 'Транспорт',
        sum: '- 50.00 грн.',
        delete: del_btn(),
      },
      {
        date: '05.09.2019',
        description: 'Бананы ',
        category: 'Транспорт',
        sum: '- 50.00 грн.',
        delete: del_btn(),
      },
      {
        date: '05.09.2019',
        description: 'Бананы ',
        category: 'Транспорт',
        sum: '- 50.00 грн.',
        delete: del_btn(),
      },
      {
        date: '05.09.2019',
        description: 'Бананы ',
        category: 'Транспорт',
        sum: '- 50.00 грн.',
        delete: del_btn(),
      },
      {
        date: '05.09.2019',
        description: 'Бананы ',
        category: 'Транспорт',
        sum: '- 50.00 грн.',
        delete: del_btn(),
      },
      {
        date: '05.09.2019',
        description: 'Бананы ',
        category: 'Транспорт',
        sum: '- 50.00 грн.',
        delete: del_btn(),
      },
      {
        date: '05.09.2019',
        description: 'Бананы ',
        category: 'Транспорт',
        sum: '- 50.00 грн.',
        delete: del_btn(),
      },
      {
        date: '05.09.2019',
        description: 'Бананы ',
        category: 'Транспорт',
        sum: '- 50.00 грн.',
        delete: del_btn(),
      },
      {
        date: '05.09.2019',
        description: 'Бананы ',
        category: 'Транспорт',
        sum: '- 50.00 грн.',
        delete: del_btn(),
      },
      {
        date: '05.09.2019',
        description: 'Бананы ',
        category: 'Транспорт',
        sum: '- 50.00 грн.',
        delete: del_btn(),
      },
    ],
    [],
  );
  const columns = React.useMemo(
    () => [
      {
        Header: 'Дата',
        accessor: 'date', // accessor is the "key" in the data
      },
      {
        Header: 'Описание',
        accessor: 'description',
      },
      {
        Header: 'Категория',
        accessor: 'category', // accessor is the "key" in the data
      },
      {
        Header: 'Сумма',
        accessor: 'sum',
      },
      {
        Header: ' ',
        accessor: 'delete',
      },
    ],
    [],
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <table className={s.table} {...getTableProps()}>
      <Media queries={{ small: { maxWidth: 767 } }}>
        {matches =>
          matches.small ? (
            <></>
          ) : (
            <thead className={s.thead}>
              {headerGroups.map(headerGroup => (
                <tr
                  className={s.table_head}
                  {...headerGroup.getHeaderGroupProps()}
                >
                  {headerGroup.headers.map(column => (
                    <th className={s.date_column} {...column.getHeaderProps()}>
                      {column.render('Header')}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
          )
        }
      </Media>
      <tbody className={s.scroll_table_body} {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row);
          return (
            <tr className={s.row} {...row.getRowProps()}>
              {row.cells.map(cell => {
                return (
                  <td className={s.data_rows} {...cell.getCellProps()}>
                    {cell.render('Cell')}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );

  // const { getTableProps, headerGroups, rows, prepareRow } = useTable(
  //   {
  //     columns,
  //     data,

  //   },
  //   useResizeColumns,
  //   useFlexLayout,
  //   useRowSelect,
  //   hooks => {
  //     hooks.allColumns.push(columns => [
  //       // Let's make a column for selection
  //       {
  //         id: 'selection',
  //         // disableResizing: true,
  //         // minWidth: 35,
  //         // width: 35,
  //         // maxWidth: 35,
  //         // The header can use the table's getToggleAllRowsSelectedProps method
  //         // to render a checkbox

  //       },
  //       ...columns,
  //     ])
  //     hooks.useInstanceBeforeDimensions.push(({ headerGroups }) => {
  //       // fix the parent group of the selection button to not be resizable
  //       // const selectionGroupHeader = headerGroups[0].headers[0]
  //       // selectionGroupHeader.canResize = false
  //     })
  //   }
  // )

  // return (
  //   <div {...getTableProps()} className={s.table}>

  //     <Media queries={{ small: { maxWidth: 767 } }}>
  //       {matches =>
  //         matches.small ? (
  //           <></>
  //         ) : (

  //           <div className={s.thead}>
  //             {headerGroups.map(headerGroup => (

  //               <div
  //                 {...headerGroup.getHeaderGroupProps()}
  //                 className={s.table_head}
  //               >
  //                 {headerGroup.headers.map(column => (
  //                   <div {...column.getHeaderProps()} className={s.date_column}>
  //                     {column.render('Header')}
  //                     {/* Use column.getResizerProps to hook up the events correctly */}
  //                     {column.canResize && (
  //                       <div
  //                         {...column.getResizerProps()}
  //                         className={`resizer ${column.isResizing ? 'isResizing' : ''
  //                           }`}
  //                       />
  //                     )}
  //                   </div>
  //                 ))}
  //               </div>
  //             ))}
  //           </div>
  //         )
  //       }
  //     </Media>

  //     <div className={s.scroll_table_body}>
  //       {rows.map(row => {
  //         prepareRow(row)
  //         return (
  //           <div {...row.getRowProps()} className={s.row}>
  //             {row.cells.map(cell => {
  //               return (
  //                 <div {...cell.getCellProps()} className={s.data_rows}>
  //                   {cell.render('Cell')}
  //                 </div>
  //               )
  //             })}
  //           </div>
  //         )
  //       })}
  //     </div>
  //   </div>
  // )
};

export default Table;
