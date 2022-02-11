// import PropTypes from 'prop-types';
import styles from './Button.module.scss';

const Button = () => {
  return (
    <button type="submit" className={styles.form_button}>
      Подтвердить
    </button>
  );
};

export default Button;
