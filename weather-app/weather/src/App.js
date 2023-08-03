import './App.css';
import {Routes, Route} from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import Favorites from './components/Favorites';

function App() {
  return (
    <>
    <div className='nav'>
        <h3>Weather App</h3>
        <Nav/>
    </div>
    <div className="App">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/favorites" element={<Favorites/>}/>
        </Routes>
    </div>
    </>
  );
}

export default App;
