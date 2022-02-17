import Media from 'react-media';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/selectors';
import authOperations from '../../redux/auth/operations';
import sprite from '../../svg/sprite.svg';
import avatar from '../../images/avatar.svg';
import s from './Navigation.module.css';

const Navigation = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);
  const avatarDB = useSelector(authSelectors.getUserAvatar);

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
    <nav className={s.navigation}>
      <img
        className={s.avatar}
        src={avatarDB ? avatarDB : avatar}
        alt="avatar"
      />
      <Media
        query="(max-width: 767.98px)"
        render={() => (
          <button
            className={s.logoutButtonMob}
            type="button"
            onClick={() => dispatch(authOperations.logOut())}
          >
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
              <span>{name}</span>
            </p>
            <button
              className={s.logoutButtonTabDesk}
              type="button"
              onClick={() => dispatch(authOperations.logOut())}
            >
              Выйти
            </button>
          </>
        )}
      />
    </nav>
  );
};

export default Navigation;
