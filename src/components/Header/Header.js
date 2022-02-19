import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import authSelectors from '../../redux/auth/selectors';
import sprite from '../../svg/sprite.svg';
import Navigation from '../Navigation/Navigation';
import s from './Header.module.css';

const Header = () => {
  const isAuth = useSelector(authSelectors.getIsLoggedIn);
  return (
    <header className={s.header}>
      <Link to="/balance">
        <svg width="90" height="31">
          <use href={`${sprite}#logo`}></use>
        </svg>
      </Link>
      {isAuth ? <Navigation /> : null}
    </header>
  );
};

export default Header;
