import React, { useEffect, useState } from "react";
import styles from "./main-categories.module.scss";
import { BASE_URL } from "../../constants";
import { CategoryCard } from "../../components/category-card/categoryCard.jsx";


export const MainCategories = ({hasButton, maxSize=Infinity}) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/categories/all`)
      .then((res) => res.json())
      .then((data) => setCategories(data.slice(0, maxSize)))
  }, [])

  return (
         <section className={styles.wrapperSection}>  
          <h1 className={styles.title}>Categories</h1>

    <section className={styles.wrapper}>
      <header className={styles.header}>
        {/* {hasButton && <button className={styles.button}>All categories</button>} */}
      </header>

      <ul className={styles.categories}>
        {categories.map(({ id, image, title}) => (
          <CategoryCard id={id} key={id} image={BASE_URL + image} title={title}/>

        ))}
      </ul>
    </section>
    </section>
  );
}
