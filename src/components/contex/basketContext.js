// src/context/BasketContext.js
import React, { createContext, useState } from 'react';

export const BasketContext = createContext();

export const BasketProvider = ({ children }) => {
  const [basket, setBasket] = useState([]);

  const addItemToBasket = (item) => {
    setBasket((prevBasket) => [...prevBasket, item]);
  };

  return (
    <BasketContext.Provider value={{ basket, addItemToBasket }}>
      {children}
    </BasketContext.Provider>
  );
};
