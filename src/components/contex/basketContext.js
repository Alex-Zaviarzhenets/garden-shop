

// src/context/BasketContext.js
import React, { createContext, useState } from 'react';

// Создание контекста корзины
export const BasketContext = createContext();

// Привидение корзины
export const BasketProvider = ({ children }) => {
  const [basket, setBasket] = useState([]);

  // Добавление товара в корзину
  const addItemToBasket = (item) => {
    setBasket((prevBasket) => [...prevBasket, item]);
  };

  return (
    <BasketContext.Provider value={{ basket, addItemToBasket }}>
      {children}
    </BasketContext.Provider>
  );
};
