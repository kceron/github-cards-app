import React from 'react';
import Card from './Card'

function CardList ({users}) {
 
    function singleCard() {
        return users.map((singleUser) => <Card {...singleUser} 
        key={singleUser.name}
        />)
    }

    return(
        <div>
            {singleCard()}
        </div>
    );

}

export default CardList;