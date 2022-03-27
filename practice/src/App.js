import { Component } from 'react';
import CountComp from './components/count';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import CalComp from './components/calculator';
import FormComp from './components/form';
import MailComp from './components/mail';
class App extends Component {
  render() {
    return (
      <MailComp></MailComp>
      // <BrowserRouter>
      // <Routes>
      //   <Route path="/" exact element={<CountComp />}></Route>
      //   <Route path="/cal" element={< CalComp />}></Route>
      //   <Route path="/form" exact element={<FormComp />}></Route>
      //   <Route path="/mail" exact element={<MailComp/>}></Route>
      // </Routes>
      // </BrowserRouter>
    )
  }
}

export default App;
