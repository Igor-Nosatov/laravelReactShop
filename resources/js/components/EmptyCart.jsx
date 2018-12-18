import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class EmptyCart extends Component {
  constructor () {
    super()
    this.state = {
      projects: []
    }
  }

  componentDidMount () {
    axios.get('/api/projects').then(response => {
      this.setState({
        projects: response.data
      })
    })
  }

  render () {
      return (
      <section className="emty_cart_area p_100">
              <div className="container">
                  <div className="emty_cart_inner">
                      <i className="icon-handbag icons"></i>
                      <h3>Your Cart is Empty</h3>
                      <h4>back to <a href="#">shopping</a></h4>
                  </div>
              </div>
          </section>
    )
  }
}

export default EmptyCart
