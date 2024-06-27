import React from "react";
import styles from "./sortField.module.scss";

// Компонент для отображения поля фильтрации и сортировки
export const SortField = ({
  filters = { priceFrom: "", priceTo: "", discounted: false, sortBy: "default" }, // фильтры
  onFilterChange = () => { }, // обработчик изменения фильтров
  onSortChange = () => { }, // обработчик изменения сортировки
}) => {
  return (
    <div className={styles.filterSortWrapper}>
      <label>
        Price
        <input
          className={styles.priceFromTo}
          type="number"
          placeholder="from"
          value={filters.priceFrom}
          onChange={(e) => onFilterChange({ priceFrom: e.target.value })}
        />
        <input
          className={styles.priceFromTo}
          type="number"
          placeholder="to"
          value={filters.priceTo}
          onChange={(e) => onFilterChange({ priceTo: e.target.value })}
        />
      </label>
      <label className={styles.discont}>
        Discounted products
        <input
          className={styles.discountOnOff}
          type="checkbox"
          checked={filters.discounted}
          onChange={(e) => onFilterChange({ discounted: e.target.checked })}
        />
      </label>
      <label>
        Sorting
        <select
          className={styles.selector}
          value={filters.sortBy}
          onChange={(e) => onSortChange(e.target.value)}
        >
          <option value="default">Default</option>
<option value="priceAsc">Price Ascending</option>
<option value="priceDesc">Price Descending</option>
<option value="alphabetically">Alphabetically</option>

        </select>
      </label>
    </div>
  );
};
