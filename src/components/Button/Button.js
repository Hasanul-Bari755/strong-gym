import React from 'react';

const Button = ({btnvalue,setBtnvalue}) => {
    const handlebtn = (value) => {
          localStorage.setItem('Button-value',value)
          setBtnvalue(value)
    }
    return (
        <div>
            <h1 className='m-5 text-2xl font-semibold'>Add A Break</h1>
            <div className='flex flex-col lg:flex-row m-5 justify-between  bg-zinc-400 p-5 rounded-lg'>
                <button onClick={()=>handlebtn(20)} className='border border-gray-600 bg-white rounded-full p-3 font-semibold'>20</button>
                <button onClick={()=>handlebtn(30)} className='border border-gray-600 rounded-full bg-white p-3 font-semibold'>30</button>
                <button onClick={()=>handlebtn(40)} className='border border-gray-600 rounded-full bg-white p-3 font-semibold'>40</button>
                <button onClick={()=>handlebtn(50)} className='border border-gray-600 rounded-full bg-white p-3 font-semibold'>50</button>
                <button onClick={()=>handlebtn(60)} className='border border-gray-600 rounded-full bg-white p-3 font-semibold'>60</button>
            </div>
             
            
        </div>
    );
};

export default Button;