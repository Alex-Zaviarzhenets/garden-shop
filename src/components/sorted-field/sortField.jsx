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
        Цена
        <input
          className={styles.priceFromTo}
          type="number"
          placeholder="от"
          value={filters.priceFrom}
          onChange={(e) => onFilterChange({ priceFrom: e.target.value })}
        />
        <input
          className={styles.priceFromTo}
          type="number"
          placeholder="до"
          value={filters.priceTo}
          onChange={(e) => onFilterChange({ priceTo: e.target.value })}
        />
      </label>
      <label className={styles.discont}>
        Товары со скидкой
        <input
          className={styles.discountOnOff}
          type="checkbox"
          checked={filters.discounted}
          onChange={(e) => onFilterChange({ discounted: e.target.checked })}
        />
      </label>
      <label>
        Сортировка
        <select
          className={styles.selector}
          value={filters.sortBy}
          onChange={(e) => onSortChange(e.target.value)}
        >
          <option value="default">По умолчанию</option>
          <option value="priceAsc">По возрастанию цены</option>
          <option value="priceDesc">По убыванию цены</option>
          <option value="alphabetically">Алфавитно</option>
        </select>
      </label>
    </div>
  );
};
