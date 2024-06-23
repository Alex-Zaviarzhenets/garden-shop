
import React from "react";
import styles from "./index.module.scss";
import { BASE_URL } from "../../constants";
import { Link } from "react-router-dom";
import { getDiscountPercent } from "../../utils/getDiscountPercent";

// Компонент карточки товара
export const CardItem = ({
  price, // цена
  title, // название
  image, // изображение
  discont_price, // цена со скидкой
  id // идентификатор
}) => {
  const hasDiscount = discont_price && discont_price < price;

  return (
    <div className={styles.wrapper}>
      <div className={styles.imgWrapper}>
        {hasDiscount && (
          <div className={styles.discount}>
            {getDiscountPercent(price, discont_price)}%
          </div>
        )}
        <Link to={`/product/${id}`}>
          <img
            src={BASE_URL + image}
            alt="card"
            className={styles.cardImage}
          />
        </Link>
      </div>
      <div className={styles.info}>
        <div className={styles.description}>{title}</div>
        <div className={styles.prices}>
          {hasDiscount ? (
            <>
              <div className={styles.newPrice}>${discont_price}</div>
              <div className={styles.oldPrice}>${price}</div>
            </>
          ) : (
            <div className={styles.newPrice}>${price}</div>
          )}
        </div>
      </div>
    </div>
  );
}
