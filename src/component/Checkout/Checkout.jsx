
import React from "react";
import { auth } from "./../../Firebase/config.js";
import { useAuthState } from "react-firebase-hooks/auth";
import CheckoutProduct from "./CheckoutProduct";
import "./Checkout.scss";
import {basket} from './../../data/cart.js'
import Subtotal from "../Subtotal/Subtotal.jsx";

const Checkout = () => {
    const [user] = useAuthState(auth);
  return (
    <div className="checkout">
      <div className="checkout-left">
        <img className="checkout-ad" src="/checkoutAd.jpg" alt=""/>
        <div>
          <h3>Hello, {user?.email}</h3>
          <h2 className="checkout-title">Your shopping Basket</h2>
          {basket.length > 0 ? (
            basket.map((item) => (
              <CheckoutProduct
                key={item.id}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))
          ) : (
            <p>
              You have no items in your basket.To buy one or more
              items,click"Add to basket".
            </p>
          )}
        </div>
      </div>
      <div className="checkout-right">
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;