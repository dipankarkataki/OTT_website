import React from 'react'

import 'primereact/resources/themes/saga-blue/theme.css'; 
import 'primereact/resources/primereact.min.css';           
import 'primeicons/primeicons.css';                         
import 'primeflex/primeflex.css';
import { Button } from 'primereact/button';
import { Menubar } from 'primereact/menubar';
import { Image } from 'primereact/image';
import './Layout.css';

function Layout() {
  const logo = <Image src=".././assets/images/streamTube-rmbg.png" alt="Image" width="100%" height="60"/>;
  const signIn = <Button label="Sign In" severity='danger' raised/>
  const menuItems = [
    {
        'label' : 'Movies'
    },
    {
        'label' : 'Tv Shows'
    },
    {
        'label' : 'Subscription'
    },
  ];
  return (
    <>
      <div className='nav-bar'>
        <Menubar model={menuItems} start={logo} end={signIn}/>
      </div>
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

export default Layout;