import React, { useState } from 'react';

function Form({handleUserSearch}) {

    const [username, setUsername] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()
        handleUserSearch(username)
    }

    const onChange = (e) => {
        setUsername(e.target.value)
    }

    return(
        <form onSubmit={handleSubmit}>
            <input onChange={onChange} type="text" placeholder="GitHub Username" value={username}/>
            <button type="submit">Search</button>
        </form>
    );
}

export default Form; 