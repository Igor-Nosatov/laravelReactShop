import axios from 'axios'
import React, { Component } from 'react'


class Home extends Component {
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
      <div>
        <section className="special_offer_area">
       <div className="container">
           <div className="row">
               <div className="col-lg-6">
                   <div className="special_offer_item">
                       <img className="img-fluid" src="img/feature-add/special-offer-1.jpg" alt="" />
                       <div className="hover_text">
                           <h4>Special Offer</h4>
                           <h5>Young Couple</h5>
                           <a className="shop_now_btn" href="#">Shop Now</a>
                       </div>
                   </div>
               </div>
               <div className="col-lg-6">
                   <div className="special_offer_item2">
                       <img className="img-fluid" src="img/feature-add/special-offer-2.jpg" alt="" />
                       <div className="hover_text">
                           <h5>girls bag</h5>
                           <a className="shop_now_btn" href="#">Shop Now</a>
                       </div>
                   </div>
               </div>
           </div>
       </div>
   </section>

   <section className="fillter_latest_product">
       <div className="container">
           <div className="single_c_title">
               <h2>Our Latest Product</h2>
           </div>
           <div className="fillter_l_p_inner">
               <ul className="fillter_l_p">
                   <li className="active" data-filter="*"><a href="#">men's</a></li>
                   <li data-filter=".woman"><a href="#">Woman</a></li>
                   <li data-filter=".acc"><a href="#">Accessories</a></li>
                   <li data-filter=".shoes"><a href="#">Shoes</a></li>
                   <li data-filter=".bags"><a href="#">Bags</a></li>
               </ul>
               <div className="row isotope_l_p_inner">
                   <div className="col-lg-3 col-md-4 col-sm-6 woman bags">
                       <div className="l_product_item">
                           <div className="l_p_img">
                               <img className="img-fluid" src="img/product/l-product-1.jpg" alt="" />
                           </div>
                           <div className="l_p_text">
                               <ul>
                                   <li className="p_icon"><a href="#"><i className="icon_piechart"></i></a></li>
                                   <li><a className="add_cart_btn" href="#">Add To Cart</a></li>
                                   <li className="p_icon"><a href="#"><i className="icon_heart_alt"></i></a></li>
                               </ul>
                               <h4>Womens Libero</h4>
                               <h5><del>$45.50</del>  $40</h5>
                           </div>
                       </div>
                   </div>
                   <div className="col-lg-3 col-md-4 col-sm-6 acc shoes">
                       <div className="l_product_item">
                           <div className="l_p_img">
                               <img className="img-fluid" src="img/product/l-product-2.jpg" alt="" />
                           </div>
                           <div className="l_p_text">
                               <ul>
                                   <li className="p_icon"><a href="#"><i className="icon_piechart"></i></a></li>
                                   <li><a className="add_cart_btn" href="#">Add To Cart</a></li>
                                   <li className="p_icon"><a href="#"><i className="icon_heart_alt"></i></a></li>
                               </ul>
                               <h4>Womens Libero</h4>
                               <h5><del>$45.50</del>  $40</h5>
                           </div>
                       </div>
                   </div>
                   <div className="col-lg-3 col-md-4 col-sm-6 woman shoes">
                       <div className="l_product_item">
                           <div className="l_p_img">
                               <img className="img-fluid" src="img/product/l-product-3.jpg" alt="" />
                           </div>
                           <div className="l_p_text">
                               <ul>
                                   <li className="p_icon"><a href="#"><i className="icon_piechart"></i></a></li>
                                   <li><a className="add_cart_btn" href="#">Add To Cart</a></li>
                                   <li className="p_icon"><a href="#"><i className="icon_heart_alt"></i></a></li>
                               </ul>
                               <h4>Womens Libero</h4>
                               <h5><del>$45.50</del>  $40</h5>
                           </div>
                       </div>
                   </div>
                   <div className="col-lg-3 col-md-4 col-sm-6 woman shoes">
                       <div className="l_product_item">
                           <div className="l_p_img">
                               <img className="img-fluid" src="img/product/l-product-4.jpg" alt="" />
                           </div>
                           <div className="l_p_text">
                               <ul>
                                   <li className="p_icon"><a href="#"><i className="icon_piechart"></i></a></li>
                                   <li><a className="add_cart_btn" href="#">Add To Cart</a></li>
                                   <li className="p_icon"><a href="#"><i className="icon_heart_alt"></i></a></li>
                               </ul>
                               <h4>Womens Libero</h4>
                               <h5><del>$45.50</del>  $40</h5>
                           </div>
                       </div>
                   </div>
                   <div className="col-lg-3 col-md-4 col-sm-6 woman shoes">
                       <div className="l_product_item">
                           <div className="l_p_img">
                               <img className="img-fluid" src="img/product/l-product-5.jpg" alt="" />
                           </div>
                           <div className="l_p_text">
                               <ul>
                                   <li className="p_icon"><a href="#"><i className="icon_piechart"></i></a></li>
                                   <li><a className="add_cart_btn" href="#">Add To Cart</a></li>
                                   <li className="p_icon"><a href="#"><i className="icon_heart_alt"></i></a></li>
                               </ul>
                               <h4>Womens Libero</h4>
                               <h5><del>$45.50</del>  $40</h5>
                           </div>
                       </div>
                   </div>
                   <div className="col-lg-3 col-md-4 col-sm-6 acc shoes bags">
                       <div className="l_product_item">
                           <div className="l_p_img">
                               <img className="img-fluid" src="img/product/l-product-6.jpg" alt="" />
                           </div>
                           <div className="l_p_text">
                               <ul>
                                   <li className="p_icon"><a href="#"><i className="icon_piechart"></i></a></li>
                                   <li><a className="add_cart_btn" href="#">Add To Cart</a></li>
                                   <li className="p_icon"><a href="#"><i className="icon_heart_alt"></i></a></li>
                               </ul>
                               <h4>Womens Libero</h4>
                               <h5><del>$45.50</del>  $40</h5>
                           </div>
                       </div>
                   </div>
                   <div className="col-lg-3 col-md-4 col-sm-6 acc bags">
                       <div className="l_product_item">
                           <div className="l_p_img">
                               <img className="img-fluid" src="img/product/l-product-7.jpg" alt="" />
                           </div>
                           <div className="l_p_text">
                               <ul>
                                   <li className="p_icon"><a href="#"><i className="icon_piechart"></i></a></li>
                                   <li><a className="add_cart_btn" href="#">Add To Cart</a></li>
                                   <li className="p_icon"><a href="#"><i className="icon_heart_alt"></i></a></li>
                               </ul>
                               <h4>Womens Libero</h4>
                               <h5><del>$45.50</del>  $40</h5>
                           </div>
                       </div>
                   </div>
                   <div className="col-lg-3 col-md-4 col-sm-6 acc bags">
                       <div className="l_product_item">
                           <div className="l_p_img">
                               <img className="img-fluid" src="img/product/l-product-8.jpg" alt="" />
                           </div>
                           <div className="l_p_text">
                               <ul>
                                   <li className="p_icon"><a href="#"><i className="icon_piechart"></i></a></li>
                                   <li><a className="add_cart_btn" href="#">Add To Cart</a></li>
                                   <li className="p_icon"><a href="#"><i className="icon_heart_alt"></i></a></li>
                               </ul>
                               <h4>Womens Libero</h4>
                               <h5><del>$45.50</del>  $40</h5>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
       </div>
   </section>

