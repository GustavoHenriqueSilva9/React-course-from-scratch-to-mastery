// Components
import ManageData from './components/ManageData';

// Styles
import './App.css';

// Images
import Paisagem from './assets/paisagem02.jpeg'
import ListRender from './components/ListRender';

function App() {
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
    </div>
  );
}

export default App;
