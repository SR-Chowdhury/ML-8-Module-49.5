import React from 'react';
import { add, mul } from '../Utilities/Utilities'

const Products = () => {
    const a = 10;
    const b = 5;
    const sum = add(a, b);
    const multi = mul(a, b);
    return (
        <div>
            <h1>Bismillahir Rahmanir Rahim</h1>
            <p>
                Addition: {sum} <br />
                Multiplication: {multi}
            </p>
        </div>
    );
};

export default Products;