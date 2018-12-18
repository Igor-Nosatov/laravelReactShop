import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Shop extends Component {
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
      <section className="categories_product_main p_80">
            <div className="container">
                <div className="categories_main_inner">
                    <div className="row row_disable">
                        <div className="col-lg-9 float-md-right">
                            <div className="showing_fillter">
                                <div className="row m0">
                                    <div className="first_fillter">
                                        <h4>Showing 1 to 12 of 30 total</h4>
                                    </div>
                                    <div className="secand_fillter">
                                        <h4>SORT BY :</h4>
                                        <select className="selectpicker">
                                            <option>Name</option>
                                            <option>Name 2</option>
                                            <option>Name 3</option>
                                        </select>
                                    </div>
                                    <div className="third_fillter">
                                        <h4>Show : </h4>
                                        <select className="selectpicker">
                                            <option>09</option>
                                            <option>10</option>
                                            <option>10</option>
                                        </select>
                                    </div>
                                    <div className="four_fillter">
                                        <h4>View</h4>
                                        <a className="active" href="#"><i className="icon_grid-2x2"></i></a>
                                        <a href="#"><i className="icon_grid-3x3"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="c_product_grid_details">
                                <div className="c_product_item">
                                    <div className="row">
                                        <div className="col-lg-4 col-md-6">
                                            <div className="c_product_img">
                                                <img className="img-fluid" src="img/product/l-product-2.jpg" alt="" />
                                            </div>
                                        </div>
                                        <div className="col-lg-8 col-md-6">
                                            <div className="c_product_text">
                                                <h3>Nike Max Air Vapor Power</h3>
                                                <h5>$45.05</h5>
                                                <ul className="product_rating">
                                                    <li><a href="#"><i className="fa fa-star"></i></a></li>
                                                    <li><a href="#"><i className="fa fa-star"></i></a></li>
                                                    <li><a href="#"><i className="fa fa-star"></i></a></li>
                                                    <li><a href="#"><i className="fa fa-star"></i></a></li>
                                                    <li><a href="#"><i className="fa fa-star"></i></a></li>
                                                </ul>
                                                <h6>Available In <span>Stock</span></h6>
                                                <p>Curabitur semper varius lectus sed consequat. Nam accumsan dapibus sem, sed lobortis nisi porta vitae. Ut quam tortor, facilisis nec laoreet consequat, malesuada a massa. Proin pretium tristique leo et imperdiet.</p>
                                                <ul className="c_product_btn">
                                                    <li className="p_icon"><a href="#"><i className="icon_piechart"></i></a></li>
                                                    <li><a className="add_cart_btn" href="#">Add To Cart</a></li>
                                                    <li className="p_icon"><a href="#"><i className="icon_heart_alt"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="c_product_item">
                                    <div className="row">
                                        <div className="col-lg-4 col-md-6">
                                            <div className="c_product_img">
                                                <img className="img-fluid" src="img/product/l-product-4.jpg" alt="" />
                                            </div>
                                        </div>
                                        <div className="col-lg-8 col-md-6">
                                            <div className="c_product_text">
                                                <h3>Max Air Vapor Power</h3>
                                                <h5>$110.50</h5>
                                                <ul className="product_rating">
                                                    <li><a href="#"><i className="fa fa-star"></i></a></li>
                                                    <li><a href="#"><i className="fa fa-star"></i></a></li>
                                                    <li><a href="#"><i className="fa fa-star"></i></a></li>
                                                    <li><a href="#"><i className="fa fa-star"></i></a></li>
                                                    <li><a href="#"><i className="fa fa-star"></i></a></li>
                                                </ul>
                                                <h6>Available In <span>Stock</span></h6>
                                                <p>Curabitur semper varius lectus sed consequat. Nam accumsan dapibus sem, sed lobortis nisi porta vitae. Ut quam tortor, facilisis nec laoreet consequat, malesuada a massa. Proin pretium tristique leo et imperdiet.</p>
                                                <ul className="c_product_btn">
                                                    <li className="p_icon"><a href="#"><i className="icon_piechart"></i></a></li>
                                                    <li><a className="add_cart_btn" href="#">Add To Cart</a></li>
                                                    <li className="p_icon"><a href="#"><i className="icon_heart_alt"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="c_product_item">
                                    <div className="row">
                                        <div className="col-lg-4 col-md-6">
                                            <div className="c_product_img">
                                                <img className="img-fluid" src="img/product/l-product-7.jpg" alt="" />
                                            </div>
                                        </div>
                                        <div className="col-lg-8 col-md-6">
                                            <div className="c_product_text">
                                                <h3>Fossil Watch</h3>
                                                <h5>$250</h5>
                                                <ul className="product_rating">
                                                    <li><a href="#"><i className="fa fa-star"></i></a></li>
                                                    <li><a href="#"><i className="fa fa-star"></i></a></li>
                                                    <li><a href="#"><i className="fa fa-star"></i></a></li>
                                                    <li><a href="#"><i className="fa fa-star"></i></a></li>
                                                    <li><a href="#"><i className="fa fa-star"></i></a></li>
                                                </ul>
                                                <h6>Available In <span>Stock</span></h6>
                                                <p>Curabitur semper varius lectus sed consequat. Nam accumsan dapibus sem, sed lobortis nisi porta vitae. Ut quam tortor, facilisis nec laoreet consequat, malesuada a massa. Proin pretium tristique leo et imperdiet.</p>
                                                <ul className="c_product_btn">
                                                    <li className="p_icon"><a href="#"><i className="icon_piechart"></i></a></li>
                                                    <li><a className="add_cart_btn" href="#">Add To Cart</a></li>
                                                    <li className="p_icon"><a href="#"><i className="icon_heart_alt"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="c_product_item">
                                    <div className="row">
                                        <div className="col-lg-4 col-md-6">
                                            <div className="c_product_img">
                                                <img className="img-fluid" src="img/product/l-product-8.jpg" alt="" />
                                            </div>
                                        </div>
                                        <div className="col-lg-8 col-md-6">
                                            <div className="c_product_text">
                                                <h3>Jens T-Shirt</h3>
                                                <h5>$45.05</h5>
                                                <ul className="product_rating">
                                                    <li><a href="#"><i className="fa fa-star"></i></a></li>
                                                    <li><a href="#"><i className="fa fa-star"></i></a></li>
                                                    <li><a href="#"><i className="fa fa-star"></i></a></li>
                                                    <li><a href="#"><i className="fa fa-star"></i></a></li>
                                                    <li><a href="#"><i className="fa fa-star"></i></a></li>
                                                </ul>
                                                <h6>Available In <span>Stock</span></h6>
                                                <p>Curabitur semper varius lectus sed consequat. Nam accumsan dapibus sem, sed lobortis nisi porta vitae. Ut quam tortor, facilisis nec laoreet consequat, malesuada a massa. Proin pretium tristique leo et imperdiet.</p>
                                                <ul className="c_product_btn">
                                                    <li className="p_icon"><a href="#"><i className="icon_piechart"></i></a></li>
                                                    <li><a className="add_cart_btn" href="#">Add To Cart</a></li>
                                                    <li className="p_icon"><a href="#"><i className="icon_heart_alt"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <nav aria-label="Page navigation example" className="pagination_area">
                                  <ul className="pagination">
                                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                                    <li className="page-item"><a className="page-link" href="#">4</a></li>
                                    <li className="page-item"><a className="page-link" href="#">5</a></li>
                                    <li className="page-item"><a className="page-link" href="#">6</a></li>
                                    <li className="page-item next"><a className="page-link" href="#"><i className="fa fa-angle-right" aria-hidden="true"></i></a></li>
                                  </ul>
                                </nav>
                            </div>
                        </div>
                        <div className="col-lg-3 float-md-right">
                            <div className="categories_sidebar">
                                <aside className="l_widgest l_p_categories_widget">
                                    <div className="l_w_title">
                                        <h3>Categories</h3>
                                    </div>
                                    <ul className="navbar-nav">
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Men’s Fashion
                                                <i className="icon_plus" aria-hidden="true"></i>
                                            <i className="icon_minus-06" aria-hidden="true"></i>
                                            </a>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Women’s Fashion
                                            <i className="icon_plus" aria-hidden="true"></i>
                                            <i className="icon_minus-06" aria-hidden="true"></i>
                                            </a>
                                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                <li className="nav-item"><a className="nav-link" href="#">Hoodies & Sweatshirts</a></li>
                                                <li className="nav-item"><a className="nav-link" href="#">Jackets & Coats</a></li>
                                                <li className="nav-item"><a className="nav-link" href="#">Blouses & Shirts</a></li>
                                            </ul>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Phone & Accessories
                                                <i className="icon_plus" aria-hidden="true"></i>
                                            <i className="icon_minus-06" aria-hidden="true"></i>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Electronic Appliance
                                                <i className="icon_plus" aria-hidden="true"></i>
                                            <i className="icon_minus-06" aria-hidden="true"></i>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link disabled" href="#">Computer & Networking
                                                <i className="icon_plus" aria-hidden="true"></i>
                                                <i className="icon_minus-06" aria-hidden="true"></i>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link disabled" href="#">TV, Audiio & Gaming
                                                <i className="icon_plus" aria-hidden="true"></i>
                                                <i className="icon_minus-06" aria-hidden="true"></i>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link disabled" href="#">Office Supplies
                                                <i className="icon_plus" aria-hidden="true"></i>
                                                <i className="icon_minus-06" aria-hidden="true"></i>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link disabled" href="#">All Categories
                                                <i className="icon_plus" aria-hidden="true"></i>
                                                <i className="icon_minus-06" aria-hidden="true"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </aside>
                                <aside className="l_widgest l_fillter_widget">
                                    <div className="l_w_title">
                                        <h3>Filter section</h3>
                                    </div>
                                    <div id="slider-range" className="ui_slider"></div>
                                    <label for="amount">Price:</label>
                                    <input type="text" id="amount" readonly />
                                </aside>
                                <aside className="l_widgest l_color_widget">
                                    <div className="l_w_title">
                                        <h3>Color</h3>
                                    </div>
                                    <ul>
                                        <li><a href="#"></a></li>
                                        <li><a href="#"></a></li>
                                        <li><a href="#"></a></li>
                                        <li><a href="#"></a></li>
                                        <li><a href="#"></a></li>
                                        <li><a href="#"></a></li>
                                        <li><a href="#"></a></li>
                                        <li><a href="#"></a></li>
                                        <li><a href="#"></a></li>
                                        <li><a href="#"></a></li>
                                        <li><a href="#"></a></li>
                                        <li><a href="#"></a></li>
                                        <li><a href="#"></a></li>
                                        <li><a href="#"></a></li>
                                        <li><a href="#"></a></li>
                                        <li><a href="#"></a></li>
                                        <li><a href="#"></a></li>
                                        <li><a href="#"></a></li>
                                        <li><a href="#"></a></li>
                                        <li><a href="#"></a></li>
                                        <li><a href="#"></a></li>
                                        <li><a href="#"></a></li>
                                        <li><a href="#"></a></li>
                                        <li><a href="#"></a></li>
                                    </ul>
                                </aside>
                                <aside className="l_widgest l_menufacture_widget">
                                    <div className="l_w_title">
                                        <h3>Manufacturer</h3>
                                    </div>
                                    <ul>
                                        <li><a href="#">Nigel Cabourn.</a></li>
                                        <li><a href="#">Cacharel.</a></li>
                                        <li><a href="#">Calibre (Menswear)</a></li>
                                        <li><a href="#">Calvin Klein.</a></li>
                                        <li><a href="#">Camilla and Marc</a></li>
                                    </ul>
                                </aside>
                                <aside className="l_widgest l_feature_widget">
                                    <div className="l_w_title">
                                        <h3>Featured Products</h3>
                                    </div>
                                    <div className="media">
                                        <div className="d-flex">
                                            <img src="img/product/featured-product/f-p-5.jpg" alt="" />
                                        </div>
                                        <div className="media-body">
                                            <h4>Jeans with <br /> Frayed Hems</h4>
                                            <h5>$45.05</h5>
                                        </div>
                                    </div>
                                    <div className="media">
                                        <div className="d-flex">
                                            <img src="img/product/featured-product/f-p-6.jpg" alt="" />
                                        </div>
                                        <div className="media-body">
                                            <h4>Crysp Denim<br />Montana</h4>
                                            <h5>$45.05</h5>
                                        </div>
                                    </div>
                                </aside>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
  }
}

export default Shop
