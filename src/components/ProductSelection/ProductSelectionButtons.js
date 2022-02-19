import Button from '../Buttons/Button';
import s from './ProductSelection.module.css';

const ProductSelectionButtons = () => {
  return (
    <div className={s.button_div}>
      <Button type="submit" name="Ввод" isPrimary></Button>
      <Button type="button" name="Очистить"></Button>
    </div>
  );
};
export default ProductSelectionButtons;
