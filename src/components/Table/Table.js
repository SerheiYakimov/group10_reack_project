import { useTable } from 'react-table';
import React from 'react';
import s from './Table.module.css';

const Table = () => {
  const data = React.useMemo(
    () => [
      {
        date: '05.09.2019',
        description: 'Бананы',
        category: 'Транспорт',
        sum: '- 50.00 грн.',
      },
      {
        date: '22.09.2019',
        description: 'Бананы',
        category: 'Продукты',
        sum: '- 30.00 грн.',
      },
      {
        date: '14.11.2020',
        description: ' Бананы',
        category: 'Продукты',
        sum: '- 350.00 грн.',
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
    ],
    [],
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <table className={s.table} {...getTableProps()}>
      <thead className={s.thead}>
        {headerGroups.map(headerGroup => (
          <tr className={s.table_head} {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th className={s.date_collumn} {...column.getHeaderProps()}>
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody className={s.row} {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
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
};

export default Table;
