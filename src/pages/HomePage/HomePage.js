import Hero from '../../components/Hero/Hero';
import AuthMenu from '../../components/AuthMenu/AuthMenu';
import BgWrapper from '../../components/BgWrapper/BgWrapper';

const HomePage = () => {
  return (
    <BgWrapper>
      <Hero />
      <AuthMenu />
    </BgWrapper>
  );
};

export default HomePage;
