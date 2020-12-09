import React from 'react';
import Form from './Form'

function NavBar(props) {

    return(
        <div>
            <div>
                <h1>The GitHub Cards</h1>
            </div>
            <div>
                <Form handleUserSearch={props.handleUserSearch}/>
            </div>
        </div>
    );
}

export default NavBar;