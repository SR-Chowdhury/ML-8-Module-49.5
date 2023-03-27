import React from 'react';

const ObjectReduce = () => {
    const arr = [
        {id: 1, name: 'X', price: 200},
        {id: 2, name: 'X', price: 300},
        {id: 3, name: 'X', price: 400},
        {id: 4, name: 'X', price: 100},
    ];
    const total = arr.reduce( (prev, curr) => prev + curr.price, 0);
    return (
        <div>
            <h1>Total after using <i>reduce()</i> method in Array of Object: {total}</h1>
        </div>
    );
};

export default ObjectReduce;