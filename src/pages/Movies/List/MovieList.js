import React from 'react';
import './MovieList.css';
import CategoryCards from '../../CategoryCards/CategoryCards';
import TrendingMovies from './TrendingMovies/TrendingMovies';
import NewRelease from './NewRelease/NewRelease';

function MovieList() {
  return (
    <div className='movie-list ml-5 md:ml-5 mr-0 md:mr-5 mt-8'> 
        <h1 className='text-white font-bold text-xl md:text-4xl mb-3 md:mb-6  ml-5'>Our Genres</h1>
        <div className='flex flex-row flex-wrap md:flex-nowrap justify-content-between mt-5 pb-8 gap-3'>
          <CategoryCards />
        </div> 

        <h1 className='text-white font-bold text-xl md:text-4xl mb-3 md:mb-6  ml-5'>New Release</h1>
        <div className='flex flex-row flex-wrap md:flex-nowrap justify-content-between mt-5 pb-8 gap-3'>
          <NewRelease />
        </div>

        <h1 className='text-white font-bold text-xl md:text-4xl mb-3 md:mb-6  ml-5'>Trending Movies</h1>
        <div className='flex flex-row flex-wrap md:flex-nowrap justify-content-between mt-5 pb-8 gap-3'>
          <TrendingMovies />
        </div>
    </div>
  )
}

export default MovieList