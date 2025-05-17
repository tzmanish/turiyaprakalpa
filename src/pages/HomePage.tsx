import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Hero from '../components/home/Hero';
import ValueProps from '../components/home/ValueProps';
import OurModel from '../components/home/OurModel';
import ProgramTeaser from '../components/home/ProgramTeaser';
import RegionFocus from '../components/home/RegionFocus';
import OurCoEs from '../components/home/OurCoEs';
import Partners from '../components/home/Partners';
import Events from '../components/home/Events';
import WhyThisMatters from '../components/home/WhyThisMatters';
import AboutParent from '../components/home/AboutParent';

const HomePage: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <ValueProps />
        <OurModel />
        <ProgramTeaser />
        <RegionFocus />
        <OurCoEs />
        <Partners />
        <Events />
        <WhyThisMatters />
        <AboutParent />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;