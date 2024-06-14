import React from 'react'
import './Layout.css';

import 'primereact/resources/themes/saga-blue/theme.css'; 
import 'primereact/resources/primereact.min.css';           
import 'primeicons/primeicons.css';                         
import 'primeflex/primeflex.css';
import { Button } from 'primereact/button';
import { Menubar } from 'primereact/menubar';
import { Image } from 'primereact/image';

import { Outlet } from 'react-router-dom';
import Home from '../Home/Home';

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
    <div className='main-bg'>
      <div className='nav-bar'>
        <Menubar model={menuItems} start={logo} end={signIn}/>
      </div>

      <Outlet/>
    </div>
  )
}

export default Layout;