import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../constants";
import { CardItem } from "../../components/card-item";
import styles from "./category.module.scss";
import { SortField } from "../../components/sorted-field/sortField";

export const Category = () => {
  const { categoryId } = useParams();
  const [category, setCategory] = useState({});
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({
    priceFrom: "",
    priceTo: "",
    discounted: false,
    sortBy: "default",
  });
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/categories/${categoryId}`)
      .then((res) => res.json())
      .then(({ category, data }) => {
        setCategory(category)
        setProducts(data)
      })
  }, []);

  useEffect(() => {
    let filtered = products;

    if (filters.priceFrom) {
      filtered = filtered.filter((product) => product.price >= filters.priceFrom);
    }

    if (filters.priceTo) {
      filtered = filtered.filter((product) => product.price <= filters.priceTo);
    }

    if (filters.discounted) {
      filtered = filtered.filter((product) => product.discont_price);
    }

    switch (filters.sortBy) {
      case "priceAsc":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "priceDesc":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "alphabetically":
        filtered.sort((a, b) => a.title.localeCompare(b.title));
        break;
      default:
        break;
    }

    setFilteredProducts(filtered);
  }, [filters, products]);

  const handleFilterChange = (newFilter) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      ...newFilter,
    }));
  };

  return (
    <section className={styles.mainWrapper}>
      <h1 className={styles.title}>{category.title}</h1>
      <SortField
        filters={filters}
        onFilterChange={handleFilterChange}
        onSortChange={(sortBy) => handleFilterChange({ sortBy })}
      />
      <section className={styles.wrapper} >

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
    </section>
  )

}
