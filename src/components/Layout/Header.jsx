import React from "react";
import "./Header.css";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <div className="header-main">
      <div className="header-top">
        <h1 className="header-title">ReactMeals</h1>
        <div className="header-cart">
          <div>
            <FaShoppingCart />
          </div>
          <h4>
            <b>Your Cart</b>
          </h4>
          <div className="cart-count">0</div>
        </div>
      </div>
      <div className="header-image">
        <img className="image" src="HeaderImage.jpg" />
      </div>
    </div>
  );
};

export default Header;
