import React, { useContext } from "react";
import styles from "./basket.module.scss";
import { Form } from "../../components/form/form";
import { BasketContext } from '../../components/contex/basketContext';



export const Basket = () => {
  const { basket } = useContext(BasketContext);
  
  return (
    <> <h1 className={styles.cardTitle}>Shopping cart</h1>
      <section className={styles.wrapper}>

        <div className={styles.container}>
          <div className={styles.card}>

            <ul>
              {basket.map(({ image, price, discont_price, title }) => (

                <section className={styles.mainSection}>

                  <img src={image}
                    alt="card"
                    className={styles.cardImage} />
                  <div className={styles.countItemPriceConteiner}>
                    <h3 className={styles.title}>{title}
                    </h3>
                    <div className={styles.priceCounter}>
                      <div className={styles.counter}>
                        <button className={styles.plus}>+</button>
                        <div className={styles.count}>1</div>
                        <button className={styles.minus}>-</button>
                      </div>
                      <div className={styles.prices}>
                        <p className={styles.price}>${discont_price}</p>
                        <p className={styles.discountPrice}>{price}</p>
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

                  <h4 className={styles.titleDetails}>order details</h4>

                  <p className={styles.itemCount}>3 items</p>

                  <p className={styles.totalPrice}>total </p>


              </div>

              <form action="" className={styles.form}>
                <input type="text" placeholder="phone" className={styles.input}/>
              <input type="text" placeholder="number" className={styles.input}/>
              <input type="text" placeholder="email" className={styles.input}/>
              <button className={styles.button}></button>
              </form>
        </div>
      </section>
    </>
  );
}
