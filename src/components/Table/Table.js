import sprite from '../../svg/sprite.svg';
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { useTable } from 'react-table';
import s from './Table.module.css';
import Media from 'react-media';
import TableHead from './TableHead';
import TransactionSelectors from '../../redux/transactions/selectors';
import { getIncomeState } from '../../redux/incomeReducer/selectors';
import {
  getAllIncome,
  getAllOutcome,
  deleteTransaction,
} from '../../redux/transactions/operations';
import authSelectors from '../../redux/auth/selectors';

const Table = () => {
  const dispatch = useDispatch();
  const currState = useSelector(getIncomeState);
  const arrayTrans = useSelector(TransactionSelectors.transactionsTable);
  const currBalance = useSelector(authSelectors.getUserBalance);

  useEffect(() => {
    currState
      ? dispatch(getAllIncome('income'))
      : dispatch(getAllOutcome('loss'));
  }, [dispatch, currState, currBalance]);

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

  ///    Coloring the numbers   /////
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
