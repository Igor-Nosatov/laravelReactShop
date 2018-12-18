import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Checkout extends Component {
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
      <section className="checkout_method_area p_100">
            <div className="container">
                <div className="row">
                    <div className="checkout_main_area">
                        <div className="checkout_prosses">
                            <div className="row m0">
                                <div className="col-md-6">
                                    <div className="checkout_method">
                                        <h3>check as a guest or register</h3>
                                        <h4>Register with us for future convenience:</h4>
                                         <form role="form" className="radio_area">
                                            <ul className="radio_style">
                                                <li>
                                                    <input type="radio" id="f-option" name="selector"  />
                                                    <label for="f-option">checkt as guest</label>
                                                    <div className="check"></div>
                                                </li>
                                                <li>
                                                    <input type="radio" id="s-option" name="selector"  />
                                                    <label for="s-option">register</label>
                                                    <div className="check"><div className="inside"></div></div>
                                                </li>
                                            </ul>
                                          </form>
                                          <h5>register and save time !</h5>
                                          <h6>Register with us for future convenience:</h6>
                                          <a className="checkout_list" href="#"><i className="arrow_carrot-right"></i> Fast and easy check out</a>
                                          <a className="checkout_list" href="#"><i className="arrow_carrot-right"></i> Easy access to your order history and status</a>
                                          <a className="update_btn" href="#"><span>continue</span></a>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="row checkout_from_area">
                                       <h2>already registed ?</h2>
                                       <p>Please log in below :</p>
                                        <form role="form">
                                            <div className="form-group">
                                                <label for="email">Email address <span>*</span></label>
                                                <input type="email" className="form-control" id="email" />
                                            </div>
                                            <div className="form-group">
                                                <label for="pwd">Password <span>*</span></label>
                                                <input type="password" className="form-control" id="pwd" />
                                            </div>
                                            <h3>* Required Filelds</h3>
                                            <div className="forgot_area">
                                                <button type="submit" className="btn update_btn btn-default">log in</button>
                                                <h4>Forgot Your Password ?</h4>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
  }
}

export default Checkout
