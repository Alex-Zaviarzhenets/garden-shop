import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../constants";
import { CardItem } from "../../components/card-item";
import styles from "./all-sales.module.scss";
import { SortField } from "../../components/sorted-field/sortField";

export const AllSales = () => {

  const [saleItems, setSaleItems] = useState([]);
  const [filteredSaleItems, setFilteredSaleItems] = useState([]);
  const [filters, setFilters] = useState({
    priceFrom: "",
    priceTo: "",
    discounted: true,
    sortBy: "default",
  });

  useEffect(() => {
    fetch(`${BASE_URL}/products/all`)
      .then((res) => res.json())
      .then((data) => {
        setSaleItems(
          data

            .filter(
              ({ discont_price }) => discont_price !== null
            )
        );
      });
  })

  useEffect(() => {
    let filtered = saleItems;

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

    setFilteredSaleItems(filtered);
  }, [filters, saleItems]);

  const handleFilterChange = (newFilter) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      ...newFilter,
    }));
  };

  return (
    <section className={styles.mainWrapper}>
      <h1 className={styles.title}>All sales</h1>

      <SortField
        className={styles.sortField}
        filters={filters}
        onFilterChange={handleFilterChange}
        onSortChange={(sortBy) => handleFilterChange({ sortBy })}
      />

      <section className={styles.wrapper}>
        {saleItems.map((props) => (
          <CardItem
            key={props.id}
            {...props}
          />
        ))}
      </section>
    </section>
  )
};
