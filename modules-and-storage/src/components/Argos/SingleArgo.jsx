import React from 'react';
import { setMultiValueToLocalStorage } from '../Utilities/setMultipleValue';

const SingleArgo = (props) => {
    const {id, name} = props.product;
    const addToCart = (id) => {
        setMultiValueToLocalStorage(id);
    }
    return (
        <div>
            <h2>Name: {name}, id: {id}</h2>
            <button onClick={ () => addToCart(id)}>Add to Cart</button>
        </div>
    );
};

export default SingleArgo;