import React from "react";
import styles from "./sortField.module.scss";

export const SortField = ({
  filters = { priceFrom: "", priceTo: "", discounted: false, sortBy: "default" },
  onFilterChange = () => {},
  onSortChange = () => {},
}) => {
  return (
    <div className={styles.filterSortWrapper}>
      <label>
        Цена
        <input
          type="number"
          placeholder="от"
          value={filters.priceFrom}
          onChange={(e) => onFilterChange({ priceFrom: e.target.value })}
        />
        <input
          type="number"
          placeholder="до"
          value={filters.priceTo}
          onChange={(e) => onFilterChange({ priceTo: e.target.value })}
        />
      </label>
      <label>
        Уценённые товары
        <input
          type="checkbox"
          checked={filters.discounted}
          onChange={(e) => onFilterChange({ discounted: e.target.checked })}
        />
      </label>
      <label>
        Сортировка
        <select
          value={filters.sortBy}
          onChange={(e) => onSortChange(e.target.value)}
        >
          <option value="default">по умолчанию</option>
          <option value="priceAsc">по возрастанию цены</option>
          <option value="priceDesc">по убыванию цены</option>
          <option value="alphabetically">по алфавиту</option>
        </select>
      </label>
    </div>
  );
};
