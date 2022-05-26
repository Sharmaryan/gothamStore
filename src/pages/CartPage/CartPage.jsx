import React from "react";
import { CartSummary, CartProduct } from "../../components/Routes/Routes";
import { useCart } from "context/cart-context";
import "./CartPage.css";

export const CartPage = () => {
  const { itemsAdded } = useCart();

  return (
    <div className="cart-page">
      <div>
        <CartProduct />
      </div>
      {itemsAdded.length === 0 ? <h1>cart is empty</h1> : <CartSummary />}
    </div>
  );
};
