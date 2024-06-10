import React from "react";
import styles from "./index.module.scss"; // Импортируем стили из файла index.module.scss
import { BASE_URL } from "../../constants"; // Импортируем константу BASE_URL из файла constants
import { Link } from "react-router-dom"; // Импортируем компонент Link из библиотеки react-router-dom
import { getDiscountPercent } from "../../utils/getDiscountPercent"; // Импортируем функцию getDiscountPercent из файла getDiscountPercent

export const CardItem = ({
  price, // Цена товара
  title, // Название товара
  image, // Изображение товара
  discont_price, // Цена товара со скидкой
  id // Идентификатор товара
}) => {
  const hasDiscount = discont_price && discont_price < price; // Проверяем, есть ли скидка на товар

  return (
    <Link to={`/product/${id}`}> {/* Создаем ссылку с адресом /product/{id} */}
      <div className={styles.wrapper}> {/* Создаем компонент wrapper */}
        <div className={styles.header}> {/* Создаем компонент header */}
          {hasDiscount && (
            <div className={styles.discount}> {/* Создаем компонент discount */}
              {getDiscountPercent(price, discont_price)}% {/* Вызываем функцию getDiscountPercent и отображаем процент скидки */}
            </div>
          )}
          <img src={BASE_URL + image} alt="card" className={styles.cardImage} /> {/* Отображаем изображение товара */}
        </div>
        <div className={styles.info}> {/* Создаем компонент info */}
          <div className={styles.description}>{title}</div> {/* Отображаем название товара */}
          <div className={styles.prices}> {/* Создаем компонент prices */}
            {hasDiscount ? (
              <>
                <div className={styles.newPrice}>${discont_price}</div> {/* Отображаем новую цену товара со скидкой */}
                <div className={styles.oldPrice}>{price}</div> {/* Отображаем старую цену товара */}
              </>
            ) : (
              <div className={styles.newPrice}>${price}</div> )}{/* Отображаем новую цену товара без скидки */}
          </div>
        </div>
      </div>
    </Link>
  );
}
