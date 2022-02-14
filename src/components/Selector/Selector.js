import categories from '../../json/category.json';
import types from '../../json/incomes.json';
import React, { useState } from 'react';
import s from './Selector.module.css';

import { addExpenses } from '../../redux/transactions/operations';
import { useSelector, useDispatch } from 'react-redux';
// import { getTypeTransaction } from '../../redux/transactions/typeTransaction/typeTransaction-selector';
// import { changeTypeTransaction } from '../../redux/transactions/typeTransaction/typeTransaction-slice';

const Selector = ({ children }) => {
  const [value, setValue] = useState('');
  // console.log(value)

  // const transaction = useSelector(getTypeTransaction);
  const dispatch = useDispatch();
  // console.log(transaction);

  // if (changeTypeTransaction === true) {
  //   const types = categories.map(({ id, category }) => {
  //     return (
  //       <option className={s.option} key={id} value={category}>
  //         {category}
  //       </option>
  //     );
  //   });
  // } else {
  //   const elements = categories.map(({ id, category }) => {
  //     return (
  //       <option className={s.option} key={id} value={category}>
  //         {category}
  //       </option>
  //     );
  //   });
  // }
  const elements = categories.map(({ id, category }) => {
    return (
      <option className={s.option} key={id} value={category}>
        {category}
      </option>
    );
  });

  return (
    <>
      <input
        // onSubmit={handleSubmit}
        className={s.input}
        id="js-keyword-input"
        type="text"
        name="name"
        // value={desc}
        placeholder="Описание товара"
        // placeholder={
        //   type === "expense" ? "Описание товара" : "Описание дохода"
        // }
        // onChange={handleChange}
        required
      />

      {/* {transaction
        ? types.map((id, category) => {
          return (
            <option className={s.option} key={types.id} value={types.category}>
              {types.category}
            </option>
          );
        })
        : elements.map((id, category) => {
          return (
            <option className={s.option} key={elements.id} value={elements.category}>
              {elements.category}
            </option>
          );
        })} */}

      <select
        name="select-category"
        id=""
        className={s.select}
        value={value}
        onChange={event => setValue(event.target.value)}
      >
        <option className={s.option}>{children}</option>
        {elements}
      </select>
    </>
  );
};

export default Selector;
