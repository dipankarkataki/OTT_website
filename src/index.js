import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Layout from './pages/Layout/Layout';
import Home from './pages/Home/Home';
import Signup from './pages/Auth/Signup';
import Movie from './pages/Movies/Movie';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="signup" element={<Signup />} />
          <Route path="movies" element={<Movie />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
