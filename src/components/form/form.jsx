import React from "react";
import styles from "./form.module.scss";

export const Form = () => {
  return (
    <div className={styles.wrapperInputs}>
      <input type="text" placeholder="Name" className={styles.input} />
      <input type="text" placeholder="Phone number" className={styles.input} />
      <input type="text" placeholder="Email" className={styles.input} />
      <button className={styles.btn}>get a discount</button>
    </div>
  )
};
