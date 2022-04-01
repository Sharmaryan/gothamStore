import React from "react";
import { useWishlist } from "context/wishlist-context";
import "./WishlistProduct.css";
export const WishlistProduct = () => {
  const { wishlistItems, removeFromWishlist, moveToCart, errorMsg } =
    useWishlist();
  return (
    <div className="wishlist-items">
      {errorMsg && <h1>item is already in the cart</h1>}
      {wishlistItems.map((item) => {
        const { image, name, price } = item;
        return (
          <div class="card card-dismiss">
            <div class="card-dismiss-btn">
              <i
                class="fa fa-times"
                onClick={() => removeFromWishlist(item)}
              ></i>
            </div>
            <img src={image} alt={name} class="card-logo" />
            <p class="card-title">{name}</p>
            <div class="card-price">{price}</div>

            <div class="card-btns">
              <button class="card-btn" onClick={() => moveToCart(item)}>
                move to cart
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
