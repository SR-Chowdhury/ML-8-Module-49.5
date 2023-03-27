import React, { useEffect, useState } from 'react';
import User from './User';

const HandlerParameter = () => {
    const [users, setUsers] = useState([]);
    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUsers(data))
            .catch(err => console.log(err))
    }, []);
    return (
        <div>
            <h1>Bismillahir Rahmanir Rahim (49-5-5)</h1>
            <p>Users Length: {users.length}</p>
            {
                users.map(user => <User user = {user} key={user.id}/>)
            }
        </div>
    );
};


export default HandlerParameter;