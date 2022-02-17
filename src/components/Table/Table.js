import sprite from '../../svg/sprite.svg';
import { useSelector, useDispatch } from 'react-redux';
import React from 'react';
import { useTable } from 'react-table';
import s from './Table.module.css';
import Media from 'react-media';
import TableHead from './TableHead';
import { removeOperation } from '../../redux/transactions/operations';

const Table = ({ id }) => {
  const dispatch = useDispatch();

  const del_btn = () => (
    <button type="button" className={s.delete_btn}>
      <svg onClick={() => dispatch(removeOperation(id))} width="18" height="18">
        <use href={`${sprite}#delete`}></use>
      </svg>
    </button>
  );

  const data = React.useMemo(
    () => [
      {
        date: '05.09.2019',
        description: 'Бананы',
        category: 'Транспорт',
        sum: '- 50.00 грн.',
        delete: del_btn(),
      },
      {
        date: '05.09.2019',
        description: 'Бананы',
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

  const { getTableBodyProps, rows, prepareRow } = useTable({ columns, data });

  return (
    <div className={s.scroll_table}>
      <Media queries={{ small: { maxWidth: 767 } }}>
        {matches => (matches.small ? <></> : <TableHead />)}
      </Media>

      <div className={s.scroll_table_body} id="scrollbar">
        <table className={s.table}>
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
    </div>
  );
};

export default Table;
