import React from "react";
import styles from "./basketItem.module.scss";
import { BASE_URL } from "../../constants";


export const basketItem = ({
  price,
  title,
  image,
  discont_price,
  
}) => {

  return (
  <section className={styles.mainSection}>

    <img src={BASE_URL + image}
            alt="card"
            className={styles.cardImage} />
    <div className={styles.countItemPriceConteiner}>
      <h3 className={styles.title}>{title}</h3>
        <div className={styles.priceCounter}>
            <div className={styles.counter}>
              <button className={styles.plus}>+</button>
              <div className={styles.count}>1</div>
              <button className={styles.minus}>-</button>
            </div>
            <div className={styles.prices}>
              <p className={styles.price}>{price}</p>
              <p className={styles.discountPrice}>{discont_price}</p>
            </div>
        </div>
    </div>

  </section>
  )
}
