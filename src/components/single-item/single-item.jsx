import React, { useState, useContext } from "react";
import styles from "./single-item.module.scss";
import { getDiscountPercent } from "../../utils/getDiscountPercent";
import { BasketContext } from '../../components/contex/basketContext';

// Компонент для отображения одного товара
export const SingleItem = ({
  title, // название
  price, // цена
  description, // описание
  image, // изображение
  discont_price, // цена со скидкой
}) => {
  const [count, setCount] = useState(1); // количество товара

  const hasDiscount = discont_price && discont_price < price; // есть ли скидка

  const { addItemToBasket } = useContext(BasketContext); // получение функции добавления товара в корзину

  const handleAddToBasket = () => {
    const item = { title, price, description, image, discont_price, count };
    addItemToBasket(item);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.imgWrapper}>
        <img src={image} className={styles.cardImage} alt="card" />
      </div>

      <div className={styles.allInformationWrapper}>
        <h2 className={styles.title}>{title}</h2>

        <div className={styles.priceContainer}>
          {hasDiscount ? (
            <>
              <span className={styles.currentPrice}>${discont_price}</span>
              <span className={styles.originalPrice}>${price}</span>
            </>
          ) : (
            <span className={styles.currentPrice}>${price}</span>
          )}
          {hasDiscount && (
            <span className={styles.discountBadge}>
              -{getDiscountPercent(price, discont_price)}%
            </span>
          )}
        </div>

        <div className={styles.counterWrapper}>
          
          <div className={styles.counter}>
          <button className={styles.plus} onClick={() => setCount(count + 1)}>
            -
          </button>
          <p className={styles.count}>{count}</p>
          <button
            className={styles.minus}
            onClick={() => count > 1 && setCount(count - 1)    }
          >
            +
          </button>
          </div>

          <button className={styles.addToCart} onClick={handleAddToBasket}>
            Add to cart
          </button>
        </div>

        <div className={styles.description}>
          <h3>Description</h3>
          <p className={styles.txtDescription}>{description}</p>
        </div>
      </div>
    </div>
  );
};
