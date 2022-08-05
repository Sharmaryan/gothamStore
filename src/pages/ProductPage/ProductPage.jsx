import React, { useEffect, useState } from "react";
import { SideBar, Products, MobileSearch } from "../../components";
import "./ProductsPage.css";
import { useTitle } from "hooks/useTitle";
export const ProductPage = () => {
  const [mobileFilter, setMobileFilter] = useState(false);
  useTitle("Products | Gotham Store");

  const mobileFilterHandler = () => {
    setMobileFilter((prev) => !prev);
  };

  

  useEffect(() => {

    function handleResize(){
     return window.innerWidth > 792 ? setMobileFilter(true) : setMobileFilter(false);
    }
    
    window.addEventListener("resize", handleResize);
    if (window.innerWidth > 792) {
      setMobileFilter(true);
    }
    return () => {
       window.removeEventListener("resize", handleResize);
    };
  },[]);

  return (
    <div className="product-listing">
      <MobileSearch />
      <i className="fa fa-filter" onClick={mobileFilterHandler}></i>
      <div>
        {mobileFilter && <SideBar />}
        <Products />
      </div>
    </div>
  );
};
