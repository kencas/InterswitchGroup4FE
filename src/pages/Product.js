import React from "react";
import {products} from "../Component/productItems"


const Product = ({addToCart}) =>{
  const product = products.map((prod, index)=>{
      return(
        <div key={index} class="col-sm-6 col-lg-4">
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
    <section class="product_section layout_padding">
    <div class="container">
      <div class="heading_container heading_center">
        <h2>
          Our Products
        </h2>
      </div>
      <div class="row">
        {product}
      </div>
    </div>
  </section>
  )
}

export default Product