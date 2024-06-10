import React from "react";
import styles from "./hero.module.scss";

export const Hero = () => {

  return (
    <section className={styles.hero}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Amazing Discounts on&nbsp;Garden Products!</h2>
        <button className={styles.button}>check out</button>
      </div>
    </section>
  )
};
