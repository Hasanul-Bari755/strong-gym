import React from 'react';

const Gym = ({ gym,carts,setCarts }) => {
    
    const { id, age, name, picture, time, description } = gym;
    const handleAddtoCart = ()=>{
        const info = {
             time
        }
        if (carts) {
            setCarts([...carts,info])
        }
        else {
            setCarts([info])
        }
    }
    return (
        <div>
            <div className="card card-compact w-full  bg-base-100 shadow-xl">
                <figure><img  src={picture} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title font-semibold">{name }</h2>
                    <p>{description.length > 100 ? description.slice(0, 80) : description}</p>
                    <p>For Age : {age}</p>
                    <p>Time required : {time }s</p>
                    <div className="card-actions w-full">
                    <button onClick={handleAddtoCart} className="btn btn-block">ADD TO CART</button>
                    </div>
                </div>
                </div>
        </div>
    );
};

export default Gym;