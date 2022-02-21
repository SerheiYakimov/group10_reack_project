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

export const RateInputSelector = ({
  resetInput,
  handleChangeCategory,
  handleChangeSubCategory,
}) => {
  const [category, setCategory] = useState('');
  const [subCategory, setSubCategory] = useState({});

  const handleChangeCategoryLocal = e => {
    setCategory(e.target.value);
    handleChangeCategory(e.target.value);
  };

  const handleChangeSubCategoryLocal = e => {
    setSubCategory({ value: e.value, label: e.label });
    handleChangeSubCategory({ value: e.value, label: e.label });
  };

  return (
    <>
      <input
        className={s.input}
        id="js-keyword-input"
        type="text"
        name="name"
        value={category}
        onChange={handleChangeCategoryLocal}
        placeholder="Описание товара"
        required
      />
      <Select
        classNamePrefix="react-select"
        className={s.control}
        name="selected"
        value={subCategory}
        onChange={handleChangeSubCategoryLocal}
        styles={customStyles}
        placeholder="Категория товара"
        options={expensesOptions}
      />
    </>
  );
};
