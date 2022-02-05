import HeroLogo from '../../images/hero-logo.svg';
import s from './Hero.module.css';

const Hero = () => {
  return (
    <section className={s.hero}>
      <img className={s.heroLogo} src={HeroLogo} alt="hero-logo"></img>
      <p>smart finance</p>
    </section>
  );
};

export default Hero;
