import React from 'react';

const Gym = ({ gym }) => {
    console.log(gym);
    const {id,age,name,picture,time,description } = gym;
    return (
        <div>
            <div className="card card-compact w-full  bg-base-100 shadow-xl">
                <figure><img  src={picture} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name }</h2>
                    <p>{description.length > 100 ? description.slice(0, 80) : description}</p>
                    <p>For Age : {age}</p>
                    <p>Time required : {time }s</p>
                    <div className="card-actions w-full">
                    <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
                </div>
        </div>
    );
};

export default Gym;