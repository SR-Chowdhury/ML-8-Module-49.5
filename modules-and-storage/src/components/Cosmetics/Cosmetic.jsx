import React from 'react';
import { addCosmetics } from '../Utilities/fakedb';

const Cosmetic = (props) => {
    const {id, name} = props.cosmetic;
    const showCart = (id) => {
        addCosmetics(id);
    };
    return (
        <div>
            <h3>Cosmetic user name: {name}</h3>
            <h5>Cosmetic user id: {id}</h5>
            <button onClick={() => showCart(id)}>Add to Cart</button>
        </div>
    );
};

export default Cosmetic;