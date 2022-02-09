import categories from '../../json/category.json';
import React, { useState } from 'react';
import s from './Selector.module.css';

const Selector = ({ children }) => {
  const [value, setValue] = useState('');
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
        className={s.input}
        id="js-keyword-input"
        type="text"
        name="name"
        placeholder="Описание товара"
      />
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
