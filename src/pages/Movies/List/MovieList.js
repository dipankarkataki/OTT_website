import React from 'react';
import './MovieList.css';
import { Fieldset } from 'primereact/fieldset';

function MovieList() {
  return (
    <div className='movie-list ml-5 mr-5 mt-4'> 
      <Fieldset legend="Movies">
          <p className="m-0 text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
      </Fieldset>
    </div>
  )
}

export default MovieList