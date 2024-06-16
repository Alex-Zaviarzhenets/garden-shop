import React from "react";
import styles from "./sortField.module.scss";

export const SortField = ({
  filters = { priceFrom: "", priceTo: "", discounted: false, sortBy: "default" },
  onFilterChange = () => { },
  onSortChange = () => { },
}) => {
  return (
    <div className={styles.filterSortWrapper}>
      <label>
        Price
        <input
          type="number"
          placeholder="from"
          value={filters.priceFrom}
          onChange={(e) => onFilterChange({ priceFrom: e.target.value })}
        />
        <input
          type="number"
          placeholder="to"
          value={filters.priceTo}
          onChange={(e) => onFilterChange({ priceTo: e.target.value })}
        />
      </label>
      <label>
        Discounted products
        <input
          type="checkbox"
          checked={filters.discounted}
          onChange={(e) => onFilterChange({ discounted: e.target.checked })}
        />
      </label>
      <label>
        Sort
        <select
          value={filters.sortBy}
          onChange={(e) => onSortChange(e.target.value)}
        >
          <option value="default">Default</option>
          <option value="priceAsc">Price ascending</option>
          <option value="priceDesc">Price descending</option>
          <option value="alphabetically">Alphabetically</option>
        </select>
      </label>
    </div>
  );
};
