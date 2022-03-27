import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import DataContext from './context-api/datacontext.';

import HomePage from './pages/HomePage';
import ShoppingPage from './pages/ShoppingPage';
import SingleProductPage from './pages/SingleProductPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle';
import 'font-awesome/css/font-awesome.min.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './App.css';

class App extends Component {
  render() {
    return (
      <DataContext.Provider>
        <div>

          <BrowserRouter>
            <Switch>
              <Route path="/" exact component={HomePage}></Route>
              <Route path="/shop" component={ShoppingPage}></Route>
              <Route path="/product/:id" component={SingleProductPage}></Route>
              <Route path="/cart" component={CartPage}></Route>
              <Route path="/checkout" component={CheckoutPage}></Route>
            </Switch>
          </BrowserRouter>

        </div>
      </DataContext.Provider>

    );
  }
}

export default App;