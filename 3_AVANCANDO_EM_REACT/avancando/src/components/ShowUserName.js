import React from 'react';

const ShowUserName = (props) => {


    return (
        <div>
            <p>nome passado como props é: {props.name}</p>
        </div>
    )

}

export default ShowUserName;