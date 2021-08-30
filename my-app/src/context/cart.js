import React, { createContext, useState, useContext, useEffect } from 'react';

const CartContext = createContext();

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [totalValue, setTotalValue] = useState();

  useEffect(() => {
    let value = 0;
    cart.map((item) => {
      return value = value + item.price;
    });
    setTotalValue(value);
  }, [cart])

  function addCart(item) {
    const newCart = cart;
    newCart.push(item);

    setCart([...newCart]);
  }

  function removeCart (idItem){
    let newCart = cart.filter((item) => item.id !== idItem);

    setCart([...newCart]);
  }

  const store = {
    addCart,
    removeCart,
    cart,
    totalValue
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
    removeCart,
    totalValue
  } = context;

  return {
    cart,
    addCart,
    removeCart,
    totalValue
  }

}