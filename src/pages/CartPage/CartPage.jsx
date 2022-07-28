import React from "react";
import { CartProduct, CartSummary} from "components";
import { useCart } from "context/cart-context";
import { Link } from "react-router-dom";
import "./CartPage.css";
import { useTitle } from "hooks/useTitle";

export const CartPage = () => {
  const { itemsAdded } = useCart();
useTitle("Cart | Gotham Store");
  return (
    <div className="cart-page">
      <div>
        <CartProduct />
      </div>
      {itemsAdded.length === 0 ? (
        <h1 className="text-center">
          Oh! Such Empty 
          <Link to="/products" className="wishlist-shop">
            Shop Now
          </Link>
        </h1>
      ) : (
        <CartSummary />
      )}
    </div>
  );
};
