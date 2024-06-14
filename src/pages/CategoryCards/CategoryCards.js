import React from 'react'
import './CategoryCards.css';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button'

function CategoryCards() {

    const header = (
        <img alt="Card" src=".././assets/images/archer.jpg" />
    );
    const footer = (
        <div className='flex flex-row justify-content-around'>
            <h4>Action</h4>
            <Button link icon="pi pi-arrow-right" />
        </div>
    );
    return (
        <div className="card">
            <Card footer={footer} header={header} className="w-100" />
        </div>
    )
}

export default CategoryCards