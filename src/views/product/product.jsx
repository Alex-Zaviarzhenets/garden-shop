import React, { useEffect, useState } from "react";
import styles from "./product.module.scss";
import { BASE_URL } from "../../constants";
import { useParams } from "react-router-dom";
import { SingleItem } from "../../components/single-item/single-item";
import { getDiscountPercent } from "../../utils/getDiscountPercent";

export const Product = () => {
  let { id } = useParams();
  const [product, setProduct] = useState();

  const fetchData = async () => {
    try {
      const response = await fetch(`${BASE_URL}/products/${id}`);
    const data = await response.json();
    setProduct(data[0]);
    console.log('id ', id)
    console.log(data)
    } catch (error) {
      console.log(error)
    }
    
  }

  useEffect(() => {
    fetchData();
    // fetch(`${BASE_URL}/products/${id}`)
    //   .then((res) => res.json())
    //   .then((data) => setProduct(data));
    
  }, []);

if (!product) return <p>Loading...</p>;

  return (
    <section>
      <ul>
        <SingleItem
          price={product.price}
          title={product.title}
          description={product.description}
          image={BASE_URL + product.image}
          
          discont_price={product.discont_price}
          discountPercent={() => getDiscountPercent(product.price, product.discont_price)}
        />
      </ul>
    </section>);
};
