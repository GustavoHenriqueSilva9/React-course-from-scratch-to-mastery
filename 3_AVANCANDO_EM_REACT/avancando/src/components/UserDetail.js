import React from 'react'

const UserDetail = ({ peoples }) => {
    return (
        <div>
            <br/>
            <li> Nome: {peoples.name}</li>
            <li> Idade: {peoples.idade}</li>
            <li> Sexo: {peoples.sexo}</li>
            <li>Pode dirigir ? {peoples.idade > 18 ? "Sim": "Não"} </li> 

        </div>
    )
}

export default UserDetail