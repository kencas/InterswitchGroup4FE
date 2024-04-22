import React from "react"
import slider from "../assets/images/slider-img.png"
import {products} from "../Component/productItems"
import { Fragment } from "react"

const Landing = ({addToCart}) =>{
    const product = products.map((prod, index)=>{
        return(
          <div key={index} className="col-sm-6 col-lg-4">
            <div className="box">
              <div className="img-box">
                <img src={prod.productImg} alt=""/>
                <button onClick={()=>{addToCart(prod)}} className="add_cart_btn">
                  <span>
                    Add To Cart
                  </span>
                </button>
              </div>
              <div className="detail-box">
                <h5>
                 {prod.name}
                </h5>
                <div className="product_info">
                  <h5>
                    <span>$</span> {prod.price}
                  </h5>
                  <div className="star_container">
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
    })
    return(
    <Fragment>
    <section className="slider_section ">
      <div id="customCarousel1" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="container ">
              <div className="row">
                <div className="col-md-6">
                  <div className="detail-box">
                    <h1>
                      Welcome to our shop
                    </h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste quam velit saepe dolorem deserunt quo quidem ad optio.
                    </p>
                    <a href="">
                      Read More
                    </a>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="img-box">
                    <img src={slider} alt=""/>
                  </div>
                </div>
              </div>
            </div>
          </div> 
        </div>
      </div>
    </section>
    <section className="product_section layout_padding">
    <div className="container">
      <div className="heading_container heading_center">
        <h2>
          Our Products
        </h2>
      </div>
      <div className="row">
        {product}
      </div>
    </div>
  </section>
    </Fragment>
    )
}

export default Landing