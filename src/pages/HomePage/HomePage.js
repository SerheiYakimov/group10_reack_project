import Hero from '../../components/Hero/Hero';
import AccessForm from '../../components/AuthMenu/AuthMenu';
import s from './HomePage.module.css';

const HomePage = () => {
  return (
    <section className={s.homePage}>
      <Hero />
      <AccessForm />
    </section>
  );
};

export default HomePage;
