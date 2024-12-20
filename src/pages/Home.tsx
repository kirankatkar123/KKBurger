import React from 'react';
import Banner from '../components/home/Banner';
import FeaturedProducts from '../components/home/FeaturedProducts';
import NewLaunch from '../components/home/NewLaunch';
import LocationMap from '../components/shared/LocationMap';

const Home = () => {
  return (
    <div className="space-y-8">
      <Banner />
      <FeaturedProducts />
      <NewLaunch />
      <LocationMap />
    </div>
  );
};

export default Home;