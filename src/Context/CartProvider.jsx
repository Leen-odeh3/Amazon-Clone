import React, { Children, useState  } from "react";
import CartContext from "./CartContext";

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

 
  const addToCart = (item) => {

    const newCartItem = {
      id: item.id,
      title: item.title,
      image: item.image,
      price: item.price,
      rating:item.rating
    };
    
  
  
    setCart((prev)=>[...prev,newCartItem]);
 
  };

  const remove = (id) => {
    let removed = false;
    const updatedCart = cart.filter((e) => {
      if (e.id === id && !removed) {
        removed = true;
        return false;
      }
      return true;
    });
    setCart(updatedCart);    
  };


  return (
    <CartContext.Provider value={{ cart, addToCart, remove }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
