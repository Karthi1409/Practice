import TaskComp from './components/taskComp'
import './App.css';
import StdListComp from './components/listdetails';

function App() {
  return (
    <div className="App">
      <div className='add'>
        <TaskComp></TaskComp>
      </div>
      <div className='list'>
        <StdListComp></StdListComp>
      </div>
    </div>
  );
}

export default App;
