import React, { useContext } from "react";
import "./Subtotal.scss";
import { useNavigate } from "react-router-dom";
import CartContext from "../../Context/CartContext";
const Subtotal = () => {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <div className="all-pro">
      <div>
        <span>Subtotal </span>
        <span>({cart.length}) items :</span>
        <span>{cart.reduce((acc, cur) => acc + cur.price, 0)}</span>
      </div>
      <div>
        <input type="checkbox" id="label" />
        <label for="label">This order contains a gift</label>
        <button onClick={() => navigate("/payment")}>
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Subtotal;
