import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../constants";
import { CardItem } from "../../components/card-item";
import styles from "./category.module.scss";

export const Category = () => {
  const { categoryId } = useParams();
  const [category, setCategory] = useState({});
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/categories/${categoryId}`)
      .then((res) => res.json())
      .then(({ category, data }) => {
        setCategory(category)
        setProducts(data)
      })
  }, [])


  return (
    <section className={styles.wrapper} >
      {/* <h1 className={styles.title}>{category.title}</h1> */}
      <ul className={styles.products}>
        {
          products.map((props) => (
            <CardItem
              key={props.id}
              {...props}
            />
          ))
        }
      </ul>
    </section>
  )

}
