import React from 'react';
import Gyms from '../Gyms/Gyms';

const Home = () => {
    return (
        <div className='grid grid-cols-4'>
            <div className='col-span-3'>
                <Gyms></Gyms>
            </div>
            <div className='bg-blue-600 ml-2'>
                 <h1>Add to cart</h1>
            </div>
        </div>
    );
};

export default Home;