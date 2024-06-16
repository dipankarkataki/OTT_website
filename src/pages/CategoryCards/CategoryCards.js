import React, { useEffect, useState } from 'react'
import './CategoryCards.css';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button'
import { Carousel } from 'primereact/carousel';
import { Image } from 'primereact/image';
import axios from 'axios';

function CategoryCards() {
    const [movie, setMovies] = useState(['Hello', 'hello', 'hello', 'Hello', 'hello', 'hello']);

    const responsiveOptions = [
        {
            breakpoint: '3258px',
            numVisible: 4,
            numScroll: 1
        },
        {
            breakpoint: '1500px',
            numVisible: 3,
            numScroll: 1
        },
        {
            breakpoint: '1199px',
            numVisible: 3,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '575px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    const movieTemplate = (movie) => {
        return (
           <div className='movie-card mr-3'>
                <div className='movie-img'>
                    <Image src=".././assets/images/archer.jpg" alt="Image"  width="100%" />;
                </div>
                <div className='movie-genre flex flex-row justify-content-between align-items-center'>
                    <h3 className='text-white-alpha-80'>Action</h3>
                    <Button className='text-white-alpha-80' link icon="pi pi-arrow-right" />
                </div>
           </div>
        );
    };

    return (
        <div className="card">
            <Carousel value={movie} numVisible={3} numScroll={3} responsiveOptions={responsiveOptions} itemTemplate={movieTemplate} />
        </div>
    )
}

export default CategoryCards