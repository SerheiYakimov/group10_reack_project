import s from './Modal.module.css';
import sprite from '../../svg/sprite.svg';

const Modal = ({ active, setActive, children }) => {
  return (
    <div
      className={active ? s.modal : s.is_hidden}
      onClick={() => setActive(false)}
    >
      <button type="button" className={s.close_btn}>
        <svg onClick={() => setActive(false)} width="12" height="12">
          <use href={`${sprite}#close`}></use>
        </svg>
      </button>
      <div>
        <div className={s.modal_content}>{children}</div>
        <div className={s.button_div}>
          <button type="button" className={s.button_yes}>
            <p className={s.button_text}>Да</p>
          </button>
          <button type="button" className={s.button_no}>
            <p className={s.button_text}>Нет</p>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Modal;
