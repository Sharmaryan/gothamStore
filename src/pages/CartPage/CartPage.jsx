import React from "react";
import { CartSummary, CartProduct } from "../../components/Routes/Routes";
import "./CartPage.css";

export const CartPage = () => {
  return (
    <div className="cart-page">
      <div>
        <CartProduct />
      </div>
      <CartSummary />
    </div>
  );
};
