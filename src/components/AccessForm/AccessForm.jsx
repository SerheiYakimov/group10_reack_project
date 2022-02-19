import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import authOperations from '../../redux/auth/operations';
import Button from '../Buttons/Button';
import s from './AccessForm.module.css';

const signInSchema = Yup.object().shape({
  email: Yup.string().email().required('Это обязательное поле'),
  password: Yup.string()
    .required('Это обязательное поле')
    .min(8, 'Пароль должен быть минимум 8 символов'),
});

const initialValues = {
  email: '',
  password: '',
  isSecondButton: false,
};

export default function AccessForm() {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={signInSchema}
      onSubmit={(values, actions) => {
        const { email, password, isSecondButton } = values;
        if (!isSecondButton) {
          dispatch(authOperations.logIn({ email, password }));
        } else {
          dispatch(authOperations.register({ email, password }));
        }
        actions.setSubmitting(false);
        actions.resetForm({
          values: {
            email: '',
            password: '',
            isSecondButton: false,
          },
        });
      }}
    >
      {props => {
        return (
          <Form>
            <div className={s.inputWrapper}>
              <label htmlFor="email" className={s.authLabel}>
                Электронная почта:
              </label>
              <Field
                type="email"
                name="email"
                id="email"
                className={s.authInput}
              />
              <ErrorMessage name="email" component="span" className={s.error} />
            </div>

            <div className={s.inputWrapper}>
              <label htmlFor="password" className={s.authLabel}>
                Пароль:
              </label>
              <Field
                type="password"
                name="password"
                id="password"
                className={s.authInput}
              />
              <ErrorMessage
                name="password"
                component="span"
                className={s.error}
              />
            </div>

            <div
              className={!props.isValid ? s.disabledBtnWrapper : s.btnWrapper}
            >
              <Button type="submit" name="Войти" isPrimary />
              <Button
                onClick={async e => {
                  await props.validateForm();
                  if (props.isValid) {
                    props.setFieldValue('isSecondButton', true);
                    props.handleSubmit(e);
                  }
                }}
                type="button"
                name="Регистрация"
              />
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}
