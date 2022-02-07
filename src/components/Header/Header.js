import sprite from '../../svg/sprite.svg';
import Navigation from '../Navigation/Navigation';
import s from './Header.module.css';

const isAuth = false; //Навигация в хедере рендерится когда пользователь залогинен, пока нет привязки к бэкенду isAuth захардкожен

const Header = () => {
  return (
    <header className={s.header}>
      <svg width="90" height="31">
        <use href={`${sprite}#logo`}></use>
      </svg>
      {isAuth ? <Navigation /> : null}
    </header>
  );
};

export default Header;
