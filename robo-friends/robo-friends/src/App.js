import './App.css';
import CardList from './components/CardList'
import { robots } from './robots';

function App() {
  return (
    <div className="App">
        <CardList robots={robots}/>
    </div>
  );
}

export default App;
