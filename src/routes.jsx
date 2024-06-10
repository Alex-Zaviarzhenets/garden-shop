import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Categories } from "./views/categories";
import { AllSales } from "./views/all-sales";
import { Main } from "./views/main/main";
import { Layout } from "./views/layout";
import { NotFound } from "./views/not-found";
import { Products } from "./views/products/products.jsx";
import { Category } from "./views/category/category.jsx";
import { Product } from "./views/product/product.jsx";
import { Basket } from "./views/basket/basket.jsx";
export const RootRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="categories" element={<Categories />} />
        <Route path="all-sales" element={<AllSales />} />
        <Route path="category/:categoryId" element={<Category />} />
        <Route path="products" element={<Products />} />
        <Route path="product/:id" element={<Product />} />
        <Route path="/basket" element={<Basket />} />
        {/* TODO: Route for the shopping cart (implement yourself) */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
