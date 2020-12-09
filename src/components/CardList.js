import React from 'react';
import Card from './Card'

function CardList (props) {
 
    function singleCard() {
        return props.testData.map((person) => <Card {...person} 
        key={person.name}
        />)
    }

    return(
        <div>
            {singleCard()}
        </div>
    );

}

export default CardList;