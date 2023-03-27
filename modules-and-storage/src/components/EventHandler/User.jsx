import React from 'react';


const User = (props) => {
    const {id, name} = props.user;

    const showId = (id) => alert('I am clicked: ' + id);
    return (
        <div>
            <h3>User Name: {name}</h3>
            <h5>ID: {id}</h5>
            <button onClick={ () => showId(id)}>Click Me</button>
        </div>
    );
};

export default User;