import Logo from '../../images/logo.svg';
import s from './Header.module.css';

const Header = () => {
  return (
    <header className={s.header}>
      <img className={s.logo} src={Logo} alt="logo"></img>
    </header>
  );
};

export default Header;
