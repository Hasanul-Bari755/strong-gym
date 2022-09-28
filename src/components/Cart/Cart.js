import React from 'react';

const Cart = ({ carts }) => {
    let totalTime = 0;
    for (const cart of carts) {
        totalTime = totalTime + cart.time;
    }
    return (
        <div className='m-5'>
            <h1 className='text-2xl font-semibold'>Exercise Details</h1>
            <div className='bg-zinc-400 rounded-lg p-2 font-medium mt-5'>
                <h1>Exercise time : { totalTime}s</h1>
            </div>
        </div>
    );
};

export default Cart;