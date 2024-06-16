import React from 'react'
import './CategorySlider.css';
import CategoryCards from '../../CategoryCards/CategoryCards';


function CategorySlider() {
  return (
    <>
        <div className='mx-auto w-10 pb-8'>
            <div className='flex flex-row justify-content-between'>
                <div className='heading-section'>
                    <h1 style={{color:'white'}}>Explore our wide variety of categories</h1>
                    <p style={{color:'#787878'}}>Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentry to learn something new</p>
                </div>
            </div>
            <div className='flex flex-row justify-content-between category-content mt-5 pb-8 gap-3'>
                <CategoryCards />
            </div>  
        </div>
    </>
  )
}

export default CategorySlider