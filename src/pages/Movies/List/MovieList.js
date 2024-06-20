import React from 'react';
import './MovieList.css';
import CategoryCards from '../../CategoryCards/CategoryCards';

function MovieList() {
  return (
    <div className='movie-list ml-5 md:ml-5 mr-0 md:mr-5 mt-8'> 
        <h1 className='text-white font-bold text-xl md:text-4xl mb-6 ml-5'>Our Genres</h1>
        <div className='flex flex-row flex-wrap md:flex-nowrap justify-content-between mt-5 pb-8 gap-3'>
          <CategoryCards />
        </div> 
    </div>
  )
}

export default MovieList