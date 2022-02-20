import Button from '../Button';
import s from '../FormButtons/FormButtons.module.css';

const FormButtons = () => {
  return (
    <div className={s.button_div}>
      <Button type="submit" name="Ввод" isPrimary></Button>
      <Button type="button" name="Очистить"></Button>
    </div>
  );
};
export default FormButtons;
