import './App.css';
import TaskList from './components/TaskList';

function App() {


  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo List</h1>
        <TaskList />
      </header>
    </div>
  );
}

export default App;
