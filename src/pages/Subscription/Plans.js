import React from 'react';
import './Plans.css';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

function Plans() {
  return (
    <div className='mx-auto w-10 pb-2 mt-5 plan'>
        <div className='flex flex-row justify-content-between mb-6'>
            <div className='heading-section'>
                <h1 style={{color:'white'}}>Choose the right plan for you </h1>
                <p className='w-12 line-height-3' style={{color:'#787878'}}>Join StreamTube and select from our flexible
                    subscription options tailored to suit your viewing preferences. Get ready for non stop entertainment.
                </p>
            </div>
        </div>
        <div className='plan-cards flex flex-row flex-wrap md:flex-nowrap justify-content-between align-items-center gap-5 mb-5'>
            <Card className='px-4 py-4 h-full md:h-20rem w-full md:w-1/4'>
                <h4 className='text-white text-lg'>Basic Plan</h4>
                <p className='text-white-alpha-50 plan-info text-sm line-height-3'>Enjoy and extensive collection of movies and shows, 
                    featuring a range of content, including recent releases.
                </p>
                <h1 className='amount text-white'>$3.99 <span className='text-white-alpha-30 text-sm'>/ month</span></h1>
                <div className='plan-button flex flex-row flex-wrap md:flex-nowrap justify-content-start align-items-center gap-3'>
                    <Button className='free-trial-btn' label='Start Free Trial' />
                    <Button label='Choose Plan' severity='danger'/>
                </div>
            </Card>
            <Card className='px-4 py-4 h-full md:h-20rem w-full md:w-1/4'>
                <h4 className='text-white text-lg'>Standard Plan</h4>
                <p className='text-white-alpha-50 plan-info text-sm line-height-3'>Access to wider selection of movies and shows. Including most new releases and exclusive content.
                </p>
                <h1 className='amount text-white'>$5.99 <span className='text-white-alpha-30 text-sm'>/ month</span></h1>
                <div className='plan-button flex flex-row  flex-wrap md:flex-nowrap justify-content-start align-items-center gap-3'>
                    <Button className='free-trial-btn' label='Start Free Trial' />
                    <Button label='Choose Plan' severity='danger'/>
                </div>
            </Card>
            <Card className='px-4 py-4 h-full md:h-20rem w-full md:w-1/4'>
                <h4 className='text-white text-lg'>Premium Plan</h4>
                <p className='text-white-alpha-50 plan-info text-sm line-height-3'>Enjoy and extensive collection of movies and shows, with our offline watch feature.
                </p>
                <h1 className='amount text-white'>$7.99 <span className='text-white-alpha-30 text-sm'>/ month</span></h1>
                <div className='plan-button flex flex-row flex-wrap md:flex-nowrap justify-content-start align-items-center gap-3'>
                    <Button className='free-trial-btn' label='Start Free Trial' />
                    <Button label='Choose Plan' severity='danger'/>
                </div>
            </Card>
        </div>
    </div>
  )
}

export default Plans