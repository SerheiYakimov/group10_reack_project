import Media from 'react-media';
import heroLogoMob from '../../images/mobile/hero-logo-mob.png';
import heroLogoTab from '../../images/tablet/hero-logo-tab.png';
import heroLogoDesk from '../../images/desktop/hero-logo-desk.png';
import s from './Hero.module.css';

const Hero = () => {
  return (
    <section className={s.hero}>
      <Media
        query="(max-width: 767.98px)"
        render={() => <img src={heroLogoMob} alt="hero-logo"></img>}
      />
      <Media
        query="(min-width: 768px) and (max-width: 1279.98px)"
        render={() => <img src={heroLogoTab} alt="hero-logo"></img>}
      />
      <Media
        query="(min-width: 1280px)"
        render={() => <img src={heroLogoDesk} alt="hero-logo"></img>}
      />
      <h1 className={s.heroTitle}>smart finance</h1>
    </section>
  );
};

export default Hero;