   <section className="product_listing_area">
       <div className="container">
           <div className="row p_listing_inner">
               <div className="col-lg-4">
                   <div className="row">
                       <div className="col-lg-6 col-sm-8">
                           <div className="p_list_text">
                               <h3>Men</h3>
                               <ul>
                                   <li><a href="#">Down Jackets</a></li>
                                   <li><a href="#">Hoodies</a></li>
                                   <li><a href="#">Suits</a></li>
                                   <li><a href="#">Jeans</a></li>
                                   <li><a href="#">Casual Pants</a></li>
                                   <li><a href="#">Sunglass</a></li>
                               </ul>
                           </div>
                       </div>
                       <div className="col-lg-6 col-sm-4">
                           <div className="p_list_img">
                               <img src="img/product/p-categories-list/product-l-1.jpg" alt="" />
                           </div>
                       </div>
                   </div>
               </div>
               <div className="col-lg-4">
                   <div className="row">
                       <div className="col-lg-6 col-sm-8">
                           <div className="p_list_text">
                               <h3>Women</h3>
                               <ul>
                                   <li><a href="#">Down Jackets</a></li>
                                   <li><a href="#">Hoodies</a></li>
                                   <li><a href="#">Suits</a></li>
                                   <li><a href="#">Jeans</a></li>
                                   <li><a href="#">Casual Pants</a></li>
                                   <li><a href="#">Sunglass</a></li>
                               </ul>
                           </div>
                       </div>
                       <div className="col-lg-6 col-sm-4">
                           <div className="p_list_img">
                               <img src="img/product/p-categories-list/product-l-2.jpg" alt="" />
                           </div>
                       </div>
                   </div>
               </div>
               <div className="col-lg-4">
                   <div className="row">
                       <div className="col-lg-6 col-sm-8">
                           <div className="p_list_text">
                               <h3>Accessories</h3>
                               <ul>
                                   <li><a href="#">Down Jackets</a></li>
                                   <li><a href="#">Hoodies</a></li>
                                   <li><a href="#">Suits</a></li>
                                   <li><a href="#">Jeans</a></li>
                                   <li><a href="#">Casual Pants</a></li>
                                   <li><a href="#">Sunglass</a></li>
                               </ul>
                           </div>
                       </div>
                       <div className="col-lg-6 col-sm-4">
                           <div className="p_list_img">
                               <img src="img/product/p-categories-list/product-l-3.jpg" alt="" />
                           </div>
                       </div>
                   </div>
               </div>
           </div>
       </div>
   </section>

