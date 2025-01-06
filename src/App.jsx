import ButtonGradient from './assets/svg/ButtonGradient';
import Bento from './components/Bento';
import Features from './components/Features';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Price from './components/Price';
import Roadmap from './components/Roadmap';
import Skills from './components/Skills';

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <ButtonGradient />
        <Hero />
        <Features />
        <Skills />
        <Bento />
        <Price />
        <Roadmap />
        <Footer />
      </div>
    </>
  );
};

export default App;
