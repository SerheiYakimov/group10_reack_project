import categories from '../../json/category.json';
import types from '../../json/incomes.json';
import React, { useState } from 'react';
import s from './Selector.module.css';
import Select from 'react-select';
// import { useDispatch } from 'react-redux';

const customStyles = {
  control: () => ({
    // backgroundColor: '#f5f6fb',
    // display: 'block',
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

const incomesOptions = types.map(e => ({
  value: e.id,
  label: e.category,
}));

export const OutcomesSelector = () => {
  const [inputName, setInputName] = useState('');
  const [selected, setSelected] = useState([]);

  // const dispatch = useDispatch();

  const optionId = selected.value;
  const optionCategory = selected.label;
  console.log(optionId, optionCategory);

  const handleChange = e => {
    const { inputName } = e.target;
    setInputName(inputName);
  };

  const resetForm = () => {
    setInputName('');
    setSelected('');
  };

  return (
    <>
      <input
        className={s.input}
        id="js-keyword-input"
        type="text"
        name="name"
        value={inputName}
        onChahge={handleChange}
        placeholder="Описание товара"
        required
      />
      <Select
        classNamePrefix="react-select"
        className={s.control}
        name="selected"
        onChange={setSelected}
        styles={customStyles}
        placeholder="Категория товара"
        options={expensesOptions}
      />
    </>
  );
};

export const IncomesSelector = () => {
  const [selected, setSelected] = useState([]);

  const optionId = selected.value;
  const optionCategory = selected.label;
  console.log(optionId, optionCategory);
  return (
    <>
      <input
        className={s.input}
        id="js-keyword-input"
        type="text"
        name="name"
        placeholder="Описание дохода"
        required
      />

      <Select
        classNamePrefix="react-select"
        className={s.control}
        onChange={setSelected}
        styles={customStyles}
        placeholder="Категория дохода"
        options={incomesOptions}
      />
    </>
  );
};
