import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../constants";
import { CardItem } from "../../components/card-item";
import styles from "./products.module.scss";
import { SortField } from "../../components/sorted-field/sortField";

export const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filters, setFilters] = useState({
    priceFrom: "",
    priceTo: "",
    discounted: true,
    sortBy: "default",
  });

  useEffect(() => {
    fetch(`${BASE_URL}/products/all`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
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
        filtered.sort((a, b) => a.name.localeCompare(b.name));
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
    <>
      <SortField 
        filters={filters}
        onFilterChange={handleFilterChange}
        onSortChange={(sortBy) => handleFilterChange({ sortBy })}
      />

      <section className={styles.wrapper}>
        {filteredProducts.map((props) => (
          <CardItem key={props.id} {...props} />
        ))}
      </section>
    </>
  );
};
