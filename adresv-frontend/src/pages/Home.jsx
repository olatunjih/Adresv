import React from 'react';
import HeroSection from '../components/homepage/HeroSection';
import LiveCryptoPrices from '../components/homepage/LiveCryptoPrices';
import FeaturedInvestmentPlans from '../components/homepage/FeaturedInvestmentPlans';
import WhyChooseUs from '../components/homepage/WhyChooseUs';
import Testimonials from '../components/homepage/Testimonials';

const Home = () => {
  return (
    <>
      <HeroSection />
      <LiveCryptoPrices />
      <FeaturedInvestmentPlans />
      <WhyChooseUs />
      <Testimonials />
    </>
  );
};

export default Home;
