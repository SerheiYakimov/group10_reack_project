import s from './BottomBg.module.css';

const BottomBg = ({ children }) => {
  return <div className={s.bottomBg}>{children}</div>;
};

export default BottomBg;
