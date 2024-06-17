import React from 'react';
import './FreeTrialBanner.css';
import { Image } from 'primereact/image';
import { Button } from 'primereact/button';



function FreeTrialBanner() {
  return (
    <div className='text-center mt-8 mb-8 free-trial-banner'>
        <Image src=".././assets/images/free-trial-banner.png" alt="Free trial banner" width="100%"/>
        <Button className='free-trial-banner-btn hidden md:block' label='Start Free Trial'  size="large" severity='danger' raised  />
    </div>
  )
}

export default FreeTrialBanner