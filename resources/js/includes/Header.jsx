import React from 'react'
import { Link } from 'react-router-dom'


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
                                    <li><a href="#">My Account</a></li>
                                    <li><a href="#">Wish List (0)</a></li>
                                    <li><a href="#">Shopping Cart</a></li>
                                    <li><a href="#">Checkout</a></li>
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
                                        <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Home <i className="fa fa-angle-down" aria-hidden="true"></i>
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li className="nav-item"><a className="nav-link" href="index.html">Home Simple</a></li>
                                            <li className="nav-item"><a className="nav-link" href="home-carousel.html">Home Carousel</a></li>
                                            <li className="nav-item"><a className="nav-link" href="home-fullwidth.html">Home Full Width</a></li>
                                            <li className="nav-item"><a className="nav-link" href="home-parallax.html">Home Parallax</a></li>
                                            <li className="nav-item"><a className="nav-link" href="home-sidebar.html">Home Boxed</a></li>
                                            <li className="nav-item"><a className="nav-link" href="home-fixed-menu.html">Home Fixed</a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item dropdown submenu">
                                        <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Pages <i className="fa fa-angle-down" aria-hidden="true"></i>
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li className="nav-item"><a className="nav-link" href="compare.html">Compare</a></li>
                                            <li className="nav-item"><a className="nav-link" href="checkout.html">Checkout Method</a></li>
                                            <li className="nav-item"><a className="nav-link" href="register.html">Checkout Register</a></li>
                                            <li className="nav-item"><a className="nav-link" href="track.html">Track</a></li>
                                            <li className="nav-item"><a className="nav-link" href="login.html">Login</a></li>
                                            <li className="nav-item"><a className="nav-link" href="404.html">404</a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item dropdown submenu">
                                        <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Shop <i className="fa fa-angle-down" aria-hidden="true"></i>
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li className="nav-item"><a className="nav-link" href="categories-no-sidebar-2column.html">Prodcut No Sidebar</a></li>
                                            <li className="nav-item"><a className="nav-link" href="categories-no-sidebar-3column.html">Prodcut Two Column</a></li>
                                            <li className="nav-item"><a className="nav-link" href="categories-no-sidebar-4column.html">Product Grid</a></li>
                                            <li className="nav-item"><a className="nav-link" href="categories-left-sidebar.html">Categories Left Sidebar</a></li>
                                            <li className="nav-item"><a className="nav-link" href="categories-right-sidebar.html">Categories Right Sidebar</a></li>
                                            <li className="nav-item"><a className="nav-link" href="categories-grid-left-sidebar.html">Categories Grid Sidebar</a></li>
                                            <li className="nav-item"><a className="nav-link" href="product-details.html">Prodcut Details 01</a></li>
                                            <li className="nav-item"><a className="nav-link" href="product-details2.html">Prodcut Details 02</a></li>
                                            <li className="nav-item"><a className="nav-link" href="product-details3.html">Prodcut Details 03</a></li>
                                            <li className="nav-item"><a className="nav-link" href="shopping-cart.html">Shopping Cart 01</a></li>
                                            <li className="nav-item"><a className="nav-link" href="shopping-cart2.html">Shopping Cart 02</a></li>
                                            <li className="nav-item"><a className="nav-link" href="empty-cart.html">Empty Cart</a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item"><a className="nav-link" href="#">Blog</a></li>
                                    <li className="nav-item"><a className="nav-link" href="#">lookbook</a></li>
                                    <li className="nav-item"><a className="nav-link" href="contact.html">Contact</a></li>
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
