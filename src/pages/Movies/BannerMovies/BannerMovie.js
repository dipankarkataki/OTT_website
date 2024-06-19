import React, {useState} from 'react'
import './BannerMovie.css';
import { Carousel } from 'primereact/carousel';
import { Image } from 'primereact/image';
import { Button } from 'primereact/button';

function BannerMovie() {
    const [movie, setMovies] = useState(['Hello', 'hello', 'hello', 'Hello', 'hello', 'hello']);
    const responsiveOptions = [
        {
            breakpoint: '3258px',
            numVisible: 1,
            numScroll: 1
        },
        {
            breakpoint: '1500px',
            numVisible: 1,
            numScroll: 3
        },
        {
            breakpoint: '1199px',
            numVisible: 1,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 1,
            numScroll: 1
        },
        {
            breakpoint: '575px',
            numVisible: 1,
            numScroll: 1
        },
        {
            breakpoint: '450px',
            numVisible: 1,
            numScroll: 1
        }
    ];
    const movieTemplate = (movie) => {
        return (
           <div className='banner-movie'>
                <Image src=".././assets/images/2states.jpg" alt="Banner Movie" width="100%"/>
                <div className='movie-content'>
                    <div className='text-center'>
                        <h1 className='text-white name'>Heeramandi</h1>
                    </div>
                    <p className='text-white-alpha-80 description hidden'>
                        Coming from two very different cultural backgrounds, Krish and Ananya try to convince
                        their parents to bless their relationship before they get married.
                    </p>
                    <div className='flex flex-row justify-content-center mt-3'>
                        <Button label="Play Now" severity='danger' className='font-bold' raised/>
                    </div>
                </div>
           </div>
        );
    };
    return (
        <div className="card overflow-hidden banner-movie-card">
            {/* <div className='overlay'></div> */}
            {/* <Carousel value={movie} responsiveOptions={responsiveOptions} circular autoplayInterval={3000} itemTemplate={movieTemplate} /> */}
            <Carousel value={movie} responsiveOptions={responsiveOptions} itemTemplate={movieTemplate} />
            
        </div>
    )
}

export default BannerMovie