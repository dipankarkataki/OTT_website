import React from 'react'
import './Home.css';
import Banner from './Banner/Banner';
import CategorySlider from './CategorySlider/CategorySlider';
import AcrossDevices from './AcrossDevices/AcrossDevices';
import Plans from '../Subscription/Plans';
import FreeTrialBanner from './FreeTrialBanner/FreeTrialBanner';

function Home() {
  return (
    <>
      <Banner />
      <CategorySlider />
      <AcrossDevices />
      <Plans />
      <FreeTrialBanner />
    </>
    
  )
}

export default Home