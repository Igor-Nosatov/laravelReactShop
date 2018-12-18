import axios from 'axios'
import React, { Component } from 'react'


class Cart extends Component {
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
      <section className="shopping_cart_area p_100">
          <div className="container">
              <div className="row">
                  <div className="col-lg-8">
                      <div className="cart_product_list">
                          <h3 className="cart_single_title">Discount Cupon</h3>
                          <div className="table-responsive-md">
                              <table className="table">
                                  <thead>
                                      <tr>
                                          <th scope="col"></th>
                                          <th scope="col">product</th>
                                          <th scope="col">price</th>
                                          <th scope="col">qunatity</th>
                                          <th scope="col">total</th>
                                      </tr>
                                  </thead>
                                  <tbody>
                                      <tr>
                                          <th scope="row">
                                              <img src="img/icon/close-icon.png" alt="" />
                                          </th>
                                          <td>
                                              <div className="media">
                                                  <div className="d-flex">
                                                      <img src="img/product/cart-product/cart-1.jpg" alt="" />
                                                  </div>
                                                  <div className="media-body">
                                                      <h4>Mens Nike Bag</h4>
                                                  </div>
                                              </div>
                                          </td>
                                          <td><p>$150</p></td>
                                          <td><input type="text" placeholder="01" /></td>
                                          <td><p>$150</p></td>
                                      </tr>
                                      <tr>
                                          <th scope="row">
                                              <img src="img/icon/close-icon.png" alt=""  />
                                          </th>
                                          <td>
                                              <div className="media">
                                                  <div className="d-flex">
                                                      <img src="img/product/cart-product/cart-2.jpg" alt=""  />
                                                  </div>
                                                  <div className="media-body">
                                                      <h4>Mens Nike Bag</h4>
                                                  </div>
                                              </div>
                                          </td>
                                          <td><p>$150</p></td>
                                          <td><input type="text" placeholder="01"  /></td>
                                          <td><p>$250</p></td>
                                      </tr>
                                  </tbody>
                              </table>
                          </div>
                      </div>
                      <div className="calculate_shoping_area">
                          <h3 className="cart_single_title">Calculate Shoping <span><i className="icon_minus-06"></i></span></h3>
                          <div className="calculate_shop_inner">
                              <form className="calculate_shoping_form row" action="contact_process.php" method="post" id="contactForm" novalidate="novalidate">
                                  <div className="form-group col-lg-12">
                                      <select className="selectpicker">
                                          <option>United State America (USA)</option>
                                          <option>United State America (USA)</option>
                                          <option>United State America (USA)</option>
                                      </select>
                                  </div>
                                  <div className="form-group col-lg-6">
                                      <input type="text" className="form-control" id="state" name="state" placeholder="State / Country"  />
                                  </div>
                                  <div className="form-group col-lg-6">
                                      <input type="text" className="form-control" id="zip" name="zip" placeholder="Postcode / Zip" />
                                  </div>
                                  <div className="form-group col-lg-12">
                                      <button type="submit" value="submit" className="btn submit_btn form-control">update totals</button>
                                  </div>
                              </form>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-4">
                      <div className="total_amount_area">
                          <div className="cupon_box">
                              <h3 className="cart_single_title">Discount Cupon</h3>
                              <div className="cupon_box_inner">
                                  <input type="text" placeholder="Enter your code here"  />
                                  <button type="submit" className="btn btn-primary subs_btn">apply cupon</button>
                              </div>
                          </div>
                          <div className="cart_totals">
                              <h3 className="cart_single_title">Discount Cupon</h3>
                              <div className="cart_total_inner">
                                  <ul>
                                      <li><a href="#"><span>Cart Subtotal</span> $400.00</a></li>
                                      <li><a href="#"><span>Shipping</span> Free</a></li>
                                      <li><a href="#"><span>Totals</span> $400.00</a></li>
                                  </ul>
                              </div>
                              <button type="submit" className="btn btn-primary update_btn">update cart</button>
                              <button type="submit" className="btn btn-primary checkout_btn">proceed to checkout</button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    )
  }
}

export default Cart
