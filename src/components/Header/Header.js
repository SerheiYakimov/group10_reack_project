import { useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/selectors';
import sprite from '../../svg/sprite.svg';
import Navigation from '../Navigation/Navigation';
import s from './Header.module.css';

const Header = () => {
  const isAuth = useSelector(authSelectors.getIsLoggedIn);
  return (
    <header className={s.header}>
      <svg width="90" height="31">
        <use href={`${sprite}#logo`}></use>
      </svg>
      {isAuth && <Navigation />}
    </header>
  );
};

export default Header;
