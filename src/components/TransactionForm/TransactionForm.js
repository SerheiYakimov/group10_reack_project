import React from 'react';
import { useForm } from 'react-hook-form';
import categories from '../../json/category.json';
import transactionsAPI from '../../services/transactions-api';

// import "./styles.css";

export default function TransactionsForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async ({ category, subcategory, sum }, e) => {
    // console.log('data', data)
    // console.log('e', e)
    const transactionToAdd = {
      category,
      subcategory,
      sum,
    };
    console.log('transactionToAdd', transactionToAdd);
    const status = await transactionsAPI.addTransaction(transactionToAdd);
    console.log('status', status);
  };

  console.log(errors);

  const categoryOptions = categories.map(category => ({
    value: category.id,
    label: category.category,
  }));
  // console.log('categoryOptions', categoryOptions)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* <label>First name</label>
            <input type="text" {...register("firstName", { required: true })} />
            {errors.firstName && <p>This is required</p>} */}

      {/* <label>Last name</label>
            <input type="text" {...register("lastName")} /> */}

      <label style={{ display: 'block', marginTop: 20, marginBottom: 20 }}>
        Description
      </label>
      <input
        type="text"
        placeholder=""
        {...register('subcategory', { required: true })}
      />
      <select {...register('category', { required: true })}>
        {categoryOptions.map(option => (
          <option value={option.label} id={option.id}>
            {option.label}
          </option>
        ))}
      </select>
      <input type="number" {...register('sum', { required: true })} />

      <input type="submit" />
      <input
        style={{ display: 'block', marginTop: 20 }}
        type="reset"
        value="Standard Reset Field Values"
      />
      {/* <input
                style={{ display: "block", marginTop: 20 }}
                type="button"
                onClick={() =>
                    reset({
                        firstName: "bill",
                        lastName: "luo"
                    })
                }
                value="Reset with values"
            /> */}
    </form>
  );
}
