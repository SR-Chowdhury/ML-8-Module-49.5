import React from 'react';

const ArrayReduce = () => {
    const arr = [10, 20, 30, 40];
    const total = arr.reduce( (prev, curr) => prev + curr, 0);
    return (
        <div>
            <h1>Total after using <i>reduce()</i> method: {total}</h1>
        </div>
    );
};

export default ArrayReduce;