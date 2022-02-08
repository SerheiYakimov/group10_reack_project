import s from './BgWrapper.module.css';

const BgWrapper = ({ children, className }) => {
  return <div className={s.bgWrapper}>{children}</div>;
};

export default BgWrapper;
