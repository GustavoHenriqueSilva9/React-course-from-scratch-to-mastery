// Components
import ManageData from './components/ManageData';

// Styles
import './App.css';

// Images
import Paisagem from './assets/paisagem02.jpeg';
import ListRender from './components/ListRender';
import ConditioRender from './components/ConditionRender';
import ShowUserName from './components/ShowUserName';
import { useState } from 'react';
import CarDetails from './components/CarDetails';
import Fragment from './components/Fragment';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';
import UserDetail from './components/UserDetail';

function App() {

  function showMenssage() {
    alert('Passando função para componente filho')
  }

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => setMessage(msg);

  const [userName] = useState('Joaquim')
  const garage = [{ id: 1, brand: 'Ford', color: 'Blue', km: 0, newCar: true },
  { id: 2, brand: 'BMW', color: 'Black', km: 10000, newCar: false },
  { id: 3, brand: 'FIAT', color: 'White', km: 2500, newCar: false }]


  const listOfPeople = [{ name: "Gustavo", idade: 21, sexo: "Masculino", index: 1 }, { name: "Bruno", idade: 16, sexo: "Masculino", index: 2 }, { name: "Gabriel", idade: 3, sexo: "Masculino", index: 1 }]



  return (
    <div className="App">
      <h1>Avançando em React</h1>

      {/* Imagens da pasta public */}
      <div>
        <img src="/paisagem01.jpeg" alt="paisagem"></img>
      </div>

      {/* imagem dentro assets no src*/}
      <div>
        <img src={Paisagem} alt="Outras imagem de paisagem"></img>
      </div>

      <div>
        <h2>useState: </h2>
        <ManageData />

      </div>

      <div>
        <h3>List Rendering</h3>
        <ListRender />
      </div>

      <div>
        <ConditioRender />
      </div>

      {/* props */}
      <div>
        <ShowUserName name={userName} />
      </div>

      {/* destructuring */}
      <div>
        <CarDetails brand="BMW" km={100.000} newCar={false} color="White" />
        <CarDetails brand="FORD" km={0} newCar={true} color="Blue" />
        <CarDetails brand="HONDA" km={4500} newCar={false} color="Red" />
      </div>

      {/* Percorredo Listas */}
      <div>
        <h3> Percorrendo Lista </h3>
        {garage.map((car) => (
          <CarDetails key={car.id} brand={car.brand} km={car.km} newCar={car.newCar} color={car.color} />
        ))}
      </div>


      {/* Fragments */}
      <Fragment propsFagment="teste fragment" />

      {/* Container */}
      <Container myValue="12453">

        <p>Conteúdo Filho dentro do container</p>

      </Container>

      {/* Function como props */}
      <ExecuteFunction myFunction={showMenssage} />

      {/* State Lift*/}
      <br />
      <Message msg={message} />
      <br />
      <ChangeMessageState handleMessage={handleMessage} />

      <h3>Desafio finalização do modulo: </h3>
      {listOfPeople.map((people) => (
       <UserDetail key={people.index} peoples={people} /> 
      ))}


    </div>

  );
}

export default App;
