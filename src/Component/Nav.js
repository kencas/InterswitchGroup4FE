import React from "react";
import { Link } from "react-router-dom";

const Nav = ({cartLength}) =>{
    return(
    <header className="header_section" style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000 }}>
      <div className="header_top">
        <div className="container-fluid">
          <div className="top_nav_container">
            <from className="search_form">
              <input type="text" className="form-control" placeholder="Search here..." />
              <button className="" type="submit">
                <i className="fa fa-search" aria-hidden="true"></i>
              </button>
            </from>
            <div className="user_option_box">
              <Link to={"/signin"} className="account-link">
                <i className="fa fa-user" aria-hidden="true"></i>
                <span>
                  My Account
                </span>
              </Link>
              <Link to={"/checkout"} className="cart-link">
                <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                <span>
                  Cart ({cartLength})
                </span>
              </Link>
            </div>
          </div>

        </div>
      </div>
      <div className="header_bottom">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg custom_nav-container ">

            <Link className="navbar-brand" to={"/"}>
              <span>
                Multi-Tenant 
              </span>
            </Link>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className=""> </span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ">
                <li className="nav-item active">
                  <Link className="nav-link" to={"/"}>Home </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"#"}> About</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/products"}>Category</Link>
                </li>
              
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
    )
}

export default Nav