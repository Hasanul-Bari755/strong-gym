import React from 'react';

const Myinfo = () => {
    return (
        <div>
            <div className='flex  items-center m-5'>
                <img className='rounded-full w-14 h-14' src="https://media.istockphoto.com/photos/body-building-workout-picture-id843435340?b=1&k=20&m=843435340&s=170667a&w=0&h=qnrwLh76TsSlkG4ptkAaWtbaNBG1t08Pj0P-4lXgAkk=" alt="" />
                <div className='ml-5'>
                    <h1 className='font-bold'>Yangku yaiya</h1>
                    <p>Sydney, Australia</p>
                </div>
            </div>
            <div className='flex justify-center bg-zinc-400 rounded-lg m-5'>
                <div className='m-4'>
                    <h1>75kg</h1>
                    <h1 className='font-semibold'>Weight</h1>
                 </div>
                <div className='m-4'>
                    <h1>5.7"</h1>
                    <h1 className='font-semibold'>Height</h1>
                 </div>
                <div className='m-4'>
                    <h1>25yer</h1>
                    <h1 className='font-semibold'>Age</h1>
                 </div>
            </div>
        </div>
    );
};

export default Myinfo;