
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
import Register from './components/Register'
import Login from './components/Login'
import Page404 from './components/Page404'


class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route path='/' component={Home} />
            <Route path='/' component={Shop} />
            <Route path='/' component={Cart} />
            <Route path='/' component={Checkout} />
            <Route path='/' component={Contact} />
            <Route path='/' component={EmptyCart} />
            <Route path='/' component={Product} />
            <Route path='/' component={Register} />
            <Route path='/' component={Login} />
            <Route path='/' component={Page404} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
