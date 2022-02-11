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

const Table = () => {
  const setActive = () => {};

  const data = React.useMemo(
    () => [
      {
        date: '05.09.2019',
        description: 'Бананы',
        category: 'Транспорт',
        sum: '- 50.00 грн.',
        delete: (
          <button type="button" className={s.delete_btn}>
            <svg onClick={() => setActive(false)} width="18" height="18">
              <use href={`${sprite}#delete`}></use>
            </svg>
          </button>
        ),
      },
      {
        date: '22.09.2019',
        description: 'Бананы',
        category: 'Продукты',
        sum: '- 30.00 грн.',
        delete: (
          <button type="button" className={s.delete_btn}>
            <svg onClick={() => setActive(false)} width="18" height="18">
              <use href={`${sprite}#delete`}></use>
            </svg>
          </button>
        ),
      },
      {
        date: '14.11.2020',
        description: ' Бананы',
        category: 'Продукты',
        sum: ' 350.00 грн.',
        delete: (
          <button type="button" className={s.delete_btn}>
            <svg onClick={() => setActive(false)} width="18" height="18">
              <use href={`${sprite}#delete`}></use>
            </svg>
          </button>
        ),
      },

      {
        date: '22.09.2019',
        description: 'Бананы',
        category: 'Продукты',
        sum: '- 30.00 грн.',
        delete: (
          <button type="button" className={s.delete_btn}>
            <svg onClick={() => setActive(false)} width="18" height="18">
              <use href={`${sprite}#delete`}></use>
            </svg>
          </button>
        ),
      },
      {
        date: '14.11.2020',
        description: ' Бананы',
        category: 'Продукты',
        sum: ' 350.00 грн.',
        delete: (
          <button type="button" className={s.delete_btn}>
            <svg onClick={() => setActive(false)} width="18" height="18">
              <use href={`${sprite}#delete`}></use>
            </svg>
          </button>
        ),
      },
      {
        date: '22.09.2019',
        description: 'Бананы',
        category: 'Продукты',
        sum: '- 30.00 грн.',
        delete: (
          <button type="button" className={s.delete_btn}>
            <svg onClick={() => setActive(false)} width="18" height="18">
              <use href={`${sprite}#delete`}></use>
            </svg>
          </button>
        ),
      },
      {
        date: '14.11.2020',
        description: ' Бананы',
        category: 'Продукты',
        sum: ' 350.00 грн.',
        delete: (
          <button type="button" className={s.delete_btn}>
            <svg onClick={() => setActive(false)} width="18" height="18">
              <use href={`${sprite}#delete`}></use>
            </svg>
          </button>
        ),
      },
      {
        date: '22.09.2019',
        description: 'Бананы',
        category: 'Продукты',
        sum: '- 30.00 грн.',
        delete: (
          <button type="button" className={s.delete_btn}>
            <svg onClick={() => setActive(false)} width="18" height="18">
              <use href={`${sprite}#delete`}></use>
            </svg>
          </button>
        ),
      },
      {
        date: '14.11.2020',
        description: ' Бананы',
        category: 'Продукты',
        sum: ' 350.00 грн.',
        delete: (
          <button type="button" className={s.delete_btn}>
            <svg onClick={() => setActive(false)} width="18" height="18">
              <use href={`${sprite}#delete`}></use>
            </svg>
          </button>
        ),
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
    <div className={s.tableWrap}>
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
                      <th
                        className={s.date_collumn}
                        {...column.getHeaderProps()}
                      >
                        {column.render('Header')}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
            )
          }
        </Media>

        <tbody className={s.tbody} {...getTableBodyProps()}>
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
    </div>
  );
};

export default Table;
