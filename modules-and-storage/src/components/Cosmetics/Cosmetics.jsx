import React, { useEffect, useState } from 'react';
import Cosmetic from './Cosmetic';

const Cosmetics = () => {
    const [cosmetics, setCosmetics] = useState([]);
    useEffect( () => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCosmetics(data))
            .catch(err => console.log(err))
    }, []);
    return (
        <div>
            <h1>Total Cosmetics User: {cosmetics.length}</h1>
            {
                cosmetics.map(cosmetic => <Cosmetic key={cosmetic.id} cosmetic={cosmetic} />)
            }
        </div>
    );
};

export default Cosmetics;