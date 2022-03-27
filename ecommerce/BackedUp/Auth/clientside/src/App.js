import './App.css';
import ListDetails from './components/listdetails';
import Task from './components/task';

function App() {
  return (
    <div className="App">
      <div className="task">
        <Task></Task>
      </div>
      <div className="list">
        <ListDetails></ListDetails>
      </div>

    </div>
  );
}

export default App;
