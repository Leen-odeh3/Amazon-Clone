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
    console.log(cart);
  
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
