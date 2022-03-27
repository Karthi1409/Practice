import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../src/App.css';
import HomePage from './pages/homePage';
import SignupPage from './pages/signupPage';
import LoginPage from './pages/loginPage';
import TopOfferPage from './pages/topofferPage';
import GroceryPage from './pages/groceryPage';
import MobilePage from './pages/mobilePage';
import FashionPage from './pages/fashionPage';
import ElectronicsPage from './pages/electronicsPage';
import ApplicancePage from './pages/applicancePage';
import TravelPage from './pages/travelPage';
import ToyPage from './pages/toyPage';
import ProductPage from './pages/productPage';



class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={HomePage}></Route>
          <Route path='/signup' component={SignupPage}></Route>
          <Route path='/login' exact component={LoginPage}></Route>
          <Route path='/topoffers' component={TopOfferPage}></Route>
          <Route path='/groceries' component={GroceryPage}></Route>
          <Route path='/mobiles' component={MobilePage}></Route>
          <Route path='/fashions' component={FashionPage}></Route>
          <Route path='/electronics' component={ElectronicsPage}></Route>
          <Route path='/applicances' component={ApplicancePage}></Route>
          <Route path='/travel' component={TravelPage}></Route>
          <Route path='/toys' component={ToyPage}></Route>
          <Route path='/product/:id' component={ProductPage}></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
