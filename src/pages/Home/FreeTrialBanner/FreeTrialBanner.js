import React from 'react';
import './FreeTrialBanner.css';
import { Image } from 'primereact/image';
import { Button } from 'primereact/button';



function FreeTrialBanner() {
  return (
    <div className='text-center mt-8 mb-8'>
        <Image src=".././assets/images/free-trial-banner.png" alt="Free trial banner" />
        <Button className='free-trial-banner-btn' label='Start Free Trial' size='large' severity='danger' raised  icon='pi pi-arrow-right' iconPos="right" />
    </div>
  )
}

export default FreeTrialBanner