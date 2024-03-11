import React from 'react'
import Header from '../components/Layout/Header';
import Hero from '../components/Route/Hero';
import Categories from '../components/Route/Categories';
import BestDeals from '../components/Route/BestDeals';
import FeaturedProducts from '../components/Route/FeaturedProducts/FeaturedProducts';
import Events from '../components/Events/Events';
import Sponsored from '../components/Route/Sponsored';
const HomePage = () => {
  return (
    <div>
      <Header activeHeading={1}/>
      <Hero/>
      <Categories/>
      <BestDeals/>
      <Events/>
      <FeaturedProducts/>
      <Sponsored/>
      </div>
  );
};

export default HomePage
