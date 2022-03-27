import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import DataContext from './context/data-context';

import HomePage from './pages/home';
import ShopPage from './pages/shop';
import ProductPage from './pages/product';
import ChartPage from './pages/chart';
import CheckoutPage from './pages/checkout';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle';
import 'font-awesome/css/font-awesome.min.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      selectProduct : []
    }
  }

  onAddCart = (product) => {
    this.state.selectProduct.push(product);
    this.setState({
      selectProduct : this.state.selectProduct
    })
  }

  render() {
    return (
      <DataContext.Provider value={{
        onSelect : this.onAddCart,
        cartProduct : this.state.selectProduct
      }}>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={HomePage}></Route>
            <Route path="/shop" component={ShopPage}></Route>
            <Route path="/product/:id" component={ProductPage}></Route>
            <Route path="/cart" component={ChartPage}></Route>
            <Route path="/checkout" component={CheckoutPage}></Route>
          </Switch>
        </BrowserRouter>
      </DataContext.Provider>
    );
  }
}

export default App;