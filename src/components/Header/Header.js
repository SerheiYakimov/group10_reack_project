import sprite from '../../svg/sprite.svg';
import s from './Header.module.css';

const Header = () => {
  return (
    <header className={s.header}>
      <svg width="90" height="31">
        <use href={`${sprite}#logo`}></use>
      </svg>
    </header>
  );
};

export default Header;
