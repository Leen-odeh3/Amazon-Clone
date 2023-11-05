import React from "react";
import { Link } from "react-router-dom";

import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img className="header-logo" src="/header-logo.png" alt="logo-img" />
      </Link>
      <div className="header-search">
        <input className="header-searchInput" type="text" />
        <i className="bi bi-search header-searchIcon" style={{ Color: "black" }}></i>
      </div>
      <div className="header-nav">
        <Link to="/login">
          <div className="header-option">
            <span className="header-optionLineOne">Hello Guest</span>
            <span className="header-optionLineTwo">"Sign In"</span>
          </div>
        </Link>
        <Link to="/orders">
          <div className="header-option">
            <span className="header-optionLineOne">Returns</span>
            <span className="header-optionLineTwo">& Orders</span>
          </div>
        </Link>
        <div className="header-option">
          <span className="header-optionLineOne">Your</span>
          <span className="header-optionLineTwo">Prime</span>
        </div>
        <Link to="/checkout" >
          <div className="header-optionBasket"  >
            <i className="bi bi-cart4" style={{fontSize:"24px" }} ></i>
            <span className="header-optionLineTwo header-basketCount" style={{marginLeft:"10px",marginRight:"10px"}}>4</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
