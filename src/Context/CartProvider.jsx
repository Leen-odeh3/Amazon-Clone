import React, { Children, useState  } from "react";
import CartContext from "./CartContext";

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

 
  const addToCart = (item) => {
    setCart((prev)=>[...prev,item]);
  
  };

  const remove = (id) => {
    setCart(cart.filter((e) => e.id !== id));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, remove }}>
      {children}
    
    </CartContext.Provider>
  );
};

export default CartProvider;
