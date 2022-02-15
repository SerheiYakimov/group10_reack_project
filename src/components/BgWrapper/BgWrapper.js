import s from './BgWrapper.module.css';

const BgWrapper = ({ children }) => {
  return <div className={s.bgWrapper}>{children}</div>;
};

export default BgWrapper;
