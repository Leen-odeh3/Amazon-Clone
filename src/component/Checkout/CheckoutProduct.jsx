import React, { useContext } from "react";
import starIcon from "./../../images/star.png";
import "./Checkout.scss";
import CartContext from '../../Context/CartContext'

const CheckoutProduct = ({ id, image, title, price, rating }) => {

  const {remove}=useContext(CartContext);
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct-image" src={image}  alt="add-notic"/>
      <div className="checkoutProduct-info">
        <p className="checkoutProduct-title">{title}</p>
        <p className="checkoutProduct-price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct-rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>
                <img src={starIcon} alt="rating-product"/>
              </p>
            ))}
        </div>
       
          <button onClick={()=>remove({id})}>Remove from Basket</button>
        
      </div>
    </div>
  );
};

export default CheckoutProduct;