   <section className="feature_product_area">
       <div className="container">
           <div className="f_p_inner">
               <div className="row">
                   <div className="col-lg-3">
                       <div className="f_product_left">
                           <div className="s_m_title">
                               <h2>Featured Products</h2>
                           </div>
                           <div className="f_product_inner">
                               <div className="media">
                                   <div className="d-flex">
                                       <img src="img/product/featured-product/f-p-1.jpg" alt="" />
                                   </div>
                                   <div className="media-body">
                                       <h4>Oxford Shirt</h4>
                                       <h5>$45.05</h5>
                                   </div>
                               </div>
                               <div className="media">
                                   <div className="d-flex">
                                       <img src="img/product/featured-product/f-p-2.jpg" alt="" />
                                   </div>
                                   <div className="media-body">
                                       <h4>Puffer Jacket</h4>
                                       <h5>$45.05</h5>
                                   </div>
                               </div>
                               <div className="media">
                                   <div className="d-flex">
                                       <img src="img/product/featured-product/f-p-3.jpg" alt="" />
                                   </div>
                                   <div className="media-body">
                                       <h4>Leather Bag</h4>
                                       <h5>$45.05</h5>
                                   </div>
                               </div>
                               <div className="media">
                                   <div className="d-flex">
                                       <img src="img/product/featured-product/f-p-4.jpg" alt="" />
                                   </div>
                                   <div className="media-body">
                                       <h4>Casual Shoes</h4>
                                       <h5>$45.05</h5>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>
                   <div className="col-lg-9">
                       <div className="fillter_slider_inner">
                           <ul className="portfolio_filter">
                               <li className="active" data-filter="*"><a href="#">men's</a></li>
                               <li data-filter=".woman"><a href="#">Woman</a></li>
                               <li data-filter=".shoes"><a href="#">Shoes</a></li>
                               <li data-filter=".bags"><a href="#">Bags</a></li>
                           </ul>
                           <div className="fillter_slider owl-carousel">
                               <div className="item shoes">
                                   <div className="fillter_product_item bags">
                                       <div className="f_p_img">
                                           <img src="img/product/fillter-product/f-product-1.jpg" alt="" />
                                           <h5 className="sale">Sale</h5>
                                       </div>
                                       <div className="f_p_text">
                                           <h5>Nike Max Air Vapor Power</h5>
                                           <h4>$45.05</h4>
                                       </div>
                                   </div>
                               </div>
                               <div className="item woman shoes bags">
                                   <div className="fillter_product_item">
                                       <div className="f_p_img">
                                           <img src="img/product/fillter-product/f-product-2.jpg" alt="" />
                                           <h5 className="new">New</h5>
                                       </div>
                                       <div className="f_p_text">
                                           <h5>Fossil Watch</h5>
                                           <h4><del>$250</del> $110</h4>
                                       </div>
                                   </div>
                               </div>
                               <div className="item woman shoes">
                                   <div className="fillter_product_item">
                                       <div className="f_p_img">
                                           <img src="img/product/fillter-product/f-product-3.jpg" alt="" />
                                           <h5 className="discount">-10%</h5>
                                       </div>
                                       <div className="f_p_text">
                                           <h5>High Heel</h5>
                                           <h4>$45.05</h4>
                                       </div>
                                   </div>
                               </div>
                               <div className="item shoes">
                                   <div className="fillter_product_item bags">
                                       <div className="f_p_img">
                                           <img src="img/product/fillter-product/f-product-1.jpg" alt="" />
                                           <h5 className="sale">Sale</h5>
                                       </div>
                                       <div className="f_p_text">
                                           <h5>Nike Max Air Vapor Power</h5>
                                           <h4>$45.05</h4>
                                       </div>
                                   </div>
                               </div>
                               <div className="item woman shoes bags">
                                   <div className="fillter_product_item">
                                       <div className="f_p_img">
                                           <img src="img/product/fillter-product/f-product-2.jpg" alt="" />
                                           <h5 className="new">New</h5>
                                       </div>
                                       <div className="f_p_text">
                                           <h5>Fossil Watch</h5>
                                           <h4><del>$250</del> $110</h4>
                                       </div>
                                   </div>
                               </div>
                               <div className="item woman shoes">
                                   <div className="fillter_product_item">
                                       <div className="f_p_img">
                                           <img src="img/product/fillter-product/f-product-3.jpg" alt="" />
                                           <h5 className="discount">-10%</h5>
                                       </div>
                                       <div className="f_p_text">
                                           <h5>High Heel</h5>
                                           <h4>$45.05</h4>
                                       </div>
                                   </div>
                               </div>
                               <div className="item shoes">
                                   <div className="fillter_product_item bags">
                                       <div className="f_p_img">
                                           <img src="img/product/fillter-product/f-product-1.jpg" alt="" />
                                           <h5 className="sale">Sale</h5>
                                       </div>
                                       <div className="f_p_text">
                                           <h5>Nike Max Air Vapor Power</h5>
                                           <h4>$45.05</h4>
                                       </div>
                                   </div>
                               </div>
                               <div className="item woman shoes bags">
                                   <div className="fillter_product_item">
                                       <div className="f_p_img">
                                           <img src="img/product/fillter-product/f-product-2.jpg" alt="" />
                                           <h5 className="new">New</h5>
                                       </div>
                                       <div className="f_p_text">
                                           <h5>Fossil Watch</h5>
                                           <h4><del>$250</del> $110</h4>
                                       </div>
                                   </div>
                               </div>
                               <div className="item woman shoes">
                                   <div className="fillter_product_item">
                                       <div className="f_p_img">
                                           <img src="img/product/fillter-product/f-product-3.jpg" alt="" />
                                           <h5 className="discount">-10%</h5>
                                       </div>
                                       <div className="f_p_text">
                                           <h5>High Heel</h5>
                                           <h4>$45.05</h4>
                                       </div>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
       </div>
   </section>

