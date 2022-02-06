import { NavLink } from 'react-router-dom';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import s from './ArrowToGoBack.module.css';

const ArrowToGoBack = () => {
  const viewPort = useWindowDimensions();

  return (
    <div className={s.toGoBack}>
      <NavLink className={s.link} to="/balance">
        <svg
          width="18"
          height="12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 5H3.83L7.41 1.41L6 0L0 6L6 12L7.41 10.59L3.83 7H18V5Z"
            fill="#FF751D"
          />
        </svg>
        <span style={{ marginLeft: 15 }} className={s.arrow}>
          {viewPort.width > 767 && 'Вернуться на главную'}
        </span>
      </NavLink>
    </div>
  );
};

export default ArrowToGoBack;
