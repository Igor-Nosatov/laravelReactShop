
require('./bootstrap');

import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './includes/Header'
import Footer from './includes/Footer'

import Home from './components/Home'
import Shop from './components/Shop'
import Cart from './components/Cart'
import Checkout from './components/Checkout'
import Contact from './components/Contact'
import EmptyCart from './components/EmptyCart'
import Product from './copmponents/Product'

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route path='/' comemponent={Home} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
