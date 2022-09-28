import React from 'react';

const Button = () => {
    return (
        <div>
            <h1 className='m-5 text-2xl font-semibold'>Add A Break</h1>
            <div className='flex m-5 justify-between  bg-zinc-400 p-5 rounded-lg'>
                <button className='border border-gray-600 rounded-full p-3 font-semibold'>20</button>
                <button className='border border-gray-600 rounded-full p-3 font-semibold'>20</button>
                <button className='border border-gray-600 rounded-full p-3 font-semibold'>20</button>
                <button className='border border-gray-600 rounded-full p-3 font-semibold'>20</button>
                <button className='border border-gray-600 rounded-full p-3 font-semibold'>20</button>
            </div>
        </div>
    );
};

export default Button;