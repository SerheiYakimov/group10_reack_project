import s from './Modal.module.css';
import sprite from '../../svg/sprite.svg';
import Button from '../Buttons/Button';

const Modal = ({ active, setActive, children }) => {
  return (
    <div onClick={() => setActive(false)} className={s.container}>
      <div
        className={active ? s.modal : s.is_hidden}
        onClick={e => e.stopPropagation()}
      >
        <button type="button" className={s.close_btn}>
          <svg onClick={() => setActive(false)} width="12" height="12">
            <use href={`${sprite}#close`}></use>
          </svg>
        </button>
        <div>
          <div className={s.modal_content}>{children}</div>
          <div className={s.button_div}>
            <Button type="button" name="Да" isPrimary></Button>
            <Button type="button" name="Нет" className={s.button_text}></Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Modal;
