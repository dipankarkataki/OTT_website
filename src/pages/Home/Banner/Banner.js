import './Banner.css'
import React from 'react'
import { Image } from 'primereact/image';
import { Button } from 'primereact/button';


function Banner() {
  return (
    <>
        <div className='hero-section'>
            <Image src=".././assets/images/banner-bg.png" alt="Banner Image" width="100%" />
        </div>
        <div className='hero-text-container'>
            <h1 className='heading'>The Best Streaming Experience</h1>
            <p className='sub-heading'>
                Welcome to StreamTube, the ultimate destination for all your streaming needs. With a vast library of movies, 
                TV shows, documentaries, and exclusive content, StreamTube offers an unparalleled viewing experience. 
                Our user-friendly interface and high-quality streaming ensure that you enjoy your favorite entertainment 
                seamlessly, anytime and anywhere. Join StreamTube today and dive into a world of endless entertainment possibilities!
            </p>
            <Button label='Start Watching Now' severity='danger' icon="pi pi-play-circle" raised/>
        </div>
    </>
  )
}

export default Banner