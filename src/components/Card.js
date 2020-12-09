import React from 'react';

function Card({name, avatar_url, company} ) {

    return(
        <div>
            <h2>{name}</h2>
            <img src={avatar_url}/>
            <h4>{company}</h4>
        </div>
    );
}

export default Card;