   <section className="from_blog_area">
       <div className="container">
           <div className="from_blog_inner">
               <div className="c_main_title">
                   <h2>From The Blog</h2>
               </div>
               <div className="row">
                   <div className="col-lg-4 col-sm-6">
                       <div className="from_blog_item">
                           <img className="img-fluid" src="img/blog/from-blog/f-blog-1.jpg" alt="" />
                           <div className="f_blog_text">
                               <h5>fashion</h5>
                               <p>Neque porro quisquam est qui dolorem ipsum</p>
                               <h6>21.09.2017</h6>
                           </div>
                       </div>
                   </div>
                   <div className="col-lg-4 col-sm-6">
                       <div className="from_blog_item">
                           <img className="img-fluid" src="img/blog/from-blog/f-blog-2.jpg" alt=""  />
                           <div className="f_blog_text">
                               <h5>fashion</h5>
                               <p>Neque porro quisquam est qui dolorem ipsum</p>
                               <h6>21.09.2017</h6>
                           </div>
                       </div>
                   </div>
                   <div className="col-lg-4 col-sm-6">
                       <div className="from_blog_item">
                           <img className="img-fluid" src="img/blog/from-blog/f-blog-3.jpg" alt="" />
                           <div className="f_blog_text">
                               <h5>fashion</h5>
                               <p>Neque porro quisquam est qui dolorem ipsum</p>
                               <h6>21.09.2017</h6>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
       </div>
   </section>
      </div>
    )
  }
}

export default Home
