import React from 'react';
import Card from './Card'

function CardList (props) {
 
    function singleCard() {
        return props.testData.map((person) => <Card  info={person} />)
    }

    return(
        <div>
            {singleCard()}
        </div>
    );

}

export default CardList;
// const Card = () => {

// }