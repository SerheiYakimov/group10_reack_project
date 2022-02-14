import React from 'react';
import { useTable } from 'react-table';
import s from './Table.module.css';
import sprite from '../../svg/sprite.svg';

const TableHead = () => {
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
        description: 'Бананы22222222 ',
        category: 'Транспорт',
        sum: '- 50.00 грн.',
        delete: del_btn(),
      },
      {
        date: '05.09.2019',
        description: 'Бананы111122222222',
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
  const { getTableProps, headerGroups } = useTable({ columns, data });
  return (
    <table className={s.table} {...getTableProps()}>
      <thead className={s.thead}>
        {headerGroups.map(headerGroup => (
          <tr className={s.table_head} {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th className={s.date_column} {...column.getHeaderProps()}>
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
    </table>
  );
};

export default TableHead;
