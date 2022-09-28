import React, { useState } from 'react';
import Button from '../Button/Button';
import Cart from '../Cart/Cart';
import Gyms from '../Gyms/Gyms';
import Myinfo from '../Myinfo/Myinfo';
import { ToastContainer, toast } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';
 
const Home = () => {
    const [carts, setCarts] = useState([]);
    const [btnvalue, setBtnvalue] = useState('');
    const tostify = () => {
        toast("Activity Completed");
    }
    return (
        <div className='grid grid-cols-4'>
            <div className='col-span-3 w-[80%] mx-auto'>
                <Gyms carts={carts} setCarts={setCarts}></Gyms>
            </div>
            <div>
                <div className='bg-zinc-100 ml-2 sticky top-0 '>
                <Myinfo></Myinfo>
                <Button btnvalue={btnvalue} setBtnvalue={setBtnvalue} ></Button>
                
                <Cart carts={carts} btnvalue={btnvalue} setBtnvalue={setBtnvalue}></Cart>
                <div className='m-5'>
                        <button onClick={tostify} className="btn btn-block rounded-lg  font-medium">Activity Completed</button>
                         <ToastContainer />
               </div>
             </div>
            </div>
        </div>
    );
};

export default Home;