import React from "react";
import { Link } from "react-router-dom";
import styles from "./not-found.module.scss";

export const NotFound = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.notFound}>
        <div className={styles.numbers}>
          <div className={styles.num}>4</div>
          <div className={styles.num}>0</div>
          <div className={styles.num}>4</div>
        </div>
        <h2 className={styles.title}>Page not found</h2>
        <p className={styles.description}>We’re sorry, the page you requested could not be found. Please go back to the homepage.</p>
      <Link to='/' className={styles.btn}>Go HOME!</Link>

      </div>


    </section>
  );
};
