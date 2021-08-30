import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addCart(item) {
    const foundId = cart.find(itemCart => itemCart.id === item.id);
    console.log(foundId);
    if (foundId === undefined) {
      const newCart = cart;
      newCart.push(item);

      setCart([...newCart]);
    }
  }

  function removeCart(idItem) {
    let newCart = cart.filter((item) => item.id !== idItem);

    setCart([...newCart]);
  }

  const store = {
    addCart,
    removeCart,
    cart
  }

  return (
    <CartContext.Provider value={store}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext);
  const {
    cart,
    addCart,
    removeCart
  } = context;

  return {
    cart,
    addCart,
    removeCart
  }

}