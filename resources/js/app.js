
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
import Product from './components/Product'
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
            <Route exact path='/' name="Home" component={Home} />
            <Route path='/shop' name="Shop"  component={Shop} />
            <Route path='/cart' name="Cart"  component={Cart} />
            <Route path='/checkout'  name="Checkout" component={Checkout} />
            <Route path='/contact' name="Contact"  component={Contact} />
            <Route path='/empty_cart' name="Empty"  component={EmptyCart} />
            <Route path='/product'  name="Product" component={Product} />
            <Route path='/register'  name="Register" component={Register} />
            <Route path='/login'  name="Login" component={Login} />
            <Route path='/not_found'  name="NotFound" component={Page404} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
