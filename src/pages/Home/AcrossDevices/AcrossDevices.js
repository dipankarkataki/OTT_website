import React from 'react'
import { Card } from 'primereact/card'
import './AcrossDevices.css';

function AcrossDevices() {
  return (
    <div className='mx-auto w-10 pb-2 mt-5'>
        <div className='flex flex-row justify-content-between mb-6'>
            <div className='heading-section'>
                <h1 style={{color:'white'}}>We provide you streaming experience across various devices.</h1>
                <p className='w-10 line-height-3' style={{color:'#787878'}}>With StreamTube you can access your favourite movies & tv shows anytime, 
                    anywhere. Our platform is designed to be compatible with wide range of devices. Ensuring that you 
                    never miss a moment of entertainment.
                </p>
            </div>
        </div>

        <div className="card flex sm:flex-row flex-wrap justify-content-between align-items-center gap-5 mb-5 device-cards">
            <Card className='w-12 h-14rem p-3'>
                <div className='flex flex-row justify-content-start align-items-center device-card-title'>
                    <div className='icon'>
                        <i className='pi pi-mobile'></i>
                    </div>
                    <h2 className='text-white'>SmartPhones</h2>
                </div>
                <p className='device-card-content  line-height-3 ml-4'>
                    StreamTube is optimized for both Android and iOS phones.
                    Download out app from Play Store or App Store.
                </p>
            </Card>
            <Card className='w-12 h-14rem p-3'>
                <div className='flex flex-row justify-content-start align-items-center device-card-title'>
                    <div className='icon'>
                        <i className='pi pi-desktop'></i>
                    </div>
                    <h2 className='text-white'>Laptops</h2>
                </div>
                <p className='device-card-content  line-height-3 ml-4'>
                    StreamTube is optimized for all types of laptop screens.
                </p>
            </Card>
            <Card className='w-12 h-14rem p-3'>
                <div className='flex flex-row justify-content-start align-items-center device-card-title'>
                    <div className='icon'>
                        <i className='pi pi-tablet'></i>
                    </div>
                    <h2 className='text-white'>Tablets</h2>
                </div>
                <p className='device-card-content  line-height-3 ml-4'>
                    StreamTube is optimized for both Android and iOS tablets.
                    Download out app from Play Store or App Store.
                </p>
            </Card>
            <Card className='w-12 h-14rem p-3'>
                <div className='flex flex-row justify-content-start align-items-center device-card-title'>
                    <div className='icon'>
                        <i className='pi pi-youtube'></i>
                    </div>
                    <h2 className='text-white'>Smart Tvs</h2>
                </div>
                <p className='device-card-content line-height-3 ml-4'>
                    StreamTube is optimized for Smart Tvs.
                    Download out app from Play Store.
                </p>
            </Card>
        </div>
    </div>
  )
}

export default AcrossDevices