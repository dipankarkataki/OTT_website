import React from 'react'
import './Movie.css';
import BannerMovie from './BannerMovies/BannerMovie';
import MovieList from './List/MovieList';

function Movie() {
  return (
    <div className='h-full movie'>
        <BannerMovie />
        <MovieList />
    </div>
   
  )
}

export default Movie