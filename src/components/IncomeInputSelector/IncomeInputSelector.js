import s from '../IncomeInputSelector/IncomeInputSelector.module.css';
import types from '../../json/incomes.json';
import React, { useState } from 'react';
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

const incomesOptions = types.map(e => ({
  value: e.id,
  label: e.category,
}));

export const IncomeInputSelector = () => {
  const [selected, setSelected] = useState([]);

  // const optionId = selected.value;
  // const optionCategory = selected.label;
  // console.log(optionId, optionCategory);
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
