import React from 'react';

function Card(props) {

    return(
        <div>
            <h2>{props.info.name}</h2>
            <img src={props.info.avatar_url}/>
            <h4>{props.info.company}</h4>
        </div>
    );
}

export default Card;