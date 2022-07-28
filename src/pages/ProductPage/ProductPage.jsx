import React from "react";
import { SideBar, Products, MobileSearch } from "../../components";
import "./ProductsPage.css";
export const ProductPage = () => {
  return (
    <div className="product-listing">
      <MobileSearch />
      <div>
        <SideBar />
        <Products />
      </div>
    </div>
  );
};
