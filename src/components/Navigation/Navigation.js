import Media from 'react-media';
import sprite from '../../svg/sprite.svg';
import avatar from '../../images/avatar.svg';
import s from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav className={s.navigation}>
      <img className={s.avatar} src={avatar} alt="avatar" />
      <Media
        query="(max-width: 767.98px)"
        render={() => (
          <button className={s.logoutButtonMob} type="button">
            <svg width="16" height="16">
              <use href={`${sprite}#logout`}></use>
            </svg>
          </button>
        )}
      />
      <Media
        query="(min-width: 768px)"
        render={() => (
          <>
            <p className={s.userName}>
              <span>User name</span>
            </p>
            <button className={s.logoutButtonTabDesk} type="button">
              Выйти
            </button>
          </>
        )}
      />
    </nav>
  );
};

export default Navigation;
