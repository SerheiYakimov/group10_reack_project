import { Link } from 'react-router-dom';
import styles from './ToReportsButton.module.scss';
import { ReactComponent as Icon } from '../../svg/reports.svg';

const ToReportsButton = () => {
  return (
    <div className={styles.ToReportsButton}>
      <Link to="/reports" className={styles.link}>
        <p>Перейти к отчетам</p>
        <Icon />
      </Link>
    </div>
  );
};

export default ToReportsButton;
