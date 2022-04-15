import React from "react";
import { useWishlist } from "context/wishlist-context";
import "./WishlistProduct.css";
export const WishlistProduct = () => {
  const { wishlistItems, removeFromWishlist, moveToCart} =
    useWishlist();
  return (
    <div className="wishlist-items">
    
      {wishlistItems.map((item) => {
        const { image, name, price } = item;
        return (
          <div className="card card-dismiss">
            <div className="card-dismiss-btn">
              <i
                className="fa fa-times"
                onClick={() => removeFromWishlist(item)}
              ></i>
            </div>
            <img src={image} alt={name} className="card-logo" />
            <p className="card-title">{name}</p>
            <div className="card-price">₹{price}</div>

            <div className="card-btns">
              <button className="card-btn" onClick={() => moveToCart(item)}>
                move to cart
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
