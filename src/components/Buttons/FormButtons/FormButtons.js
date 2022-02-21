import Button from '../Button';
import s from '../FormButtons/FormButtons.module.css';

const FormButtons = ({ handleSubmit }) => {
  return (
    <div className={s.button_div}>
      <Button
        type="submit"
        name="Ввод"
        onClick={handleSubmit}
        isPrimary
      ></Button>
      <Button type="button" name="Очистить"></Button>
    </div>
  );
};
export default FormButtons;
