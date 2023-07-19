//Estilos css
import './App.css';

//Componentes
import FirstComponent from './componentes/FirstComponent';
import MyComponent from './componentes/MyComponent';
import TemplateExpression from './componentes/TemplateExpression';
import Events from './componentes/Events'
import Challenge from './componentes/Challenge';
function App() {
  return (
    <div className="App">
      <h1>Fundamentos do React</h1>
      <MyComponent />
      <FirstComponent />
      <TemplateExpression />
      <Events />
      <Challenge />
    </div>
  );
}

export default App;
