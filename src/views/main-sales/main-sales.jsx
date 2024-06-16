import React, { useEffect, useState } from "react";
import { CardItem } from "../../components/card-item";
import { BASE_URL } from "../../constants";
import styles from "./index.module.scss";
import { getDiscountPercent } from "../../utils/getDiscountPercent";


export const MainSales = () => {
  const [saleItems, setSaleItems] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/products/all`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setSaleItems(
          data
            .sort(
              (elem, elem2) =>
                getDiscountPercent(elem2.price, elem2.discont_price) -
                getDiscountPercent(elem.price, elem.discont_price)
            )
            .filter(
              ({ discont_price }, index) => discont_price !== null && index < 4
            )
        );
      });
  }, []);
  
  return (
    <section className={styles.wrapper}>
      <h1 className={styles.title}>Sales</h1>
      <ul className={styles.sales}>
        {saleItems.map(({ price, discont_price, description, image, id, title }) => (
          <CardItem
            title={title}
            key={id}
            price={price}
            discont_price={discont_price}
            discontPercent={getDiscountPercent(price,   discont_price)}
            description={description}
            image={image}
            id={id}
          />
        ))}
      </ul>
    </section>
  );
}
