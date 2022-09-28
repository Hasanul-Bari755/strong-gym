import React, { useEffect, useState } from 'react';

const Gyms = () => {
    const [gyms, setGyms] = useState([]);
    useEffect(() => {
        fetch('gym.json')
            .then(res => res.json())
        .then(data =>setGyms(data))
    }, [])
    console.log(gyms)
    return (
        <div>
            <h1>I am fropm gyms</h1>
        </div>
    );
};

export default Gyms;