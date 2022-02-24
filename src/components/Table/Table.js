import sprite from '../../svg/sprite.svg';
import { useSelector, useDispatch } from 'react-redux';
import React from 'react';
import { useTable } from 'react-table';
import s from './Table.module.css';
import Media from 'react-media';
import TableHead from './TableHead';
import { deleteTransaction } from '../../redux/transactions/operations';
import { getAllTransactions } from '../../redux/transactions/selectors';
import { getIncomeState } from '../../redux/incomeReducer/selectors';

const Table = () => {
  const arrayTrans = useSelector(getAllTransactions);
  const dispatch = useDispatch();
  const currState = useSelector(getIncomeState);

  const functionDel = async id => {
    dispatch(deleteTransaction(id));
  };

  const items = arrayTrans?.map(item => ({
    ...item,
    date: item.createdAt,
    description: item.subcategory,
    category: item.category,
    sum: item.sum,
    id: item.id,
    type: item.transactionType,
  }));

  ///    Окрашивание суммы   /////
  const transactionType = items[0]?.type;
  console.log('items', items);
  console.log('items.type', transactionType);

  let classes = `${s.data_rows} `;
  if (transactionType === 'loss') {
    classes += s.outcomes;
  } else if (transactionType === 'income') {
    classes += s.incomes;
  }
  ///////////////////////////////

  const del_btn = id => (
    <button type="button" className={s.delete_btn}>
      <svg onClick={() => functionDel(id)} width="18" height="18">
        <use href={`${sprite}#delete`}></use>
      </svg>
    </button>
  );

  const data = React.useMemo(
    () =>
      items.map(e => ({
        ...e,
        date: e.createdDate.slice(0, 10),
        description: e.subcategory,
        category: e.category,
        sum: `${e.sum}.00 грн.`,
        id: e.id,
        delete: del_btn(e.id),
        type: e.transactionType,
      })),
    [items],
  );
  // console.log('data', data);

  const columns = React.useMemo(
    () => [
      {
        Header: 'Дата',
        accessor: 'date',
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
  // console.log('table body props', useTable.getTableBodyProps = useTable({ columns, transactions }))
  // const { getTableBodyProps, rows, prepareRow } = useTable({ columns, transactions });

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
                      <td className={classes} {...cell.getCellProps()}>
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
