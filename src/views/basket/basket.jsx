import React from "react";
import styles from "./basket.module.scss";
import { Form } from "../../components/form/form";

export const Basket = () => {
  return (
   <> <h1 className={styles.title}>Shopping cart</h1>
    <section className={styles.wrapper}>
      
      <div className={styles.container}>
        <div className={styles.card}></div>
      </div>

      <div className={styles.orderDetails}>
        <Form/>
      </div>
    </section>
    </>
  );
}
