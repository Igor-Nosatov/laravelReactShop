import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


const Header = () => (

  <header className="shop_header_area carousel_menu_area">
                <div className="carousel_top_header black_top_header row m0">
                    <div className="container">
                        <div className="carousel_top_h_inner">
                            <div className="float-md-left">
                                <div className="top_header_left">
                                    <div className="selector">

                                    </div>

                                </div>
                            </div>
                            <div className="float-md-right">
                                <ul className="account_list">
                                    <li><Link className='navbar-brand' to='/login'>Login</Link></li>
                                    <li><Link className='navbar-brand' to='/cart'>Wishlist</Link></li>
                                    <li><Link className='navbar-brand' to='/cart'>Shopping Cart</Link></li>
                                    <li><Link className='navbar-brand' to='/checkout'>Checkout</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel_menu_inner">
                    <div className="container">
                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            <a className="navbar-brand" href="#"><img src="" alt="" /></a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>

                            </button>

                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item dropdown submenu active">
                                        <Link className='navbar-brand' to='/'>Home</Link>
                                    </li>
                                    <li className="nav-item dropdown submenu">
                                        <Link className='navbar-brand' to='/shop'>Shop</Link>
                                    </li>
                                    <li className="nav-item"><Link className='navbar-brand' to='/checkout'>Checkout</Link></li>
                                    <li className="nav-item"><Link className='navbar-brand' to='/contact'>Contact</Link></li>
                                </ul>
                                <ul className="navbar-nav justify-content-end">
                                    <li className="search_icon"><a href="#"><i className="icon-magnifier icons"></i></a></li>
                                    <li className="user_icon"><a href="#"><i className="icon-user icons"></i></a></li>
                                    <li className="cart_cart"><a href="#"><i className="icon-handbag icons"></i></a></li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
  </header>
)

export default Header
