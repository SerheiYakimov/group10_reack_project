import categories from '../../json/category.json';
import React, { useState } from 'react';
import Button from '../Button/Button';
import s from './ProductSelection.module.css';
import sprite from '../../svg/sprite.svg';
import Media from 'react-media';

const ProductSelection = () => {
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
      <div className={s.container}>
        <div className={s.outcomes_div}>
          <Media queries={{ small: { maxWidth: 767 } }}>
            {matches =>
              matches.small ? (
                <></>
              ) : (
                <>
                  <input className={s.date} type="date" />
                </>
              )
            }
          </Media>
          <form className={s.form}>
            <input
              className={s.input}
              id="js-keyword-input"
              type="text"
              name="name"
              placeholder="Описание товара"
            />
            <select
              className={s.select}
              value={value}
              onChange={event => setValue(event.target.value)}
            >
              <option className={s.option}>Категория товара</option>
              {elements}
            </select>
            <div className={s.currency_div}>
              <Media queries={{ small: { maxWidth: 767 } }}>
                {matches =>
                  matches.small ? (
                    <>
                      <input
                        className={s.input_price}
                        type="text"
                        data-type="currency"
                        placeholder="00.00 UAH"
                      />
                      <div className={s.culc_div}>
                        <svg className={s.culculator} width="20" height="20">
                          <use href={`${sprite}#calculator`}></use>
                        </svg>
                      </div>
                    </>
                  ) : (
                    <>
                      <input
                        className={s.input_price}
                        type="text"
                        data-type="currency"
                        placeholder="00.00"
                      ></input>
                      {/* <svg className={s.culculator} width="20" height="20">
                                                <use href={`${sprite}#calculator`}></use>
                                                </svg> */}
                    </>
                  )
                }
              </Media>
            </div>
          </form>
        </div>

        <div className={s.button_div}>
          <Button type="button" name="Ввод" isPrimary></Button>
          <Button type="button" name="Очистить"></Button>
        </div>
      </div>
    </>
  );
};

export default ProductSelection;
