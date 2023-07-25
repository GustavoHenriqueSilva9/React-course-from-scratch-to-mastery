import { useState } from 'react'

const ListRender = () => {

    const [list] = useState(["Gustavo", "Bruno", "Amanda", "Catarina", "Astofo", "Praia"])

    const [users, setUsers] = useState([{ id: 1, name: 'Gustavo', age: 2 }, { id: 2, name: 'Astofo', age: 34 }, { id: 3, name: 'Olivaniar', age: 3 }])

    const deleteRandom = () => {

        const randomNumber = Math.floor(Math.random() * 4)

        setUsers(users.filter(user => (user.id !== randomNumber)))

        console.log(randomNumber, users.id);
    }
    console.log('users: ', users);

    return (
        <div>
            <div>
                <h3> List Rendering</h3>
                {list.map((item, index) => (
                    <li key={index}> {item} </li>))}
            </div>
            
            <div>
                {users.map((item) => (
                    <li key={item.id}> {item.name + ' ' + item.age}</li>
                ))}
            </div>

            <div>
                <br/>
                <button onClick={deleteRandom}> Delete random </button>
            </div>
        </div>
    )

}

export default ListRender;