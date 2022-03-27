import './App.css';
import ClassComp from './components/classComp';
import FunctionComp from './components/functionComp';
import ListDetailsComp from './components/listdetails'
function App() {
  return (
    <div className="App">
      <FunctionComp></FunctionComp>
      <ClassComp></ClassComp>
      <ListDetailsComp></ListDetailsComp>
    </div>
  );
}

export default App;
