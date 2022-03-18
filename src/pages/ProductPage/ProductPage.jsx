import React from "react";
import { SideBar } from "../../components/Sidebar/Sidebar";
import { Products } from "../../components/Products/Products";
import './ProductsPage.css'
export const ProductPage = () => {
  return (
    <div className="product-page">
      <SideBar />
      <Products />
    </div>
  );
};
