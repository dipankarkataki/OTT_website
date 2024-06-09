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
  const logo = "StreamBox";
  const signIn = <Button label="Sign In" severity='danger' raised/>
  return (
    <>
      <div className='nav-bar'>
        <Menubar start={logo} end={signIn}/>
      </div>
      <div className='hero-section'>
        <Image src=".././assets/images/banner-bg.png" alt="Banner Image" width="100%" />
      </div>
    </>
  )
}

export default Layout;