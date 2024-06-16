import React from 'react'
import './Home.css';
import Banner from './Banner/Banner';
import CategorySlider from './CategorySider/CategorySlider';
import AcrossDevices from './AcrossDevices/AcrossDevices';

function Home() {
  return (
    <>
      <Banner />
      <CategorySlider />
      <AcrossDevices />
    </>
    
  )
}

export default Home