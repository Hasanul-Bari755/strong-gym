import React, { useState } from 'react';
import Gyms from '../Gyms/Gyms';
import Myinfo from '../Myinfo/Myinfo';

const Home = () => {
    const [carts, setCarts] = useState([]);
    console.log(carts)
    return (
        <div className='grid grid-cols-4'>
            <div className='col-span-3 w-[80%] mx-auto'>
                <Gyms carts={carts} setCarts={setCarts}></Gyms>
            </div>
            <div className='bg-zinc-100 ml-2'>
                <Myinfo></Myinfo>
                
            </div>
        </div>
    );
};

export default Home;