import React, { useContext, useState } from "react";
import styles from "./basket.module.scss";
import { BasketContext } from '../../components/contex/basketContext';

export const Basket = () => {
  const { basket } = useContext(BasketContext);
  const [counts, setCounts] = useState(basket.map(() => 1));

  const handleIncrement = (index) => {
    const newCounts = [...counts];
    newCounts[index] += 1;
    setCounts(newCounts);
  };

  const handleDecrement = (index) => {
    const newCounts = [...counts];
    if (newCounts[index] > 1) {
      newCounts[index] -= 1;
      setCounts(newCounts);
    }
  };

  const itemCount = counts.reduce((sum, count) => sum + count, 0);
  const totalPrice = counts.reduce((sum, count, index) => sum + count * basket[index].discont_price, 0);

  return (
    <>
      <h1 className={styles.cardTitle}>Shopping cart</h1>
      <section className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.card}>
            <ul>
              {basket.map(({ image, price, discont_price, title }, index) => (
                <section key={index} className={styles.mainSection}>
                  <img src={image} alt="card" className={styles.cardImage} />
                  <div className={styles.countItemPriceConteiner}>
                    <h3 className={styles.title}>{title}</h3>
                    <div className={styles.priceCounter}>
                      <div className={styles.counter}>
                        <button className={styles.plus} onClick={() => handleIncrement(index)}>+</button>
                        <div className={styles.count}>{counts[index]}</div>
                        <button className={styles.minus} onClick={() => handleDecrement(index)}>-</button>
                      </div>
                      <div className={styles.prices}>
                        <p className={styles.price}>${discont_price}</p>
                        <p className={styles.discountPrice}>${price}</p>
                      </div>
                    </div>
                  </div>
                </section>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.orderDetails}>
          <div className={styles.details}>
            <h4 className={styles.titleDetails}>Order details</h4>
            <p className={styles.itemCount}>{itemCount} items</p>
            <p className={styles.totalPrice}>Total: ${totalPrice.toFixed(2)}</p>
          </div>

          <form action="" className={styles.form}>
            <input type="text" placeholder="Phone" className={styles.input} />
            <input type="text" placeholder="Number" className={styles.input} />
            <input type="text" placeholder="Email" className={styles.input} />
            <button className={styles.button}>Submit</button>
          </form>
        </div>
      </section>
    </>
  );
};
