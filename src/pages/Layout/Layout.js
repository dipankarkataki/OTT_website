import React from 'react'
import './Layout.css';

import 'primereact/resources/themes/saga-blue/theme.css'; 
import 'primereact/resources/primereact.min.css';           
import 'primeicons/primeicons.css';                         
import 'primeflex/primeflex.css';
import { Button } from 'primereact/button';
import { Menubar } from 'primereact/menubar';
import { Image } from 'primereact/image';

import { Outlet, Link, useLocation } from 'react-router-dom';

function Layout() {
  const logo =   <Link onClick={() =>  window.open('/',)}>
                  <Image src=".././assets/images/streamTube-rmbg.png" alt="Image" width="100%" height="60"/>
                </Link>
  
  const signIn = <Button label="Sign In" severity='danger' raised onClick={() =>  window.open('signup', '_blank')}/>

  const location = useLocation();
  const main_bg_color = {
    background: location.pathname === '/' ? 'transparent' : 'black',
  }
  const menuItems = [
    {
      'label' : 'Movies',
      url: 'movies'
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
        <Menubar model={menuItems} start={logo} end={signIn} style={main_bg_color}/>
      </div>

      <div className='pt-8'>
        <Outlet/>
      </div>
      

      <div className='footer p-5 mt-5'>
        <div className='flex flex-row justify-content-around flex-wrap'>
          <div className='footer-items'>
            <h4 className='text-white'>Movies</h4>
            <ul className='footer-items-list'>
              <li>Genre</li>
              <li>Trending</li>
              <li>New Release</li>
              <li>Popular</li>
            </ul>
          </div>
          <div className='footer-items'>
            <h4 className='text-white'>Tv Shows</h4>
            <ul className='footer-items-list'>
              <li>Genre</li>
              <li>Trending</li>
              <li>New Release</li>
              <li>Popular</li>
            </ul>
          </div>
          <div className='footer-items'>
            <h4 className='text-white'>Support</h4>
            <ul className='footer-items-list'>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className='footer-items'>
            <h4 className='text-white'>Subscription</h4>
            <ul className='footer-items-list'>
              <li>Plans</li>
            </ul>
          </div>
          <div className='footer-items'>
            <h4 className='text-white'>Connect With Us</h4>
            <ul className='footer-items-list'>
              <li>
                <i className='pi pi-linkedin text-2xl text-white' style={{border:'1px solid black',padding: '10px',borderRadius: '5px', background: '#262626' }}></i>
              </li>
            </ul>
          </div>
        </div>
        
        <div className='copy-and-terms flex flex-row flex-wrap justify-content-between'>
          <h5 className='text-white-alpha-60'>&copy; StreamTube. All Rights Reserved.</h5>
          <div className='terms flex flex-row justify-content-between'>
            <Button className='text-sm text-white-alpha-60' label='Terms of Use' link />
            <Button className='text-sm text-white-alpha-60' label='Privacy Policy' link />
            <Button className='text-sm text-white-alpha-60' label='Cookie Ploicy' link />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Layout;