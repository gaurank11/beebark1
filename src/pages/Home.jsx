import Hero from '../components/Hero';
import Highlights from '../components/Highlights';
import Model from '../components/Model';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import Footer from '../components/Footer';

import Header from '../components/Header';
import Hero1 from '../components/Hero1';
import Hero2 from '../components/Hero2';
import ScrollingParagraph from '../components/ScrollingParagraph';
import SpecialOffer from '../components/SpecialOffer';
import WelcomeBanner from '../components/Welcome';
import ScrollingHighlight from '../components/Welcome';
import JoinUs from '../components/joinus';

const Home = () => {
  return (
    <main className="bg-white">
      <Header />
      <Hero1 />
      {/* <Hero /> */}
      <ScrollingHighlight />
      <ScrollingParagraph />
      <SpecialOffer />
      {/* <Highlights />
      <Model />
      <Features />
      <HowItWorks /> */}
      <JoinUs />
      
      <Footer />
    </main>
  )
}

export default Home;
