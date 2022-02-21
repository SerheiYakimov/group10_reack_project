import categories from '../../json/category.json';
import React, { useState } from 'react';
import s from '../RateInputSelector/RateInputSelector.module.css';
import Select from 'react-select';

const customStyles = {
  control: () => ({
    width: 282,
    height: 44,
  }),
  dropdownIndicator: () => ({
    display: 'none',
  }),

  indicatorSeparator: () => ({
    display: 'none',
  }),
  placeholder: () => ({
    color: ' #c7ccdc',
    display: 'flex',
    alignItems: 'center',
  }),
};

const expensesOptions = categories.map(e => ({
  value: e.id,
  label: e.category,
}));

export const RateInputSelector = () => {
  const [productName, setProductName] = useState('');
  const [selected, setSelected] = useState([]);

  // const optionId = selected.value;
  // const optionCategory = selected.label;
  // console.log(optionId, optionCategory);

  const handleChange = e => {
    setProductName(e.target.value);
  };

  return (
    <>
      <input
        className={s.input}
        id="js-keyword-input"
        type="text"
        name="name"
        value={productName}
        onChange={handleChange}
        placeholder="Описание товара"
        required
      />
      <Select
        classNamePrefix="react-select"
        className={s.control}
        name="selected"
        value={selected}
        onChange={setSelected}
        styles={customStyles}
        placeholder="Категория товара"
        options={expensesOptions}
      />
    </>
  );
};
