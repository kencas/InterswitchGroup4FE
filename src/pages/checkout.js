import React from "react";

const Checkout = ({cart}) =>{
    return (
        <div style={{marginTop:"150px"}}>
            {cart.map((item, index) => (
              <li key={index} className="checkout" style={{display:"flex"}}>
                <img src={item.productImg} alt={item.name} style={{height:"50px", width:"50px"}} />
                <div>
                  <h3>{item.name}</h3>
                  <p>${item.price}</p>
                </div>
              </li>
            ))}
        </div>
      );
}

export default Checkout