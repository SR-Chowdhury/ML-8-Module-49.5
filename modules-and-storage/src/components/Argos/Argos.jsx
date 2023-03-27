import React, { useEffect, useState } from 'react';
import SingleArgo from './SingleArgo';

const Argos = () => {
    const [products, setProducts] = useState([]);
    useEffect( () => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(err => console.log(err))
    }, []);
    return (
        <div>
            <h1>Bismillahir Rahmanir Rahim</h1>
            <h3>Total: {products.length}</h3>
            {
                products.map(product => <SingleArgo key={product.id} product = {product}/>)
            }
        </div>
    );
};

export default Argos;