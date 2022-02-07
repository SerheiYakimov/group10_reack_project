import Hero from '../../components/Hero/Hero';
import AccessForm from '../../components/AuthMenu/AuthMenu';
import BgWrapper from '../../components/BgWrapper/BgWrapper';

const HomePage = () => {
  return (
    <BgWrapper>
      <Hero />
      <AccessForm />
    </BgWrapper>
  );
};

export default HomePage;
