import React from "react";
import { Hero } from "../hero/hero";
import { MainCategories } from "../main-categories/main-categories";
import { MainForm } from "../main-form/main-form";
import { MainSales } from "../main-sales/main-sales";

export const Main = () => {
  
  
  return (
    <main>
      <Hero/>
      <MainCategories hasButton={true} maxSize={4}/>
      <MainForm/>
      <MainSales/>
      
    </main>
  );
};
