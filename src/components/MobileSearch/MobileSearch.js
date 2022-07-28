import React from "react";
import { useProduct } from "context";
import "./MobileSearch.css";
export const MobileSearch = () => {
  const { searchProduct, productsDispatch } = useProduct();
  return (
    <div className="mobile-search">
      <input
        type="text"
        placeholder="search products"
        className="search-bar-mobile"
        value={searchProduct}
        onChange={(e) =>
          productsDispatch({
            type: "SEARCH_PRODUCT",
            payload: e.target.value,
          })
        }
      />
    </div>
  );
};
