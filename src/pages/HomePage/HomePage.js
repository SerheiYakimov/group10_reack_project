import Hero from '../../components/Hero/Hero';
import AuthMenu from '../../components/AuthMenu/AuthMenu';
import BgWrapper from '../../components/BgWrapper/BgWrapper';
import Footer from '../../components/Footer/Footer';

const HomePage = () => {
  return (
    <>
      <BgWrapper>
        <Hero />
        <AuthMenu />
        <Footer />
      </BgWrapper>
    </>
  );
};

export default HomePage;
