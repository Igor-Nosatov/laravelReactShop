import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

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
    const { projects } = this.state
    return (
     <div>

<section className="product_details_area">
<div className="container">
 <div className="row">
     <div className="col-lg-4">
         <div className="product_details_slider">
             <div id="product_slider" className="rev_slider" data-version="5.3.1.6">
                 <ul>
                     <li data-index="rs-137221490" data-transition="scaledownfrombottom" data-slotamount="7"  data-easein="Power3.easeInOut"   data-easeout="Power3.easeInOut" data-masterspeed="1500"  data-thumb="img/product/product-details/p-details-tab-1.jpg" data-rotate="0"  data-fstransition="fade" data-fsmasterspeed="1500"   data-fsslotamount="7" data-saveperformance="off"  data-title="Ishtar X Tussilago" data-param1="25/08/2015" data-description="" />
                         <img src="img/product/product-details/p-details-big-1.jpg"  alt="" data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" data-bgparallax="5" className="rev-slidebg" data-no-retina />
                     </li>
                     <li data-index="rs-136228343" data-transition="scaledownfrombottom" data-slotamount="7"  data-easein="Power3.easeInOut" data-easeout="Power3.easeInOut" data-masterspeed="1500"  data-thumb="img/product/product-details/p-details-tab-2.jpg"  data-rotate="0"  data-saveperformance="off"  data-title="Los Angeles" data-param1="13/08/2015" data-description="" />
                         <img src="img/product/product-details/p-details-big-1.jpg"  alt="" data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" data-bgparallax="5" className="rev-slidebg" data-no-retina  />
                     </li>
                     <li data-index="rs-135960434" data-transition="scaledownfrombottom" data-slotamount="7"  data-easein="Power3.easeInOut" data-easeout="Power3.easeInOut" data-masterspeed="1500"  data-thumb="img/product/product-details/p-details-tab-3.jpg"  data-rotate="0"  data-saveperformance="off"  data-title="The Colors of Feelings" data-param1="11/08/2015" data-description="">
                         <img src="img/product/product-details/p-details-big-1.jpg"  alt="" data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" data-bgparallax="5" className="rev-slidebg" data-no-retina />
                     </li>
                     <li data-index="rs-134008155" data-transition="scaledownfrombottom" data-slotamount="7"  data-easein="Power3.easeInOut" data-easeout="Power3.easeInOut" data-masterspeed="1500"  data-thumb="img/product/product-details/p-details-tab-4.jpg"  data-rotate="0"  data-saveperformance="off"  data-title="Powerful Iceland" data-param1="20/07/2015" data-description="">
                        <img src="img/product/product-details/p-details-big-1.jpg"  alt="" data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" data-bgparallax="5" className="rev-slidebg" data-no-retina />
                     </li>
                     <li data-index="rs-134774977" data-transition="scaledownfrombottom" data-slotamount="7"  data-easein="Power3.easeInOut" data-easeout="Power3.easeInOut" data-masterspeed="1500"  data-thumb="img/product/product-details/p-details-tab-1.jpg"  data-rotate="0"  data-saveperformance="off"  data-title="Paris Poetry" data-param1="28/07/2015" data-description="">
                         <img src="img/product/product-details/p-details-big-1.jpg"  alt="" data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" data-bgparallax="5" className="rev-slidebg" data-no-retina />
                     </li>
                     <li data-index="rs-134208766" data-transition="scaledownfrombottom" data-slotamount="7"  data-easein="Power3.easeInOut" data-easeout="Power3.easeInOut" data-masterspeed="1500"  data-thumb="img/product/product-details/p-details-tab-2.jpg"  data-rotate="0"  data-saveperformance="off"  data-title="Creativity Room - New Fubiz 2015" data-param1="22/07/2015" data-description="">
                         <img src="img/product/product-details/p-details-big-1.jpg"  alt="" data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" data-bgparallax="5" className="rev-slidebg" data-no-retina  />
                     </li>
                     <li data-index="rs-132884121" data-transition="scaledownfrombottom" data-slotamount="7"  data-easein="Power3.easeInOut" data-easeout="Power3.easeInOut" data-masterspeed="1500"  data-thumb="img/product/product-details/p-details-tab-3.jpg"  data-rotate="0"  data-saveperformance="off"  data-title="Animated GIFS - New Fubiz 2015" data-param1="07/07/2015" data-description="">
                         <img src="img/product/product-details/p-details-big-1.jpg"  alt="" data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" data-bgparallax="5" className="rev-slidebg" data-no-retina  />
                     </li>
                     <li data-index="rs-130740141" data-transition="scaledownfrombottom" data-slotamount="7"  data-easein="Power3.easeInOut" data-easeout="Power3.easeInOut" data-masterspeed="1500"  data-thumb="img/product/product-details/p-details-tab-4.jpg"  data-rotate="0"  data-saveperformance="off"  data-title="Naive New Beaters - Run Away" data-param1="15/06/2015" data-description="">
                         <img src="img/product/product-details/p-details-big-1.jpg"  alt="" data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" data-bgparallax="5" className="rev-slidebg" data-no-retina  />
                     </li>
                 </ul>
             </div>
         </div>
     </div>
     <div className="col-lg-8">
         <div className="product_details_text">
             <h3>Nike Flex Run Tracksuit</h3>
             <ul className="p_rating">
                 <li><a href="#"><i className="fa fa-star"></i></a></li>
                 <li><a href="#"><i className="fa fa-star"></i></a></li>
                 <li><a href="#"><i className="fa fa-star"></i></a></li>
                 <li><a href="#"><i className="fa fa-star"></i></a></li>
                 <li><a href="#"><i className="fa fa-star"></i></a></li>
             </ul>
             <div className="add_review">
                 <a href="#">5 Reviews</a>
                 <a href="#">Add your review</a>
             </div>
             <h6>Available In <span>Stock</span></h6>
             <h4>$45.05</h4>
             <p>Curabitur semper varius lectus sed consequat. Nam accumsan dapibus sem, sed lobortis nisi porta vitae. Ut quam tortor, facilisis nec laoreet consequat, malesuada a massa. Proin pretium tristique leo et imperdiet.</p>
             <div className="p_color">
                 <h4 className="p_d_title">color <span>*</span></h4>
                 <ul className="color_list">
                     <li><a href="#"></a></li>
                     <li><a href="#"></a></li>
                     <li><a href="#"></a></li>
                     <li><a href="#"></a></li>
                     <li><a href="#"></a></li>
                     <li><a href="#"></a></li>
                 </ul>
             </div>
             <div className="p_color">
                 <h4 className="p_d_title">size <span>*</span></h4>
                 <select className="selectpicker">
                     <option>Select your size</option>
                     <option>Select your size M</option>
                     <option>Select your size XL</option>
                 </select>
             </div>
             <div className="quantity">
                 <div className="custom">
                     <button onclick="var result = document.getElementById('sst'); var sst = result.value; if( !isNaN( sst ) &amp;&amp; sst > 0 ) result.value--;return false;" className="reduced items-count" type="button"><i className="icon_minus-06"></i></button>
                     <input type="text" name="qty" id="sst" maxlength="12" value="01" title="Quantity:" className="input-text qty"  />
                     <button onclick="var result = document.getElementById('sst'); var sst = result.value; if( !isNaN( sst )) result.value++;return false;" className="increase items-count" type="button"><i className="icon_plus"></i></button>
                 </div>
                 <a className="add_cart_btn" href="#">add to cart</a>
             </div>
             <div className="shareing_icon">
                 <h5>share :</h5>
                 <ul>
                     <li><a href="#"><i className="social_facebook"></i></a></li>
                     <li><a href="#"><i className="social_twitter"></i></a></li>
                     <li><a href="#"><i className="social_pinterest"></i></a></li>
                     <li><a href="#"><i className="social_instagram"></i></a></li>
                     <li><a href="#"><i className="social_youtube"></i></a></li>
                 </ul>
             </div>
         </div>
     </div>
 </div>
</div>
</section>

<section className="product_description_area">
<div className="container">
 <nav className="tab_menu">
     <div className="nav nav-tabs" id="nav-tab" role="tablist">
         <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Product Description</a>
         <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Reviews (1)</a>
         <a className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Tags</a>
         <a className="nav-item nav-link" id="nav-info-tab" data-toggle="tab" href="#nav-info" role="tab" aria-controls="nav-info" aria-selected="false">additional information</a>
         <a className="nav-item nav-link" id="nav-gur-tab" data-toggle="tab" href="#nav-gur" role="tab" aria-controls="nav-gur" aria-selected="false">gurantees</a>
     </div>
 </nav>
 <div className="tab-content" id="nav-tabContent">
     <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
         <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.  Emo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.</p>
     </div>
     <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
         <h4>Rocky Ahmed</h4>
         <ul>
             <li><a href="#"><i className="fa fa-star"></i></a></li>
             <li><a href="#"><i className="fa fa-star"></i></a></li>
             <li><a href="#"><i className="fa fa-star"></i></a></li>
             <li><a href="#"><i className="fa fa-star"></i></a></li>
             <li><a href="#"><i className="fa fa-star"></i></a></li>
         </ul>
     </div>
     <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
         <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.  Emo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.</p>
     </div>
     <div className="tab-pane fade" id="nav-info" role="tabpanel" aria-labelledby="nav-info-tab">
         <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.  Emo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.</p>
     </div>
     <div className="tab-pane fade" id="nav-gur" role="tabpanel" aria-labelledby="nav-gur-tab">
         <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.  Emo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.</p>
     </div>
 </div>
</div>
</section>

<section className="related_product_area">
<div className="container">
 <div className="related_product_inner">
     <h2 className="single_c_title">Related Product</h2>
     <div className="row">
         <div className="col-lg-3 col-sm-6">
             <div className="l_product_item">
                 <div className="l_p_img">
                     <img className="img-fluid" src="img/product/related-product/r-product-1.jpg" alt=""  />
                 </div>
                 <div className="l_p_text">
                    <ul>
                         <li className="p_icon"><a href="#"><i className="icon_piechart"></i></a></li>
                         <li><a className="add_cart_btn" href="#">Add To Cart</a></li>
                         <li className="p_icon"><a href="#"><i className="icon_heart_alt"></i></a></li>
                     </ul>
                     <h4>Run Tracksuit</h4>
                     <h5>$85.50</h5>
                 </div>
             </div>
         </div>
         <div className="col-lg-3 col-sm-6">
             <div className="l_product_item">
                 <div className="l_p_img">
                     <img className="img-fluid" src="img/product/related-product/r-product-2.jpg" alt=""  />
                     <h5 className="new">New</h5>
                 </div>
                 <div className="l_p_text">
                    <ul>
                         <li className="p_icon"><a href="#"><i className="icon_piechart"></i></a></li>
                         <li><a className="add_cart_btn" href="#">Add To Cart</a></li>
                         <li className="p_icon"><a href="#"><i className="icon_heart_alt"></i></a></li>
                     </ul>
                     <h4>Nike Men Trouser</h4>
                     <h5><del>$130.50</del>  $110</h5>
                 </div>
             </div>
         </div>
         <div className="col-lg-3 col-sm-6">
             <div className="l_product_item">
                 <div className="l_p_img">
                     <img className="img-fluid" src="img/product/related-product/r-product-3.jpg" alt=""  />
                 </div>
                 <div className="l_p_text">
                    <ul>
                         <li className="p_icon"><a href="#"><i className="icon_piechart"></i></a></li>
                         <li><a className="add_cart_btn" href="#">Add To Cart</a></li>
                         <li className="p_icon"><a href="#"><i className="icon_heart_alt"></i></a></li>
                     </ul>
                     <h4>Nike Track Pants</h4>
                     <h5>$250.00</h5>
                 </div>
             </div>
         </div>
         <div className="col-lg-3 col-sm-6">
             <div className="l_product_item">
                 <div className="l_p_img">
                     <img className="img-fluid" src="img/product/related-product/r-product-4.jpg" alt=""  />
                     <h5 className="sale">Sale</h5>
                 </div>
                 <div className="l_p_text">
                    <ul>
                         <li className="p_icon"><a href="#"><i className="icon_piechart"></i></a></li>
                         <li><a className="add_cart_btn" href="#">Add To Cart</a></li>
                         <li className="p_icon"><a href="#"><i className="icon_heart_alt"></i></a></li>
                     </ul>
                     <h4>Therma Pants</h4>
                     <h5>$45.50</h5>
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
</section>

     </div>
    )
  }
}

export default Home
