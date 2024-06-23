import React from "react";
import styles from "./main-form.module.scss";

export const MainForm = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.titleWrapper}>
        <h2 className={styles.title}>5% off on the first order</h2>
      </div>
      <div className={styles.divContainer}>
        <div className={styles.wrapperImg}></div>
        <div className={styles.wrapperInputs}>
          <input type="text" placeholder="Name" className={styles.input} />
          <input type="text" placeholder="Phone number" className={styles.input} />
          <input type="text" placeholder="Email" className={styles.input} />
          <button className={styles.btn}>get a discount</button>
        </div>
      </div>

    </section>
  );
}
