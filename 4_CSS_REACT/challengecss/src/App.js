import './App.css';
import CarDetails from './components/CarDetails';

function App() {

  const cars = [{ car: '320i', brand: 'BMW', potencia: '330CV' }, { car: 'Camaro', brand: 'VW', potencia: '400CV' }, { car: 'GOLF', brand: 'VW', potencia: '144CV' }]

  return (
    <div className="App">
      <h1 className='title_page'> Title in App.js </h1>
      <div className='cars-align'>
        {cars.map((car, id) => (
          <CarDetails key={id} cars={car} />
        ))}
      </div>
    </div>
  );
}

export default App;
