import React from 'react';

const Person = (props) => {
    const {id, name} = props.person;
    return (
        <div>
            <h1>Name: {name}, ID: {id}</h1>
        </div>
    );
};

export default Person;