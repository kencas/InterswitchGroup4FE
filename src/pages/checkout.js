import React, { Fragment } from "react";

const Checkout = ({ cart, totalPrice, cartLength }) => {
  return (
    <Fragment>
      <div style={{ marginTop: "150px" }}>
        {cart.map((item, index) => (
          <li
            key={index}
            className="checkout"
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "10px 25px",
              alignItems: "center",
              boxSizing: "border-box"
            }}
          >
            <h3>{item.name}</h3>
            <img
              src={item.productImg}
              alt={item.name}
              style={{ height: "50px", width: "50px" }}
            />
            <p>${item.price}</p>
          </li>
        ))}
        <hr />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "10px 10%",
            alignItems: "center"
          }}
        >
          <span style={{ fontWeight: 'bold' }}>Total Price</span>
          <span  className="boldItem">{cartLength} items </span>
          <span className="boldItem">${totalPrice}</span>
          

        </div>
      </div>
    </Fragment>
  );
};

export default Checkout