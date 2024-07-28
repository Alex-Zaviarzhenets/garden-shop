import React, { createContext, useState, useEffect } from 'react';

// Создание контекста корзины
export const BasketContext = createContext();

// Провайдер корзины
export const BasketProvider = ({ children }) => {
  // Извлечение корзины из localStorage при первой загрузке
  const initialBasket = JSON.parse(localStorage.getItem('basket')) || [];
  const [basket, setBasket] = useState(initialBasket);

  // Обновление localStorage каждый раз, когда корзина меняется
  useEffect(() => {
    localStorage.setItem('basket', JSON.stringify(basket));
  }, [basket]);

  // Добавление товара в корзину
  const addItemToBasket = (item) => {
    setBasket((prevBasket) => [...prevBasket, item]);
  };

  console.log(basket);

  return (
    <BasketContext.Provider value={{ basket, setBasket, addItemToBasket }}>
      {children}
    </BasketContext.Provider>
  );
};
