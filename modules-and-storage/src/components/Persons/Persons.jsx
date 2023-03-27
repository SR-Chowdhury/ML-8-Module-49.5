import React, { useEffect, useState } from 'react';
import Person from './Person';

const Persons = () => {
    const [persons, setPersons] = useState([]);
    useEffect( () => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setPersons(data))
            .catch(err => console.log(err))
    }, []);
    return (
        <div>
            <h1>Total Person: {persons.length}</h1>
            {
                persons.map(person => <Person key={person.id} person={person}/>)
            }
        </div>
    );
};

export default Persons;