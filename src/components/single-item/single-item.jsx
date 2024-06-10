import React, { useState } from "react";
import styles from "./single-item.module.scss";
import { BASE_URL } from "../../constants";
import { getDiscountPercent } from "../../utils/getDiscountPercent";


export const SingleItem = ({
  title,
  price,
  description,
  image,
  discont_price,
  
}) => {
  const [count, setCount] = useState(1);

  const hasDiscount = discont_price && discont_price < price;

  return (

    <div className={styles.wrapper}>

      <div className={styles.imgWrapper}>
        <img src={image} className={styles.cardImage} alt="card" />
      </div>


      <div className={styles.allInformationWrapper}>
        <h2 className={styles.title}>{title}</h2>

        <div className={styles.priceContainer}>
          {hasDiscount ? (<><span className={styles.currentPrice}>${discont_price}</span>
          <span className={styles.originalPrice}>{price}</span></>) : (<span className={styles.currentPrice}>${price}</span>)}
          {hasDiscount && <span className={styles.discountBadge}>{getDiscountPercent(price, discont_price)}%</span>}
        </div>

        
        <div className={styles.counterWrapper}>
          <button className={styles.plus} onClick={() => setCount(count + 1)}>+</button>
          <p className={styles.count}>{count}</p>
          <button className={styles.minus} onClick={() => count > 1 && setCount(count - 1)}>-</button>
          <button className={styles.addToCart}>Add to cart</button>
        </div>

        <div className={styles.description}>
          <h3>Description</h3>
          <p>{description}</p>
        </div>


      </div>
    </div>

    
  );

  
};
