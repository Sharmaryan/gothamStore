import React from "react";
import { SideBar, Products, MobileSearch } from "../../components";
import "./ProductsPage.css";
import { useTitle } from "hooks/useTitle";
export const ProductPage = () => {

  useTitle('Products | Gotham Store')

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
