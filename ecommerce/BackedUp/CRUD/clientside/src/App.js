import './App.css';
import Register from './components/register';
import Listuser from './components/listuser';

function App() {
  return (
    <div className="App">
        <h1>Registers and list sellers and buyers</h1>
        <Register></Register>
        <br></br>
        <hr></hr>
        <br></br>
        <Listuser></Listuser>
    </div>
  );
}

export default App;
