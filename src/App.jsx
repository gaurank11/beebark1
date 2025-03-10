import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Model from './components/Model';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';

import * as Sentry from '@sentry/react';
import Header from './components/Header';
import Hero1 from './components/Hero1';
import Hero2 from './components/Hero2';
import ScrollingParagraph from './components/ScrollingParagraph';
import SpecialOffer from './components/SpecialOffer';
import WelcomeBanner from './components/Welcome';
import ScrollingHighlight from './components/Welcome';
import Signup from './components/signup';

const App = () => {
  return (
    <main className="bg-white">
      <Header />
      <Hero1 />
      <Hero />
      <ScrollingHighlight />
      <ScrollingParagraph />
      <SpecialOffer />
      {/* <Highlights />
      <Model />
      <Features />
      <HowItWorks /> */}
      <Signup />
      <Footer />
    </main>
  )
}

export default Sentry.withProfiler(App);
