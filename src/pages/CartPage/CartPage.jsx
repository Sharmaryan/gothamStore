import React from "react";
import { CartSummary, CartProduct } from "../../components/Routes/Routes";
import { useCart } from "context/cart-context";
import "./CartPage.css";
import { useWishlist } from "context/wishlist-context";

export const CartPage = () => {
  const { itemsAdded } = useCart();
  const { wishlistError } = useWishlist();

  return (
    <div className="cart-page">
      <div>
        {wishlistError && <h1>item is already in the wishlist</h1>}
        <CartProduct />
      </div>
      {itemsAdded.length === 0 ? <h1>cart is empty</h1> : <CartSummary />}
    </div>
  );
};
