import React, { useEffect, useState } from 'react';
import Gym from '../Gym/Gym';

const Gyms = ({carts,setCarts}) => {
    const [gyms, setGyms] = useState([]);
    useEffect(() => {
        fetch('gym.json')
            .then(res => res.json())
        .then(data =>setGyms(data))
    }, [])
   
    return (
        <div>
            <div className='flex mt-5'>
                <img className='w-10 h-10 rounded' src="https://images.unsplash.com/photo-1517305268957-8d20be2c9b62?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Z3ltJTIwbG9nb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                 <h1 className='text-3xl font-bold ml-3 text-emerald-500'>STRONG GYM</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10'>
            {
                gyms.map( gym => <Gym gym={gym} key={gym.id} carts={carts} setCarts={setCarts}></Gym>)
            }
            </div>
        </div>
    );
};

export default Gyms;