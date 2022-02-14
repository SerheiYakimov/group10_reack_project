import categories from '../../json/category.json';
import React, { useState } from 'react';
import s from './Selector.module.css';

import { addExpenses } from '../../redux/transactions/operations';
import { useSelector, useDispatch } from 'react-redux';

const dateNow = new Date();

const dateInfo = {
  year: dateNow.getFullYear(),
  month: dateNow.getUTCMonth() + 1,
  day: dateNow.getDate(),
};

const Selector = ({ children }) => {
  const [value, setValue] = useState('');
  // console.log(value)
  const elements = categories.map(({ id, category }) => {
    return (
      <option className={s.option} key={id} value={category}>
        {category}
      </option>
    );
  });

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [active] = useState(false);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        console.warn(`Field - ${name} is under constraction`);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const cont = {
      name: name,
      number: number,
      id: '123',
    };
    dispatch(addExpenses(cont));
    resetForm();
  };
  console.log(name);

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <>
      <input
        onSubmit={handleSubmit}
        className={s.input}
        id="js-keyword-input"
        type="text"
        name="name"
        value={name}
        placeholder="Описание товара"
        onChange={handleChange}
        required
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
